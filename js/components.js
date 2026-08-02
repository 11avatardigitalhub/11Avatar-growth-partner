/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * Reusable UI Components
 * Industry Growth Intelligence System™
 * ============================================================
 */

// ============================================================
// SECTION HEADER COMPONENT
// ============================================================
function createSectionHeader(options) {
    var opts = options || {};
    var align = opts.center ? ' center' : '';
    
    var html = '<div class="section-header' + align + '">';
    
    if (opts.smallText) {
        html += '<span class="text-sm gold">' + opts.smallText + '</span>';
    }
    
    if (opts.title) {
        html += '<h2 class="section-title">';
        if (opts.highlightText) {
            html += opts.title.replace(
                opts.highlightText,
                '<span class="gold">' + opts.highlightText + '</span>'
            );
        } else {
            html += opts.title;
        }
        html += '</h2>';
    }
    
    if (opts.subtitle) {
        html += '<p class="section-sub">' + opts.subtitle + '</p>';
    }
    
    html += '</div>';
    return html;
}

// ============================================================
// CARD COMPONENT
// ============================================================
function createCard(options) {
    var opts = options || {};
    var html = '<div class="card">';
    
    if (opts.icon) {
        html += '<span class="icon"><i class="' + opts.icon + '"></i></span>';
    }
    
    if (opts.title) {
        html += '<h4>' + opts.title + '</h4>';
    }
    
    if (opts.content) {
        html += '<p>' + opts.content + '</p>';
    }
    
    if (opts.list && opts.list.length > 0) {
        html += '<ul>';
        for (var i = 0; i < opts.list.length; i++) {
            html += '<li>' + opts.list[i] + '</li>';
        }
        html += '</ul>';
    }
    
    html += '</div>';
    return html;
}

// ============================================================
// PROBLEM CARD COMPONENT
// ============================================================
function createProblemCard(problem) {
    var html = '<div class="problem-card">';
    html += '<div class="problem-title">⚠️ ' + problem.problem + '</div>';
    html += '<div class="problem-reason">📋 Why it happens: ' + (problem.reason || problem.whyItHappens) + '</div>';
    html += '<div class="problem-solution">✓ Digital Solution: ' + (problem.solution || problem.digitalSolution) + '</div>';
    html += '</div>';
    return html;
}

// ============================================================
// JOURNEY CARD COMPONENT
// ============================================================
function createJourneyCard(stage) {
    var icons = {
        discovery: 'fas fa-search',
        trust: 'fas fa-shield-alt',
        conversion: 'fas fa-check-circle',
        retention: 'fas fa-redo'
    };
    
    var html = '<div class="card">';
    html += '<span class="icon"><i class="' + (icons[stage.type] || 'fas fa-circle') + '"></i></span>';
    html += '<h4>' + (stage.title || stage.type) + '</h4>';
    html += '<p style="font-size:0.8rem;">' + (stage.description || stage.channels || '') + '</p>';
    html += '</div>';
    return html;
}

// ============================================================
// TAG COMPONENT
// ============================================================
function createTag(text, isLarge) {
    var cls = isLarge ? 'tag lg' : 'tag';
    return '<span class="' + cls + '">' + text + '</span>';
}

function createTagGroup(tags, isLarge) {
    var html = '<div class="tag-group' + (isLarge ? ' center' : '') + '"';
    if (isLarge) html += ' style="justify-content:center;"';
    html += '>';
    for (var i = 0; i < tags.length; i++) {
        html += createTag(tags[i], isLarge);
    }
    html += '</div>';
    return html;
}

// ============================================================
// CHECKLIST COMPONENT
// ============================================================
function createChecklistCategory(categoryName, assets) {
    var html = '<div style="margin-bottom:22px;">';
    html += '<div class="check-category-title">📌 ' + categoryName + '</div>';
    html += '<div class="checklist-grid">';
    
    for (var i = 0; i < assets.length; i++) {
        var asset = assets[i];
        var assetKey = categoryName + '::' + asset;
        var isSelected = APP_STATE.selectedAssets[assetKey] ? true : false;
        var selClass = isSelected ? ' selected' : '';
        var iconClass = isSelected ? 'fa-check-circle' : 'fa-circle';
        
        html += '<div class="check-item' + selClass + '" ';
        html += 'data-asset-key="' + escapeHTML(assetKey) + '" ';
        html += 'onclick="handleChecklistClick(this)" ';
        html += 'role="checkbox" ';
        html += 'aria-checked="' + isSelected + '" ';
        html += 'tabindex="0" ';
        html += 'onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();handleChecklistClick(this);}">';
        html += '<i class="fas ' + iconClass + '"></i> ';
        html += asset;
        html += '</div>';
    }
    
    html += '</div></div>';
    return html;
}

/**
 * Escape HTML special characters
 */
function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Handle checklist item click
 */
