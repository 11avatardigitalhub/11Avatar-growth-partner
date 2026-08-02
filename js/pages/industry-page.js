/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * INDUSTRY PAGE RENDERER
 * Renders complete industry blueprint from data files
 * Industry Growth Intelligence System™
 * ============================================================
 */

function renderIndustryPage(slug) {
    var main = document.getElementById('mainContent');
    if (!main) return;

    // Find industry data
    var industry = getIndustryBySlug(slug);
    if (!industry) {
        render404Page();
        return;
    }

    // Get full data from global variable
    var dataVar = industry.dataVar;
    var data = window[dataVar];
    if (!data) {
        main.innerHTML = '<section style="text-align:center;padding:80px;"><div class="container"><h2>Loading ' + industry.name + ' Blueprint...</h2><p>If this doesn\'t load, please refresh the page.</p></div></section>';
        return;
    }

    // Set state
    APP_STATE.currentPage = 'industry';
    APP_STATE.currentIndustry = data.id;
    loadSelectedAssets(data.id);
    
    document.title = data.name + ' Blueprint | ' + data.signature + ' | 11 Avtar Digital Hub';

    var html = '';

    // ============================================================
    // 1. HERO / INDUSTRY UNDERSTANDING
    // ============================================================
    html += '<section style="padding-top:40px;">';
    html += '<div class="container">';
    html += '<div class="sec-head">';
    html += '<span class="text-sm gold">' + data.icon + ' ' + data.name + ' Intelligence</span>';
    html += '<h2 class="sec-title">' + data.signature + '</h2>';
    html += '<p class="sec-sub">' + (data.understanding || 'Complete digital growth ecosystem for ' + data.name + ' industry.') + '</p>';
    if (data.revenueModel) {
        html += '<p style="margin-top:8px;font-style:italic;color:var(--text-muted);">' + data.revenueModel.substring(0, 200) + '...</p>';
    }
    html += '<p style="margin-top:8px;font-weight:500;color:var(--gold);">We don\'t just manage social media. We build the entire digital ecosystem that drives growth, trust, and repeat business — specific to the <strong>' + data.name + '</strong> industry.</p>';
    html += '</div></div></section>';

    // ============================================================
    // 2. BUSINESS CHALLENGES
    // ============================================================
    if (data.challenges && data.challenges.length > 0) {
        html += '<section class="alt">';
        html += '<div class="container">';
        html += '<div class="sec-head">';
        html += '<span class="text-sm gold">Business Challenges</span>';
        html += '<h2 class="sec-title">Industry-Specific <span class="gold">Problems We Solve</span></h2>';
        html += '<p class="sec-sub">11 Avtar Digital Hub has identified the critical digital challenges facing ' + data.name + ' businesses. Each challenge has a specific, actionable digital solution.</p>';
        html += '</div>';
        html += '<div class="grid-2">';
        for (var c = 0; c < data.challenges.length; c++) {
            var ch = data.challenges[c];
            html += '<div class="problem-card">';
            html += '<div class="problem-title">⚠️ ' + (ch.problem || '') + '</div>';
            html += '<div class="problem-reason">📋 <strong>Why it happens:</strong> ' + (ch.whyItHappens || ch.reason || '') + '</div>';
            html += '<div class="problem-solution">✓ <strong>Digital Solution by 11 Avtar Digital Hub:</strong> ' + (ch.digitalSolution || ch.solution || '') + '</div>';
            if (ch.assetsNeeded && ch.assetsNeeded.length > 0) {
                html += '<div style="margin-top:8px;font-size:0.7rem;color:var(--text-muted);"><strong>Required Assets:</strong> ' + ch.assetsNeeded.join(' · ') + '</div>';
            }
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 3. CUSTOMER JOURNEY
    // ============================================================
    if (data.customerJourney) {
        var journey = data.customerJourney;
        html += '<section>';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Customer Journey</span>';
        html += '<h2 class="sec-title">How Your <span class="gold">Customers Decide</span></h2>';
        html += '<p class="sec-sub">The complete decision journey of a ' + data.name + ' customer — from discovery to retention. 11 Avtar Digital Hub maps every touchpoint.</p>';
        html += '</div>';
        html += '<div class="grid-4">';
        
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
                var desc = stage.description || stage.channels || '';
                if (typeof desc === 'string') {
                    html += '<p style="font-size:0.78rem;">' + desc.substring(0, 180) + '...</p>';
                }
                if (stage.channels && Array.isArray(stage.channels)) {
                    html += '<p style="font-size:0.72rem;color:var(--text-muted);"><strong>Channels:</strong> ' + stage.channels.slice(0, 3).join(', ') + '...</p>';
                }
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 4. WEBSITE ARCHITECTURE
    // ============================================================
    if (data.websiteArchitecture) {
        html += '<section class="alt">';
        html += '<div class="container">';
        html += '<div class="sec-head">';
        html += '<span class="text-sm gold">Website Architecture</span>';
        html += '<h2 class="sec-title">Custom <span class="gold">Website Blueprint</span> for ' + data.name + '</h2>';
        html += '<p class="sec-sub">Not a generic template. Every page designed specifically for ' + data.name + ' business conversion. Built by 11 Avtar Digital Hub.</p>';
        html += '</div>';
        
        if (Array.isArray(data.websiteArchitecture)) {
            html += '<div class="grid-2">';
            html += '<div class="card"><h4>🖥️ Required Pages & Features</h4><ul>';
            for (var w = 0; w < data.websiteArchitecture.length; w++) {
                html += '<li>' + data.websiteArchitecture[w] + '</li>';
            }
            html += '</ul></div>';
            html += '<div class="card"><h4>📱 Platform Ecosystem</h4>';
            if (data.platforms) {
                html += '<div class="tag-group">';
                for (var pl = 0; pl < data.platforms.length; pl++) {
                    html += '<span class="tag">' + data.platforms[pl] + '</span>';
                }
                html += '</div>';
            }
            if (data.contentPillars) {
                html += '<div style="margin-top:14px;"><h4>📝 Content Pillars</h4><ul>';
                for (var cp = 0; cp < data.contentPillars.length; cp++) {
                    html += '<li>' + data.contentPillars[cp] + '</li>';
                }
                html += '</ul></div>';
            }
            html += '</div></div>';
        } else if (data.websiteArchitecture.pages) {
            html += '<div class="grid-2">';
            for (var pg = 0; pg < Math.min(data.websiteArchitecture.pages.length, 4); pg++) {
                var page = data.websiteArchitecture.pages[pg];
                html += '<div class="card"><h4>' + page.name + '</h4><p style="font-size:0.78rem;">' + page.purpose + '</p><ul>';
                if (page.features) {
                    for (var f = 0; f < Math.min(page.features.length, 5); f++) {
                        html += '<li>' + page.features[f] + '</li>';
                    }
                }
                html += '</ul></div>';
            }
            html += '</div>';
        }
        html += '</div></section>';
    }

    // ============================================================
    // 5. PLATFORM ECOSYSTEM (Categorized)
    // ============================================================
    if (data.platformEcosystem) {
        html += '<section>';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Platform Ecosystem</span>';
        html += '<h2 class="sec-title">Where Your <span class="gold">Customers Interact</span></h2>';
        html += '<p class="sec-sub">Platforms categorized by customer journey stage. Never the same list for different industries.</p>';
        html += '</div>';
        html += '<div class="grid-4">';
        
        var platformStages = [
            { key: 'discovery', color: '#C5A46D', label: 'Discovery' },
            { key: 'trust', color: '#A8894F', label: 'Trust' },
            { key: 'conversion', color: '#8A6D3B', label: 'Conversion' },
            { key: 'retention', color: '#6B5229', label: 'Retention' }
        ];
        
        for (var ps = 0; ps < platformStages.length; ps++) {
            var plat = data.platformEcosystem[platformStages[ps].key];
            if (plat) {
                html += '<div class="card">';
                html += '<span class="icon"><i class="fas fa-circle" style="color:' + platformStages[ps].color + ';font-size:0.6rem;"></i></span>';
                html += '<h4>' + (plat.title || platformStages[ps].label + ' Platforms') + '</h4>';
                if (plat.platforms && Array.isArray(plat.platforms)) {
                    html += '<div class="tag-group">';
                    for (var pp = 0; pp < plat.platforms.length; pp++) {
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
    // 6. CONTENT STRATEGY
    // ============================================================
    if (data.contentStrategy && data.contentStrategy.pillars) {
        html += '<section class="alt">';
        html += '<div class="container">';
        html += '<div class="sec-head">';
        html += '<span class="text-sm gold">Content Strategy</span>';
        html += '<h2 class="sec-title">What to <span class="gold">Create & Why</span></h2>';
        html += '<p class="sec-sub">' + (data.contentStrategy.philosophy || 'Content strategy specific to ' + data.name + ' customer psychology.') + '</p>';
        html += '</div>';
        html += '<div class="grid-2">';
        for (var pi = 0; pi < Math.min(data.contentStrategy.pillars.length, 4); pi++) {
            var pillar = data.contentStrategy.pillars[pi];
            html += '<div class="card">';
            html += '<h4>📌 ' + (pillar.name || '') + '</h4>';
            html += '<p style="font-size:0.78rem;"><strong>Why:</strong> ' + (pillar.whyItMatters || '') + '</p>';
            if (pillar.formats && Array.isArray(pillar.formats)) {
                html += '<p style="font-size:0.72rem;color:var(--text-muted);"><strong>Formats:</strong> ' + pillar.formats.slice(0, 2).join(' · ') + '...</p>';
            }
            if (pillar.frequency) {
                html += '<p style="font-size:0.72rem;color:var(--gold);"><strong>Frequency:</strong> ' + pillar.frequency + '</p>';
            }
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 7. QUANTIFIED DELIVERABLES TABLE
    // ============================================================
    if (data.deliverables) {
        html += '<section>';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Quantified Deliverables</span>';
        html += '<h2 class="sec-title">Exactly What <span class="gold">You Get</span></h2>';
        html += '<p class="sec-sub">No vague promises. Every deliverable is quantified. 11 Avtar Digital Hub delivers complete transparency.</p>';
        html += '</div>';
        html += '<div class="quant-table-wrapper"><table class="quant-table"><thead><tr><th>Deliverable</th><th>Quantity</th><th>Details</th></tr></thead><tbody>';
        
        if (Array.isArray(data.deliverables)) {
            for (var d = 0; d < data.deliverables.length; d++) {
                html += '<tr><td><strong>' + data.deliverables[d].item + '</strong></td><td>' + data.deliverables[d].qty + '</td><td>' + data.deliverables[d].detail + '</td></tr>';
            }
        } else {
            for (var key in data.deliverables) {
                if (data.deliverables.hasOwnProperty(key)) {
                    var del = data.deliverables[key];
                    html += '<tr><td><strong>' + (del.item || key) + '</strong></td><td>' + (del.qty || '') + '</td><td>' + (del.detail || '') + '</td></tr>';
                }
            }
        }
        html += '</tbody></table></div>';
        html += '<p class="quant-note">* Exact quantities finalized during discovery call. Above represents standard comprehensive package by 11 Avtar Digital Hub.</p>';
        html += '</div></section>';
    }

    // ============================================================
    // 8. DELIVERABLES SHOWCASE (Tags)
    // ============================================================
    if (data.deliverables && !Array.isArray(data.deliverables)) {
        html += '<section class="alt">';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Everything We Build</span>';
        html += '<h2 class="sec-title">For Your <span class="gold">' + data.name + '</span></h2>';
        var totalDel = 0;
        for (var dk in data.deliverables) {
            if (data.deliverables.hasOwnProperty(dk) && data.deliverables[dk].detail) totalDel++;
        }
        html += '<p class="sec-sub">' + totalDel + '+ quantified deliverables — no hidden services, no separate vendors needed.</p>';
        html += '</div>';
        html += '<div class="tag-group" style="justify-content:center;">';
        for (var dk2 in data.deliverables) {
            if (data.deliverables.hasOwnProperty(dk2)) {
                html += '<span class="tag lg">' + data.deliverables[dk2].item + ' (' + data.deliverables[dk2].qty + ')</span>';
            }
        }
        html += '</div>';
        html += '<div class="highlight-banner">All managed by 11 Avtar Digital Hub — single point of contact, complete accountability.</div>';
        html += '</div></section>';
    }

    // ============================================================
    // 9. GROWTH OPPORTUNITIES
    // ============================================================
    if (data.growthOpportunities && data.growthOpportunities.length > 0) {
        html += '<section>';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Growth Opportunities</span>';
        html += '<h2 class="sec-title">Untapped <span class="gold">Revenue Streams</span></h2>';
        html += '</div>';
        html += '<div class="tag-group" style="justify-content:center;">';
        for (var go = 0; go < data.growthOpportunities.length; go++) {
            var opp = data.growthOpportunities[go];
            html += '<span class="tag lg">🚀 ' + (opp.opportunity || opp) + '</span>';
        }
        html += '</div>';
        html += '<div class="grid-2" style="margin-top:24px;">';
        for (var go2 = 0; go2 < Math.min(data.growthOpportunities.length, 4); go2++) {
            var opp2 = data.growthOpportunities[go2];
            if (opp2.description) {
                html += '<div class="card"><h4>' + (opp2.opportunity || '') + '</h4><p style="font-size:0.78rem;">' + opp2.description + '</p></div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 10. DIGITAL ASSETS CHECKLIST (Interactive)
    // ============================================================
    if (data.digitalAssets) {
        html += '<section class="alt">';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Digital Asset Checklist</span>';
        html += '<h2 class="sec-title">Select Your <span class="gold">Required Assets</span></h2>';
        var totalAssets = 0;
        for (var cat in data.digitalAssets) {
            if (data.digitalAssets.hasOwnProperty(cat) && Array.isArray(data.digitalAssets[cat])) {
                totalAssets += data.digitalAssets[cat].length;
            }
        }
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
                    var isSelected = APP_STATE.selectedAssets[assetKey] ? true : false;
                    var selClass = isSelected ? ' selected' : '';
                    var iconClass = isSelected ? 'fa-check-circle' : 'fa-circle';
                    html += '<div class="check-item' + selClass + '" data-asset-key="' + escapeHTML(assetKey) + '" onclick="handleChecklistClick(this)" role="checkbox" aria-checked="' + isSelected + '" tabindex="0" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();handleChecklistClick(this);}">';
                    html += '<i class="fas ' + iconClass + '"></i> ' + assets[a];
                    html += '</div>';
                }
                html += '</div></div>';
            }
        }
        html += '</div></section>';
    }

    // ============================================================
    // 11. LIVE PROPOSAL PANEL (Sticky)
    // ============================================================
    var totalAssetsForPanel = 0;
    for (var cat3 in data.digitalAssets) {
        if (data.digitalAssets.hasOwnProperty(cat3) && Array.isArray(data.digitalAssets[cat3])) {
            totalAssetsForPanel += data.digitalAssets[cat3].length;
        }
    }
    var selectedCount = countSelectedAssets();
    var maturityPercent = selectedCount > 0 ? Math.round((selectedCount / Math.max(totalAssetsForPanel, 1)) * 100) : 0;
    
    html += '<section>';
    html += '<div class="container">';
    html += '<div class="proposal-panel" id="proposalPanel">';
    html += '<h4 class="proposal-panel-title"><i class="fas fa-file-contract"></i> Live Consulting Proposal</h4>';
    html += '<div class="framework-badge">' + data.signature + ' — ' + data.name + '</div>';
    
    html += '<div class="selected-assets-display" id="selectedAssetsDisplay">';
    if (selectedCount === 0) {
        html += '<span style="color:var(--text-muted);font-size:0.8rem;">👆 Select digital assets above to build your proposal...</span>';
    } else {
        for (var sk in APP_STATE.selectedAssets) {
            if (APP_STATE.selectedAssets.hasOwnProperty(sk)) {
                var parts = sk.split('::');
                html += '<span class="selected-asset-tag">' + parts[0].split(' ')[0] + ': ' + parts[1] + '</span>';
            }
        }
    }
    html += '</div>';
    
    html += '<div class="gap-indicator" id="gapIndicator">';
    if (selectedCount === 0) {
        html += 'Select assets to see your digital maturity score.';
    } else {
        html += '📊 Digital Maturity: ' + selectedCount + '/' + totalAssetsForPanel + ' assets selected (' + maturityPercent + '%).<br>💡 11 Avtar Digital Hub will suggest remaining essential assets for your ' + data.name + ' business.';
    }
    html += '</div>';
    
    html += '<button class="btn btn-gold btn-block" onclick="generateProposal()"><i class="fas fa-file-alt"></i> Generate Proposal</button>';
    html += '<button class="btn btn-wa btn-block" style="margin-top:8px;" onclick="sendProposalViaWhatsApp()"><i class="fab fa-whatsapp"></i> Send via WhatsApp (+91 8959592006)</button>';
    html += '</div></div></section>';

    // ============================================================
    // 12. FAQ SECTION
    // ============================================================
    if (data.faqs && data.faqs.length > 0) {
        html += '<section class="alt">';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Frequently Asked Questions</span>';
        html += '<h2 class="sec-title">' + data.name + ' <span class="gold">FAQ</span></h2>';
        html += '</div>';
        html += '<div class="grid-2">';
        for (var fq = 0; fq < Math.min(data.faqs.length, 6); fq++) {
            html += '<div class="card">';
            html += '<h4 style="font-size:0.9rem;">❓ ' + data.faqs[fq].question + '</h4>';
            html += '<p style="font-size:0.78rem;">' + data.faqs[fq].answer + '</p>';
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 13. INDUSTRY STATISTICS
    // ============================================================
    if (data.stats) {
        html += '<section>';
        html += '<div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Industry Statistics</span>';
        html += '<h2 class="sec-title"><span class="gold">' + data.name + '</span> by the Numbers</h2>';
        html += '</div>';
        html += '<div class="grid-3">';
        for (var stKey in data.stats) {
            if (data.stats.hasOwnProperty(stKey)) {
                html += '<div class="card" style="text-align:center;">';
                html += '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;color:var(--gold);font-weight:700;">' + data.stats[stKey] + '</div>';
                html += '<p style="font-size:0.75rem;color:var(--text-muted);">' + stKey.replace(/([A-Z])/g, ' $1').trim() + '</p>';
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 14. PHILOSOPHY BOX
    // ============================================================
    html += '<section class="alt">';
    html += '<div class="container">';
    html += createPhilosophyBox();
    html += '</div></section>';

    main.innerHTML = html;
    
    // Update active nav
    updateActiveNavLink('industry');
    
    // Save current industry
    saveToStorage('lastIndustry', data.id);
    
    // Track
    trackPageView('industry-' + data.id);
    
    // Scroll to top
    scrollToTop();
    
    console.log('✅ Industry page rendered: ' + data.name + ' (' + data.signature + ')');
    console.log('📊 ' + totalAssetsForPanel + ' digital assets available for selection');
    console.log('📋 ' + selectedCount + ' assets currently selected');
}