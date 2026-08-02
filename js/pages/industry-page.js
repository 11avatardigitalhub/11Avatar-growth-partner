/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * INDUSTRY PAGE RENDERER — FIXED VERSION
 * Industry Growth Intelligence System™
 * ============================================================
 */

function renderIndustryPage(slug) {
    var main = document.getElementById('mainContent');
    if (!main) {
        console.error('❌ mainContent element not found');
        return;
    }

    // Find industry metadata from registry
    var industry = getIndustryBySlug(slug);
    if (!industry) {
        console.error('❌ Industry not found for slug:', slug);
        render404Page();
        return;
    }

    // Get full data — try multiple methods
    var data = null;
    
    // Method 1: Try global variable name from registry
    var dataVar = industry.dataVar;
    if (dataVar && window[dataVar]) {
        data = window[dataVar];
        console.log('✅ Data loaded via global:', dataVar);
    }
    
    // Method 2: Try looking up in ALL_DATA object (if exists)
    if (!data && window.ALL_INDUSTRY_DATA && window.ALL_INDUSTRY_DATA[industry.id]) {
        data = window.ALL_INDUSTRY_DATA[industry.id];
        console.log('✅ Data loaded via ALL_DATA:', industry.id);
    }
    
    // Method 3: Try common variable naming patterns
    if (!data) {
        var possibleNames = [
            industry.id.toUpperCase() + '_DATA',
            industry.id.charAt(0).toUpperCase() + industry.id.slice(1) + 'Data',
            'INDUSTRY_DATA_' + industry.id.toUpperCase()
        ];
        for (var i = 0; i < possibleNames.length; i++) {
            if (window[possibleNames[i]]) {
                data = window[possibleNames[i]];
                console.log('✅ Data loaded via fallback:', possibleNames[i]);
                break;
            }
        }
    }
    
    // If still no data, show error
    if (!data) {
        console.error('❌ Could not load data for:', industry.id);
        console.log('Available global vars with DATA:', Object.keys(window).filter(function(k) { return k.indexOf('DATA') > -1; }));
        
        main.innerHTML = '<section style="text-align:center;padding:80px;"><div class="container">' +
            '<h2 style="color:var(--gold);">⚠️ Blueprint Loading Issue</h2>' +
            '<p style="margin:20px 0;">The ' + industry.name + ' blueprint data could not be loaded.</p>' +
            '<p style="font-size:0.85rem;color:var(--text-muted);">This may be because the data file has not been created yet or contains an error.</p>' +
            '<p style="font-size:0.85rem;color:var(--text-muted);">Expected file: <code>js/data/' + industry.id + '.js</code></p>' +
            '<p style="font-size:0.85rem;color:var(--text-muted);">Expected variable: <code>' + (dataVar || industry.id.toUpperCase() + '_DATA') + '</code></p>' +
            '<a href="#/" class="btn btn-gold" style="margin-top:20px;display:inline-block;">← Back to Home</a>' +
            '</div></section>';
        return;
    }

    // Set state
    APP_STATE.currentPage = 'industry';
    APP_STATE.currentIndustry = data.id || industry.id;
    loadSelectedAssets(data.id || industry.id);
    
    document.title = (data.name || industry.name) + ' Blueprint | ' + (data.signature || '') + ' | 11 Avtar Digital Hub';

    var html = '';

    // ============================================================
    // 1. HERO / INDUSTRY UNDERSTANDING
    // ============================================================
    html += '<section style="padding-top:40px;">';
    html += '<div class="container">';
    html += '<div class="sec-head">';
    html += '<span class="text-sm gold">' + (data.icon || industry.icon || '') + ' ' + (data.name || industry.name || '') + ' Intelligence</span>';
    html += '<h2 class="sec-title">' + (data.signature || '') + '</h2>';
    html += '<p class="sec-sub">' + (data.understanding || 'Complete digital growth ecosystem for ' + (data.name || industry.name) + ' industry.') + '</p>';
    html += '<p style="margin-top:8px;font-weight:500;color:var(--gold);">We don\'t just manage social media. We build the entire digital ecosystem that drives growth, trust, and repeat business — specific to the <strong>' + (data.name || industry.name) + '</strong> industry.</p>';
    html += '</div></div></section>';

    // ============================================================
    // 2. BUSINESS CHALLENGES
    // ============================================================
    if (data.challenges && data.challenges.length > 0) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head">';
        html += '<span class="text-sm gold">Business Challenges</span>';
        html += '<h2 class="sec-title">Industry-Specific <span class="gold">Problems We Solve</span></h2>';
        html += '<p class="sec-sub">11 Avtar Digital Hub has identified the critical digital challenges facing ' + (data.name || industry.name) + ' businesses. Each challenge has a specific, actionable digital solution.</p>';
        html += '</div><div class="grid-2">';
        for (var c = 0; c < data.challenges.length; c++) {
            var ch = data.challenges[c];
            html += '<div class="problem-card">';
            html += '<div class="problem-title">⚠️ ' + (ch.problem || '') + '</div>';
            html += '<div class="problem-reason">📋 <strong>Why it happens:</strong> ' + (ch.whyItHappens || ch.reason || '') + '</div>';
            html += '<div class="problem-solution">✓ <strong>Digital Solution by 11 Avtar Digital Hub:</strong> ' + (ch.digitalSolution || ch.solution || '') + '</div>';
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 3. CUSTOMER JOURNEY
    // ============================================================
    if (data.customerJourney) {
        var journey = data.customerJourney;
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Customer Journey</span>';
        html += '<h2 class="sec-title">How Your <span class="gold">Customers Decide</span></h2>';
        html += '</div><div class="grid-4">';
        
        var stages = [
            { key: 'discovery', icon: 'fa-search', label: 'Discovery' },
            { key: 'trust', icon: 'fa-shield-alt', label: 'Trust Building' },
            { key: 'conversion', icon: 'fa-check-circle', label: 'Conversion' },
            { key: 'retention', icon: 'fa-redo', label: 'Retention' }
        ];
        
        for (var st = 0; st < stages.length; st++) {
            var stage = journey[stages[st].key];
            if (stage) {
                html += '<div class="card">';
                html += '<span class="icon"><i class="fas ' + stages[st].icon + '"></i></span>';
                html += '<h4>' + (stage.title || stages[st].label) + '</h4>';
                if (stage.channels) {
                    var channelsText = Array.isArray(stage.channels) ? stage.channels.slice(0, 3).join(', ') : stage.channels;
                    html += '<p style="font-size:0.75rem;color:var(--text-muted);">' + channelsText + '...</p>';
                }
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 4. WEBSITE ARCHITECTURE & PLATFORMS
    // ============================================================
    html += '<section class="alt"><div class="container">';
    html += '<div class="sec-head">';
    html += '<span class="text-sm gold">Website & Platforms</span>';
    html += '<h2 class="sec-title">Custom <span class="gold">Digital Architecture</span></h2>';
    html += '</div><div class="grid-2">';
    
    // Website Architecture
    html += '<div class="card"><h4>🖥️ Website Blueprint</h4><ul>';
    if (data.websiteArchitecture) {
        if (Array.isArray(data.websiteArchitecture)) {
            for (var w = 0; w < Math.min(data.websiteArchitecture.length, 8); w++) {
                html += '<li>' + data.websiteArchitecture[w] + '</li>';
            }
        } else if (data.websiteArchitecture.pages) {
            for (var wp = 0; wp < Math.min(data.websiteArchitecture.pages.length, 6); wp++) {
                html += '<li><strong>' + data.websiteArchitecture.pages[wp].name + ':</strong> ' + data.websiteArchitecture.pages[wp].purpose + '</li>';
            }
        }
    } else {
        html += '<li>Custom website architecture for ' + (data.name || industry.name) + '</li>';
    }
    html += '</ul></div>';
    
    // Platforms & Content
    html += '<div class="card"><h4>📱 Platform Ecosystem</h4>';
    if (data.platforms && Array.isArray(data.platforms)) {
        html += '<div class="tag-group">';
        for (var pl = 0; pl < data.platforms.length; pl++) {
            html += '<span class="tag">' + data.platforms[pl] + '</span>';
        }
        html += '</div>';
    }
    if (data.contentPillars && Array.isArray(data.contentPillars)) {
        html += '<div style="margin-top:14px;"><h4>📝 Content Pillars</h4><ul>';
        for (var cp = 0; cp < Math.min(data.contentPillars.length, 4); cp++) {
            html += '<li>' + data.contentPillars[cp] + '</li>';
        }
        html += '</ul></div>';
    }
    html += '</div>';
    html += '</div></div></section>';

    // ============================================================
    // 5. PLATFORM ECOSYSTEM CATEGORIZED
    // ============================================================
    if (data.platformEcosystem) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Platform Ecosystem</span>';
        html += '<h2 class="sec-title">Where Your <span class="gold">Customers Interact</span></h2>';
        html += '</div><div class="grid-4">';
        
        var pStages = ['discovery', 'trust', 'conversion', 'retention'];
        var pColors = ['#C5A46D', '#A8894F', '#8A6D3B', '#6B5229'];
        var pIcons = ['fa-search', 'fa-shield-alt', 'fa-shopping-cart', 'fa-redo'];
        
        for (var ps = 0; ps < pStages.length; ps++) {
            var plat = data.platformEcosystem[pStages[ps]];
            if (plat) {
                html += '<div class="card">';
                html += '<span class="icon"><i class="fas ' + pIcons[ps] + '" style="color:' + pColors[ps] + ';"></i></span>';
                html += '<h4>' + (plat.title || pStages[ps].charAt(0).toUpperCase() + pStages[ps].slice(1)) + '</h4>';
                if (plat.platforms && Array.isArray(plat.platforms)) {
                    html += '<div class="tag-group">';
                    for (var pp = 0; pp < Math.min(plat.platforms.length, 4); pp++) {
                        html += '<span class="tag" style="font-size:0.65rem;padding:3px 10px;">' + plat.platforms[pp] + '</span>';
                    }
                    html += '</div>';
                }
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 6. GROWTH OPPORTUNITIES
    // ============================================================
    if (data.growthOpportunities && data.growthOpportunities.length > 0) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Growth Opportunities</span>';
        html += '<h2 class="sec-title">Untapped <span class="gold">Revenue Streams</span></h2>';
        html += '</div>';
        html += '<div class="tag-group" style="justify-content:center;">';
        for (var go = 0; go < data.growthOpportunities.length; go++) {
            var opp = data.growthOpportunities[go];
            html += '<span class="tag lg">🚀 ' + (opp.opportunity || opp) + '</span>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 7. QUANTIFIED DELIVERABLES
    // ============================================================
    if (data.deliverables) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Quantified Deliverables</span>';
        html += '<h2 class="sec-title">Exactly What <span class="gold">You Get</span></h2>';
        html += '</div>';
        
        if (Array.isArray(data.deliverables)) {
            html += '<div class="quant-table-wrapper"><table class="quant-table"><thead><tr><th>Deliverable</th><th>Quantity</th><th>Details</th></tr></thead><tbody>';
            for (var d = 0; d < data.deliverables.length; d++) {
                html += '<tr><td><strong>' + data.deliverables[d].item + '</strong></td><td>' + data.deliverables[d].qty + '</td><td>' + data.deliverables[d].detail + '</td></tr>';
            }
            html += '</tbody></table></div>';
        } else {
            html += '<div class="tag-group" style="justify-content:center;margin-bottom:20px;">';
            for (var dk in data.deliverables) {
                if (data.deliverables.hasOwnProperty(dk)) {
                    html += '<span class="tag lg">📦 ' + (data.deliverables[dk].item || dk) + ': ' + (data.deliverables[dk].qty || 'Included') + '</span>';
                }
            }
            html += '</div>';
        }
        html += '<p class="quant-note">* Exact quantities finalized during discovery call. Standard comprehensive package by 11 Avtar Digital Hub.</p>';
        html += '</div></section>';
    }

    // ============================================================
    // 8. DIGITAL ASSETS CHECKLIST
    // ============================================================
    if (data.digitalAssets) {
        var totalAssets = 0;
        for (var cat in data.digitalAssets) {
            if (data.digitalAssets.hasOwnProperty(cat) && Array.isArray(data.digitalAssets[cat])) {
                totalAssets += data.digitalAssets[cat].length;
            }
        }
        
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Digital Asset Checklist</span>';
        html += '<h2 class="sec-title">Select Your <span class="gold">Required Assets</span></h2>';
        html += '<p class="sec-sub">Check what you need. 11 Avtar Digital Hub will build your custom growth proposal. (' + totalAssets + ' total assets available)</p>';
        html += '</div>';
        
        for (var cat2 in data.digitalAssets) {
            if (data.digitalAssets.hasOwnProperty(cat2) && Array.isArray(data.digitalAssets[cat2])) {
                html += '<div style="margin-bottom:22px;">';
                html += '<div class="check-category-title">📌 ' + cat2 + '</div>';
                html += '<div class="checklist-grid">';
                var assets = data.digitalAssets[cat2];
                for (var a = 0; a < assets.length; a++) {
                    var assetKey = cat2 + '::' + assets[a];
                    var isSelected = APP_STATE.selectedAssets && APP_STATE.selectedAssets[assetKey] ? true : false;
                    var selClass = isSelected ? ' selected' : '';
                    var iconClass = isSelected ? 'fa-check-circle' : 'fa-circle';
                    html += '<div class="check-item' + selClass + '" data-asset-key="' + assetKey.replace(/"/g, '&quot;') + '" onclick="if(typeof handleChecklistClick===\'function\')handleChecklistClick(this);" role="checkbox" aria-checked="' + isSelected + '">';
                    html += '<i class="fas ' + iconClass + '"></i> ' + assets[a];
                    html += '</div>';
                }
                html += '</div></div>';
            }
        }
        html += '</div></section>';
    }

    // ============================================================
    // 9. LIVE PROPOSAL PANEL
    // ============================================================
    var selectedCount = countSelectedAssets ? countSelectedAssets() : 0;
    var maturityPercent = totalAssets > 0 ? Math.round((selectedCount / totalAssets) * 100) : 0;
    
    html += '<section><div class="container">';
    html += '<div class="proposal-panel">';
    html += '<h4 class="proposal-panel-title"><i class="fas fa-file-contract"></i> Live Consulting Proposal</h4>';
    html += '<div class="framework-badge">' + (data.signature || '') + ' — ' + (data.name || industry.name) + '</div>';
    html += '<div class="selected-assets-display" id="selectedAssetsDisplay">';
    if (selectedCount === 0) {
        html += '<span style="color:var(--text-muted);font-size:0.8rem;">👆 Select digital assets above to build your proposal...</span>';
    }
    html += '</div>';
    html += '<div class="gap-indicator" id="gapIndicator">';
    html += selectedCount === 0 ? 'Select assets to see your digital maturity score.' : '📊 Digital Maturity: ' + selectedCount + '/' + totalAssets + ' assets selected (' + maturityPercent + '%)';
    html += '</div>';
    html += '<button class="btn btn-gold btn-block" onclick="if(typeof generateProposal===\'function\')generateProposal();else alert(\'Proposal generator loading...\');"><i class="fas fa-file-alt"></i> Generate Proposal</button>';
    html += '<button class="btn btn-wa btn-block" style="margin-top:8px;" onclick="if(typeof sendProposalViaWhatsApp===\'function\')sendProposalViaWhatsApp();else window.open(\'https://wa.me/918959592006?text=Hi 11 Avtar Digital Hub, I am interested in ' + encodeURIComponent(data.name || industry.name) + ' growth system\',\'_blank\');"><i class="fab fa-whatsapp"></i> Send via WhatsApp (+91 8959592006)</button>';
    html += '</div></div></section>';

    // ============================================================
    // 10. FAQ
    // ============================================================
    if (data.faqs && data.faqs.length > 0) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Frequently Asked Questions</span>';
        html += '<h2 class="sec-title">' + (data.name || industry.name) + ' <span class="gold">FAQ</span></h2>';
        html += '</div><div class="grid-2">';
        for (var fq = 0; fq < Math.min(data.faqs.length, 4); fq++) {
            html += '<div class="card">';
            html += '<h4 style="font-size:0.9rem;">❓ ' + data.faqs[fq].question + '</h4>';
            html += '<p style="font-size:0.78rem;">' + data.faqs[fq].answer.substring(0, 200) + '...</p>';
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 11. PHILOSOPHY
    // ============================================================
    html += '<section class="alt"><div class="container">';
    html += '<div class="philosophy-box">';
    html += '<span class="text-sm" style="color:var(--gold);">Why 11 Avtar Digital Hub</span>';
    html += '<h2 style="margin-top:4px;color:var(--text-on-dark);">We Do Not Offer Services First.<br><span class="gold">We Diagnose Your Industry, Map The Customer Journey, And Build The Required Ecosystem.</span></h2>';
    html += '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:20px;border-top:1px solid rgba(255,255,255,0.08);padding-top:20px;">';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Industry Research</div><div style="color:#ccc;font-size:0.8rem;">✓ Journey Mapping</div><div style="color:#ccc;font-size:0.8rem;">✓ Digital Architecture</div><div style="color:#ccc;font-size:0.8rem;">✓ Conversion Strategy</div><div style="color:#ccc;font-size:0.8rem;">✓ Automation</div><div style="color:#ccc;font-size:0.8rem;">✓ Growth Planning</div>';
    html += '</div></div></div></section>';

    main.innerHTML = html;
    scrollToTop();
    updateActiveNavLink('industry');
    
    console.log('✅ Industry page rendered: ' + (data.name || industry.name));
}