function handleChecklistClick(el) {
    var assetKey = el.getAttribute('data-asset-key');
    if (!assetKey) return;
    
    var isSelected = toggleAsset(assetKey);
    
    if (isSelected) {
        el.classList.add('selected');
        el.querySelector('i').className = 'fas fa-check-circle';
        el.setAttribute('aria-checked', 'true');
    } else {
        el.classList.remove('selected');
        el.querySelector('i').className = 'fas fa-circle';
        el.setAttribute('aria-checked', 'false');
    }
    
    // Update proposal panel if visible
    if (typeof updateProposalPanel === 'function') {
        updateProposalPanel();
    }
    
    // Save to localStorage
    if (APP_STATE.currentIndustry) {
        saveSelectedAssets(APP_STATE.currentIndustry);
    }
    
    // Track event
    trackEvent('asset', isSelected ? 'select' : 'deselect', assetKey);
}

// ============================================================
// QUANTIFIED TABLE COMPONENT
// ============================================================
function createQuantifiedTable(deliverables) {
    var html = '<div class="quant-table-wrapper"><table class="quant-table">';
    html += '<thead><tr><th>Deliverable</th><th>Quantity</th><th>Details</th></tr></thead>';
    html += '<tbody>';
    
    for (var i = 0; i < deliverables.length; i++) {
        var d = deliverables[i];
        html += '<tr>';
        html += '<td><strong>' + d.item + '</strong></td>';
        html += '<td>' + d.qty + '</td>';
        html += '<td>' + d.detail + '</td>';
        html += '</tr>';
    }
    
    html += '</tbody></table></div>';
    html += '<p class="quant-note">* Exact quantities finalized during discovery call based on your specific requirements and budget. Above represents our standard comprehensive package by 11 Avtar Digital Hub.</p>';
    return html;
}

// ============================================================
// DELIVERABLE GROUP COMPONENT
// ============================================================
function createDeliverableGroup(categoryName, items) {
    var html = '<div class="deliverable-group">';
    html += '<h4 class="deliverable-group-title">' + categoryName + '</h4>';
    html += '<div class="deliverable-items">';
    
    for (var i = 0; i < items.length; i++) {
        html += '<span class="deliverable-item">' + items[i] + '</span>';
    }
    
    html += '</div></div>';
    return html;
}

// ============================================================
// PROPOSAL PANEL COMPONENT
// ============================================================
function createProposalPanel(industryData) {
    var totalAssets = 0;
    for (var cat in industryData.digitalAssets) {
        if (industryData.digitalAssets.hasOwnProperty(cat)) {
            totalAssets += industryData.digitalAssets[cat].length;
        }
    }
    
    var selectedCount = countSelectedAssets();
    var maturityPercent = selectedCount > 0 ? Math.round((selectedCount / totalAssets) * 100) : 0;
    
    var html = '<div class="proposal-panel" id="proposalPanel">';
    
    // Title
    html += '<h4 class="proposal-panel-title">';
    html += '<i class="fas fa-file-contract"></i> Live Consulting Proposal';
    html += '</h4>';
    
    // Framework badge
    html += '<div class="framework-badge">';
    html += industryData.signature + ' — ' + industryData.name;
    html += '</div>';
    
    // Selected assets display
    html += '<div class="selected-assets-display" id="selectedAssetsDisplay">';
    if (selectedCount === 0) {
        html += '<span style="color:var(--text-muted);font-size:0.8rem;">👆 Select digital assets above to build your proposal...</span>';
    } else {
        for (var key in APP_STATE.selectedAssets) {
            if (APP_STATE.selectedAssets.hasOwnProperty(key)) {
                var parts = key.split('::');
                html += '<span class="selected-asset-tag">' + parts[0].split(' ')[0] + ': ' + parts[1] + '</span>';
            }
        }
    }
    html += '</div>';
    
    // Gap indicator
    html += '<div class="gap-indicator" id="gapIndicator">';
    if (selectedCount === 0) {
        html += 'Select assets to see your digital maturity score.';
    } else {
        html += '📊 Digital Maturity: ' + selectedCount + '/' + totalAssets + ' assets selected (' + maturityPercent + '%).<br>💡 11 Avtar Digital Hub will suggest remaining essential assets for your ' + industryData.name + ' business.';
    }
    html += '</div>';
    
    // Generate Proposal button
    html += '<button class="btn btn-gold btn-block" onclick="generateProposal()">';
    html += '<i class="fas fa-file-alt"></i> Generate Proposal';
    html += '</button>';
    
    // WhatsApp button
    html += '<button class="btn btn-wa btn-block" style="margin-top:8px;" onclick="sendProposalViaWhatsApp()">';
    html += '<i class="fab fa-whatsapp"></i> Send via WhatsApp (+91 8959592006)';
    html += '</button>';
    
    html += '</div>';
    return html;
}

// ============================================================
// PHILOSOPHY BOX COMPONENT
// ============================================================
function createPhilosophyBox() {
    var html = '<div class="philosophy-box">';
    html += '<span class="text-sm" style="color:var(--gold);">Why 11 Avtar Digital Hub</span>';
    html += '<h2 style="margin-top:4px;color:var(--text-on-dark);">We Do Not Offer Services First.<br><span class="gold">We Diagnose Your Industry, Map The Customer Journey, And Build The Required Ecosystem.</span></h2>';
    html += '<div class="pillars">';
    html += '<div class="pillar">✓ Industry Research</div>';
    html += '<div class="pillar">✓ Customer Journey Mapping</div>';
    html += '<div class="pillar">✓ Digital Architecture</div>';
    html += '<div class="pillar">✓ Conversion Strategy</div>';
    html += '<div class="pillar">✓ Automation Thinking</div>';
    html += '<div class="pillar">✓ Long Term Growth Planning</div>';
    html += '</div></div>';
    return html;
}

// ============================================================
// HIGHLIGHT BANNER COMPONENT
// ============================================================
function createHighlightBanner(text) {
    return '<div class="highlight-banner">' + (text || 'All managed by 11 Avtar Digital Hub — single point of contact, complete accountability.') + '</div>';
}

// ============================================================
// HERO SECTION COMPONENT (for industry pages)
// ============================================================
function createIndustryHero(industryData) {
    var html = '<section style="padding-top:40px;"><div class="container">';
    html += '<div class="section-header">';
    html += '<span class="text-sm gold">' + industryData.icon + ' ' + industryData.name + ' Intelligence</span>';
    html += '<h2 class="section-title">' + industryData.signature + '</h2>';
    html += '<p class="section-sub">' + industryData.understanding + '</p>';
    html += '<p style="margin-top:8px;font-style:italic;color:var(--text-muted);">';
    html += 'We don\'t just manage social media. We build the entire digital ecosystem that drives growth, trust, and repeat business — specific to the <strong>' + industryData.name + '</strong> industry.';
    html += '</p>';
    html += '</div></div></section>';
    return html;
}

// ============================================================
// INDUSTRY CARD COMPONENT (for listing pages)
// ============================================================
function createIndustryCard(industry) {
    var html = '<a href="#/industry/' + industry.slug + '" class="industry-card">';
    html += '<span class="industry-card-icon">' + industry.icon + '</span>';
    html += '<div class="industry-card-name">' + industry.name + '</div>';
    html += '<div class="industry-card-framework">' + industry.signature + '</div>';
    html += '</a>';
    return html;
}

// ============================================================
// UPDATE PROPOSAL PANEL (called after checklist changes)
// ============================================================
function updateProposalPanel() {
    var display = document.getElementById('selectedAssetsDisplay');
    var gap = document.getElementById('gapIndicator');
    
    if (!display || !gap) return;
    
    var selectedCount = countSelectedAssets();
    var industryData = getIndustryData();
    
    if (!industryData) return;
    
    var totalAssets = 0;
    for (var cat in industryData.digitalAssets) {
        if (industryData.digitalAssets.hasOwnProperty(cat)) {
            totalAssets += industryData.digitalAssets[cat].length;
        }
    }
    
    if (selectedCount === 0) {
        display.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">👆 Select digital assets above to build your proposal...</span>';
        gap.innerHTML = 'Select assets to see your digital maturity score.';
    } else {
        var html = '';
        for (var key in APP_STATE.selectedAssets) {
            if (APP_STATE.selectedAssets.hasOwnProperty(key)) {
                var parts = key.split('::');
                html += '<span class="selected-asset-tag">' + parts[0].split(' ')[0] + ': ' + parts[1] + '</span>';
            }
        }
        display.innerHTML = html;
        
        var pct = Math.round((selectedCount / totalAssets) * 100);
        gap.innerHTML = '📊 Digital Maturity: ' + selectedCount + '/' + totalAssets + ' assets selected (' + pct + '%).<br>💡 11 Avtar Digital Hub will suggest remaining essential assets.';
    }
}

// ============================================================
// GET CURRENT INDUSTRY DATA
// ============================================================
function getIndustryData() {
    if (!APP_STATE.currentIndustry) return null;
    
    // Try to get from global variable
    var dataVar = getIndustryDataVar(APP_STATE.currentIndustry);
    if (dataVar && window[dataVar]) {
        return window[dataVar];
    }
    
    // Fallback: return industry registry entry
    return getIndustryById(APP_STATE.currentIndustry);
}

console.log('✅ 11 Avtar Digital Hub — Components loaded');
console.log('🧩 Available components: createSectionHeader, createCard, createProblemCard, createChecklistCategory, createQuantifiedTable, createProposalPanel, createPhilosophyBox, createIndustryHero, createIndustryCard');