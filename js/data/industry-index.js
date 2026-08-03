/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * INDUSTRY PAGE RENDERER — UNIVERSAL VERSION
 * Works with: Full data, partial data, old data, missing files
 * Never shows "Blueprint Loading Issue" to users
 * ============================================================
 */

function renderIndustryPage(slug) {
    var main = document.getElementById('mainContent');
    if (!main) return;

    // Try to get industry metadata
    var industry = null;
    try {
        industry = getIndustryBySlug(slug);
    } catch(e) {
        console.warn('⚠️ Industry registry lookup failed:', e.message);
    }
    
    if (!industry) {
        // Try direct slug match
        industry = {
            id: slug,
            name: slug.charAt(0).toUpperCase() + slug.slice(1),
            icon: '📋',
            slug: slug,
            signature: 'Growth Ecosystem',
            dataVar: slug.toUpperCase() + '_DATA'
        };
    }

    // Try MULTIPLE methods to get data
    var data = null;
    
    // Method 1: Registry-specified variable
    if (industry.dataVar && typeof window[industry.dataVar] !== 'undefined') {
        data = window[industry.dataVar];
    }
    
    // Method 2: ALL_DATA object
    if (!data && window.ALL_INDUSTRY_DATA && window.ALL_INDUSTRY_DATA[industry.id]) {
        data = window.ALL_INDUSTRY_DATA[industry.id];
    }
    
    // Method 3: Common naming patterns
    if (!data) {
        var patterns = [
            industry.id.toUpperCase() + '_DATA',
            industry.id.charAt(0).toUpperCase() + industry.id.slice(1) + 'Data',
            industry.slug.toUpperCase() + '_DATA',
            industry.slug.charAt(0).toUpperCase() + industry.slug.slice(1) + 'Data'
        ];
        for (var i = 0; i < patterns.length; i++) {
            if (typeof window[patterns[i]] !== 'undefined') {
                data = window[patterns[i]];
                break;
            }
        }
    }
    
    // Method 4: Try loading the script dynamically (last resort)
    if (!data && industry.dataFile) {
        console.warn('⚠️ Data not found in global scope, trying dynamic load...');
        // We can't really do this synchronously in a SPA
        // So we'll use the fallback
    }
    
    // IF NO DATA AT ALL — Use smart fallback
    if (!data) {
        console.warn('⚠️ No data file found for: ' + industry.id + '. Using fallback renderer.');
        data = buildFallbackData(industry);
    }

    // Safety: ensure all expected properties exist
    data = sanitizeData(data, industry);

    // Set app state
    try {
        APP_STATE.currentPage = 'industry';
        APP_STATE.currentIndustry = data.id || industry.id;
        if (typeof loadSelectedAssets === 'function') {
            loadSelectedAssets(data.id || industry.id);
        }
    } catch(e) {
        console.warn('⚠️ App state update failed:', e.message);
    }
    
    document.title = (data.name || industry.name) + ' | ' + (data.signature || '') + ' | 11 Avtar Digital Hub';

    // Build the page
    var h = buildHero(data, industry);
    h += buildPillars(data);
    h += buildProblems(data);
    h += buildDifferentiator(data);
    h += buildJourney(data);
    h += buildArchitecture(data);
    h += buildMetrics(data);
    h += buildAssetSelector(data);
    h += buildFAQ(data);
    h += buildClosing(data);
    
    main.innerHTML = h;
    scrollToTop();
    if (typeof updateActiveNavLink === 'function') {
        updateActiveNavLink('industry');
    }
    console.log('✅ Page rendered: ' + (data.name || industry.name));
}

// ============================================================
// FALLBACK DATA BUILDER
// ============================================================
function buildFallbackData(industry) {
    return {
        id: industry.id,
        name: industry.name,
        icon: industry.icon || '📋',
        slug: industry.slug,
        signature: industry.signature || 'Growth Ecosystem',
        hook: {
            headline: 'Transform Your ' + industry.name + ' Business With a Complete Digital Growth System',
            subheadline: 'Most ' + industry.name + ' businesses struggle with fragmented digital presence. We build integrated ecosystems that drive real growth — from discovery to repeat business.',
            punch: 'Stop managing disconnected marketing activities. Start building a connected growth system.'
        },
        rootCause: {
            headline: 'The Digital Foundation Most ' + industry.name + ' Businesses Are Missing',
            insight: 'After studying ' + industry.name + ' businesses, one pattern is clear: the digital infrastructure that converts interest into revenue was never properly built.',
            pillars: [
                { title: 'Be Found', desc: 'Appear wherever your customers search — Google, social media, and platforms they use daily.' },
                { title: 'Be Trusted', desc: 'Professional visuals, genuine reviews, and active presence that builds customer confidence.' },
                { title: 'Be Booked', desc: 'Seamless booking, inquiry, or purchase experience that converts interest into revenue.' },
                { title: 'Be Remembered', desc: 'Systems that maintain customer relationships and drive repeat business at lower cost.' }
            ]
        },
        challenges: [
            {
                problem: 'Your Business Is Invisible Where Customers Search',
                whyItHappens: 'Most ' + industry.name + ' businesses have incomplete or unmanaged digital presence. Google profiles are unoptimized. Social media is inconsistent. Customers searching for what you offer cannot find you.',
                businessImpact: 'Every customer who searches but cannot find you is revenue lost to competitors who invested in digital visibility.',
                digitalSolution: 'Complete digital presence optimization across Google, social media, and industry-specific platforms. Professional content that ranks and converts.',
                assetsNeeded: ['Google Business Profile', 'Website', 'Social Media Presence', 'Local SEO']
            },
            {
                problem: 'Customer Trust Is Built Online — And Your Digital Presence May Be Undermining It',
                whyItHappens: 'Customers judge businesses by their digital presence before making contact. Few reviews, poor photography, and inactive profiles signal unreliability.',
                businessImpact: 'Lost inquiries and bookings from customers who chose competitors with stronger digital trust signals.',
                digitalSolution: 'Professional visual content, systematic review generation, and active online presence management.',
                assetsNeeded: ['Professional Photography', 'Review Generation', 'Content Creation', 'Brand Identity']
            }
        ],
        differentiator: {
            headline: 'We Build Complete Growth Systems, Not Isolated Marketing Services',
            points: [
                'We diagnose your specific business before recommending any solution.',
                'We have studied ' + industry.name + ' businesses specifically — not marketing generally.',
                'Everything operates as one connected system under single accountability.',
                'Success is measured through business outcomes — not vanity metrics.'
            ]
        }
    };
}

// ============================================================
// DATA SANITIZER — Ensure all expected properties exist
// ============================================================
function sanitizeData(data, industry) {
    // Ensure basic identity
    if (!data.id) data.id = industry.id;
    if (!data.name) data.name = industry.name;
    if (!data.icon) data.icon = industry.icon || '📋';
    if (!data.slug) data.slug = industry.slug;
    if (!data.signature) data.signature = industry.signature || 'Growth Ecosystem';
    
    // Ensure hook
    if (!data.hook) data.hook = {};
    if (!data.hook.headline) data.hook.headline = 'Grow Your ' + data.name + ' Business';
    
    // Ensure rootCause
    if (!data.rootCause) data.rootCause = {};
    if (!data.rootCause.pillars) data.rootCause.pillars = [];
    
    // Ensure challenges is an array
    if (!data.challenges || !Array.isArray(data.challenges)) data.challenges = [];
    
    // Ensure differentiator
    if (!data.differentiator) data.differentiator = {};
    if (!data.differentiator.points) data.differentiator.points = [];
    
    // Ensure customerJourney
    if (!data.customerJourney) data.customerJourney = {};
    
    // Ensure websiteArchitecture
    if (!data.websiteArchitecture) data.websiteArchitecture = {};
    
    // Ensure platformEcosystem
    if (!data.platformEcosystem) data.platformEcosystem = {};
    
    // Ensure roiFramework
    if (!data.roiFramework) data.roiFramework = {};
    if (!data.roiFramework.keyMetrics) data.roiFramework.keyMetrics = [];
    
    // Ensure digitalAssets
    if (!data.digitalAssets) data.digitalAssets = {};
    
    // Ensure faqs
    if (!data.faqs || !Array.isArray(data.faqs)) data.faqs = [];
    
    return data;
}

// ============================================================
// SECTION BUILDERS — Each handles missing data gracefully
// ============================================================

function buildHero(data, industry) {
    var h = '<section class="consult-hero">';
    h += '<div class="container"><div class="consult-hero-content">';
    h += '<div class="brand-tag">11 Avtar Digital Hub · ' + (data.name || industry.name) + ' Intelligence</div>';
    
    var headline = data.hook && data.hook.headline ? data.hook.headline : 'Grow Your ' + (data.name || industry.name) + ' Business';
    h += '<h1>' + headline + '</h1>';
    h += '<div class="hero-line"></div>';
    
    if (data.hook && data.hook.subheadline) {
        h += '<p class="hero-sub">' + truncate(data.hook.subheadline, 280) + '</p>';
    }
    if (data.hook && data.hook.punch) {
        h += '<p class="hero-punch">' + data.hook.punch + '</p>';
    }
    
    // Service tags
    h += '<div class="hero-services">';
    var tags = getServiceTags(data);
    for (var t = 0; t < tags.length; t++) {
        h += '<span>' + tags[t] + '</span>';
    }
    h += '</div>';
    
    h += '<div style="margin-top:32px;">';
    h += '<a href="#challenges" class="btn btn-gold">See The Diagnosis</a>';
    h += '<a href="#assets" class="btn btn-outline" style="margin-left:12px;">Build Your Proposal</a>';
    h += '</div>';
    h += '</div></div></section>';
    return h;
}

function getServiceTags(data) {
    var tags = [];
    // Extract from challenges
    if (data.challenges && Array.isArray(data.challenges)) {
        for (var c = 0; c < Math.min(data.challenges.length, 3); c++) {
            if (data.challenges[c].assetsNeeded && Array.isArray(data.challenges[c].assetsNeeded)) {
                tags = tags.concat(data.challenges[c].assetsNeeded.slice(0, 2));
            }
        }
    }
    // Extract from deliverables
    if (data.deliverables && !Array.isArray(data.deliverables)) {
        var keys = Object.keys(data.deliverables);
        for (var k = 0; k < Math.min(keys.length, 6); k++) {
            var item = data.deliverables[keys[k]];
            if (item && item.item) tags.push(item.item);
        }
    }
    // Extract from platform ecosystem
    if (data.platformEcosystem && data.platformEcosystem.platformCategories) {
        for (var pc = 0; pc < Math.min(data.platformEcosystem.platformCategories.length, 4); pc++) {
            tags.push(data.platformEcosystem.platformCategories[pc].category);
        }
    }
    // Fallback
    if (tags.length === 0) {
        tags = ['Digital Presence', 'Google & SEO', 'Content & Social', 'Customer Growth', 'Automation', 'Brand Building'];
    }
    // Deduplicate and limit
    var unique = [];
    for (var u = 0; u < tags.length; u++) {
        if (unique.indexOf(tags[u]) === -1 && unique.length < 6) {
            unique.push(tags[u]);
        }
    }
    return unique;
}

function buildPillars(data) {
    if (!data.rootCause || !data.rootCause.pillars || data.rootCause.pillars.length === 0) return '';
    
    var h = '<section class="consult-section">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">' + (data.signature || 'Growth Ecosystem') + '</span>';
    h += '<h2 class="section-title">What We <span class="gold">Build</span></h2>';
    if (data.rootCause.insight) {
        h += '<p class="section-sub">' + truncate(data.rootCause.insight, 150) + '</p>';
    }
    h += '</div>';
    h += '<div class="pillar-grid">';
    
    var pIcons = ['fa-search', 'fa-shield-alt', 'fa-bolt', 'fa-heart'];
    var pColors = ['#C5A46D', '#A8894F', '#8A6D3B', '#6B5229'];
    
    for (var p = 0; p < Math.min(data.rootCause.pillars.length, 4); p++) {
        var pillar = data.rootCause.pillars[p];
        h += '<div class="pillar-card">';
        h += '<div class="pillar-icon" style="background:' + (pColors[p] || '#C5A46D') + '">';
        h += '<i class="fas ' + (pIcons[p] || 'fa-check') + '"></i></div>';
        h += '<h4>' + (pillar.title || '') + '</h4>';
        h += '<p>' + truncate(pillar.desc || '', 80) + '</p>';
        h += '</div>';
    }
    
    h += '</div></div></section>';
    return h;
}

function buildProblems(data) {
    if (!data.challenges || data.challenges.length === 0) return '';
    
    var h = '<section class="consult-section alt-bg" id="challenges">';
    h += '<div class="container">';
    h += '<div class="section-header">';
    h += '<span class="section-tag">Where Revenue Leaks</span>';
    h += '<h2 class="section-title">Problems We <span class="gold">Diagnose & Fix</span></h2>';
    h += '</div>';
    h += '<div class="problem-grid">';
    
    for (var c = 0; c < Math.min(data.challenges.length, 4); c++) {
        var ch = data.challenges[c];
        if (!ch || !ch.problem) continue;
        
        h += '<div class="problem-card">';
        h += '<div class="problem-head">⚠️ ' + truncate(ch.problem, 80) + '</div>';
        h += '<div class="problem-body">';
        if (ch.whyItHappens) h += '<p><strong>Why:</strong> ' + truncate(ch.whyItHappens, 140) + '</p>';
        if (ch.businessImpact) h += '<p class="impact">💰 ' + truncate(ch.businessImpact, 100) + '</p>';
        if (ch.digitalSolution) h += '<p class="solution">✓ ' + truncate(ch.digitalSolution, 120) + '</p>';
        h += '</div>';
        
        if (ch.assetsNeeded && Array.isArray(ch.assetsNeeded) && ch.assetsNeeded.length > 0) {
            h += '<div class="problem-assets">';
            for (var an = 0; an < Math.min(ch.assetsNeeded.length, 3); an++) {
                h += '<span>' + ch.assetsNeeded[an] + '</span>';
            }
            h += '</div>';
        }
        h += '</div>';
    }
    
    h += '</div></div></section>';
    return h;
}

function buildDifferentiator(data) {
    if (!data.differentiator || !data.differentiator.points || data.differentiator.points.length === 0) return '';
    
    var h = '<section class="consult-section">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">Why Businesses Choose Us</span>';
    h += '<h2 class="section-title">What Makes <span class="gold">Us Different</span></h2>';
    h += '</div>';
    h += '<div class="diff-grid">';
    
    var dIcons = ['fa-stethoscope', 'fa-building', 'fa-users', 'fa-link', 'fa-chart-line'];
    for (var dp = 0; dp < Math.min(data.differentiator.points.length, 5); dp++) {
        h += '<div class="diff-item">';
        h += '<div class="diff-icon"><i class="fas ' + (dIcons[dp] || 'fa-check') + '"></i></div>';
        h += '<p>' + truncate(data.differentiator.points[dp], 140) + '</p>';
        h += '</div>';
    }
    
    h += '</div></div></section>';
    return h;
}

function buildJourney(data) {
    var stages = ['discovery', 'trust', 'conversion', 'retention'];
    var hasAny = false;
    for (var s = 0; s < stages.length; s++) {
        if (data.customerJourney && data.customerJourney[stages[s]]) { hasAny = true; break; }
    }
    if (!hasAny) return '';
    
    var jIcons = ['fa-search', 'fa-shield-alt', 'fa-bolt', 'fa-heart'];
    var jLabels = ['Discovery', 'Trust', 'Conversion', 'Retention'];
    var jColors = ['#C5A46D', '#A8894F', '#8A6D3B', '#6B5229'];
    
    var h = '<section class="consult-section alt-bg">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">How Your Customers Decide</span>';
    h += '<h2 class="section-title">The <span class="gold">Customer Journey</span></h2>';
    h += '</div>';
    
    // Flow
    h += '<div class="journey-flow">';
    for (var js = 0; js < stages.length; js++) {
        h += '<div class="journey-node">';
        h += '<div class="jn-circle" style="background:' + jColors[js] + '">';
        h += '<i class="fas ' + jIcons[js] + '"></i></div>';
        h += '<div class="jn-label">' + jLabels[js] + '</div>';
        h += '</div>';
        if (js < stages.length - 1) h += '<div class="jn-arrow">→</div>';
    }
    h += '</div>';
    
    // Cards
    h += '<div class="journey-grid">';
    for (var js2 = 0; js2 < stages.length; js2++) {
        var stg = data.customerJourney[stages[js2]];
        if (stg) {
            h += '<div class="journey-card" style="border-top:3px solid ' + jColors[js2] + ';">';
            h += '<h4>' + (stg.title || jLabels[js2]) + '</h4>';
            if (stg.psychology) h += '<p class="psych">🧠 ' + truncate(stg.psychology, 90) + '</p>';
            if (stg.businessProblem) h += '<p class="biz-prob">⚠️ ' + truncate(stg.businessProblem, 70) + '</p>';
            if (stg.digitalSolution) h += '<p class="biz-sol">✓ ' + truncate(stg.digitalSolution, 70) + '</p>';
            h += '</div>';
        }
    }
    h += '</div></div></section>';
    return h;
}

function buildArchitecture(data) {
    var hasWebsite = data.websiteArchitecture && (data.websiteArchitecture.pages || Array.isArray(data.websiteArchitecture));
    var hasPlatforms = data.platformEcosystem && (data.platformEcosystem.platformCategories || data.platformEcosystem.discovery);
    
    if (!hasWebsite && !hasPlatforms) return '';
    
    var h = '<section class="consult-section">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">Digital Architecture</span>';
    h += '<h2 class="section-title">Website & <span class="gold">Platform Ecosystem</span></h2>';
    h += '</div>';
    
    // Website pages
    if (hasWebsite) {
        h += '<h3 class="sub-head">🖥️ Website Blueprint</h3>';
        h += '<div class="web-grid">';
        
        var pages = [];
        if (data.websiteArchitecture.pages && Array.isArray(data.websiteArchitecture.pages)) {
            pages = data.websiteArchitecture.pages;
        } else if (Array.isArray(data.websiteArchitecture)) {
            for (var wa = 0; wa < data.websiteArchitecture.length; wa++) {
                pages.push({ name: data.websiteArchitecture[wa], purpose: '' });
            }
        }
        
        for (var wp = 0; wp < Math.min(pages.length, 8); wp++) {
            h += '<div class="web-card">';
            h += '<h4>' + (pages[wp].name || pages[wp]) + '</h4>';
            if (pages[wp].purpose) h += '<p>' + truncate(pages[wp].purpose, 80) + '</p>';
            h += '</div>';
        }
        h += '</div>';
    }
    
    // Platform categories
    if (hasPlatforms) {
        h += '<h3 class="sub-head" style="margin-top:32px;">📱 Where Your Customers Interact</h3>';
        h += '<div class="platform-grid">';
        
        var categories = [];
        if (data.platformEcosystem.platformCategories && Array.isArray(data.platformEcosystem.platformCategories)) {
            categories = data.platformEcosystem.platformCategories;
        } else {
            var catKeys = ['discovery', 'trust', 'social', 'visual', 'marketing', 'automation', 'retention'];
            for (var ck = 0; ck < catKeys.length; ck++) {
                if (data.platformEcosystem[catKeys[ck]]) {
                    categories.push({
                        category: data.platformEcosystem[catKeys[ck]].title || catKeys[ck],
                        businessGoal: data.platformEcosystem[catKeys[ck]].businessGoal || '',
                        platforms: data.platformEcosystem[catKeys[ck]].platforms || []
                    });
                }
            }
        }
        
        for (var pc = 0; pc < Math.min(categories.length, 7); pc++) {
            var cat = categories[pc];
            h += '<div class="platform-card">';
            h += '<h4>' + cat.category + '</h4>';
            if (cat.businessGoal) h += '<p class="goal">' + truncate(cat.businessGoal, 80) + '</p>';
            if (cat.platforms && cat.platforms.length > 0) {
                h += '<div class="plat-tags">';
                for (var cpp = 0; cpp < Math.min(cat.platforms.length, 3); cpp++) {
                    var pName = typeof cat.platforms[cpp] === 'string' ? cat.platforms[cpp] : (cat.platforms[cpp].name || '');
                    if (pName) h += '<span>' + pName + '</span>';
                }
                h += '</div>';
            }
            h += '</div>';
        }
        h += '</div>';
    }
    
    h += '</div></section>';
    return h;
}

function buildMetrics(data) {
    if (!data.roiFramework || !data.roiFramework.keyMetrics || data.roiFramework.keyMetrics.length === 0) return '';
    
    var h = '<section class="consult-section alt-bg">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">How We Measure Success</span>';
    h += '<h2 class="section-title">Metrics That <span class="gold">Matter</span></h2>';
    h += '</div>';
    h += '<div class="metric-grid">';
    
    for (var rm = 0; rm < Math.min(data.roiFramework.keyMetrics.length, 8); rm++) {
        var met = data.roiFramework.keyMetrics[rm];
        h += '<div class="metric-card">';
        h += '<div class="metric-icon">📊</div>';
        h += '<h4>' + (met.metric || '') + '</h4>';
        if (met.whyItMatters) h += '<p>' + truncate(met.whyItMatters, 80) + '</p>';
        if (met.targetDirection) h += '<span class="target">Target: ' + met.targetDirection + '</span>';
        h += '</div>';
    }
    
    h += '</div></div></section>';
    return h;
}

function buildAssetSelector(data) {
    if (!data.digitalAssets || Object.keys(data.digitalAssets).length === 0) return '';
    
    var totalAssets = 0;
    for (var cat in data.digitalAssets) {
        if (data.digitalAssets.hasOwnProperty(cat) && Array.isArray(data.digitalAssets[cat])) {
            totalAssets += data.digitalAssets[cat].length;
        }
    }
    if (totalAssets === 0) return '';
    
    var h = '<section class="consult-section" id="assets">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">Build Your System</span>';
    h += '<h2 class="section-title">Select What <span class="gold">You Need</span></h2>';
    h += '<p class="section-sub">' + totalAssets + ' assets across ' + Object.keys(data.digitalAssets).length + ' growth stages. Check what applies.</p>';
    h += '</div>';
    
    for (var cat2 in data.digitalAssets) {
        if (!data.digitalAssets.hasOwnProperty(cat2) || !Array.isArray(data.digitalAssets[cat2])) continue;
        var catAssets = data.digitalAssets[cat2];
        var catSel = 0;
        try {
            for (var ca = 0; ca < catAssets.length; ca++) {
                if (APP_STATE && APP_STATE.selectedAssets && APP_STATE.selectedAssets[cat2 + '::' + catAssets[ca]]) catSel++;
            }
        } catch(e) {}
        
        h += '<div class="asset-category">';
        h += '<div class="asset-cat-head" onclick="var g=this.nextElementSibling;if(g)g.style.display=g.style.display===\'none\'?\'block\':\'none\';">';
        h += '<span>📌 ' + cat2 + '</span>';
        h += '<span class="count">' + catSel + '/' + catAssets.length + ' ▾</span>';
        h += '</div>';
        h += '<div class="asset-grid">';
        
        for (var a = 0; a < catAssets.length; a++) {
            var akey = cat2 + '::' + catAssets[a];
            var isSel = false;
            try { isSel = APP_STATE && APP_STATE.selectedAssets && APP_STATE.selectedAssets[akey]; } catch(e) {}
            
            h += '<div class="asset-item' + (isSel ? ' selected' : '') + '" data-asset-key="' + escapeHTML(akey) + '" onclick="try{if(typeof handleChecklistClick===\'function\')handleChecklistClick(this);}catch(e){}">';
            h += '<i class="fas ' + (isSel ? 'fa-check-circle' : 'fa-circle') + '"></i> ' + catAssets[a];
            h += '</div>';
        }
        h += '</div></div>';
    }
    
    var selCount = 0;
    try { selCount = typeof countSelectedAssets === 'function' ? countSelectedAssets() : 0; } catch(e) {}
    var matPct = totalAssets > 0 ? Math.round((selCount / totalAssets) * 100) : 0;
    
    h += '<div class="proposal-bar">';
    h += '<div class="proposal-score">📊 Digital Maturity: ' + selCount + '/' + totalAssets + ' (' + matPct + '%)</div>';
    h += '<div class="proposal-btns">';
    h += '<button class="btn btn-gold" onclick="try{if(typeof generateProposal===\'function\')generateProposal();}catch(e){alert(\'Proposal generator loading...\');}">📄 Generate Proposal</button>';
    h += '<button class="btn btn-outline" onclick="window.open(\'https://wa.me/918959592006?text=Hi 11 Avtar, I want to discuss ' + encodeURIComponent(data.name || '') + ' growth system\',\'_blank\');">💬 WhatsApp</button>';
    h += '</div></div>';
    
    h += '</div></section>';
    return h;
}

function buildFAQ(data) {
    if (!data.faqs || !Array.isArray(data.faqs) || data.faqs.length === 0) return '';
    
    var h = '<section class="consult-section alt-bg">';
    h += '<div class="container">';
    h += '<div class="section-header center">';
    h += '<span class="section-tag">Quick Answers</span>';
    h += '<h2 class="section-title">Common <span class="gold">Questions</span></h2>';
    h += '</div>';
    h += '<div class="faq-grid">';
    
    for (var fq = 0; fq < Math.min(data.faqs.length, 4); fq++) {
        if (!data.faqs[fq] || !data.faqs[fq].question) continue;
        h += '<div class="faq-card">';
        h += '<h4>❓ ' + data.faqs[fq].question + '</h4>';
        if (data.faqs[fq].answer) h += '<p>' + truncate(data.faqs[fq].answer, 180) + '</p>';
        h += '</div>';
    }
    
    h += '</div></div></section>';
    return h;
}

function buildClosing(data) {
    var h = '<section class="consult-section">';
    h += '<div class="container">';
    h += '<div class="philosophy-box">';
    h += '<span class="section-tag" style="color:var(--gold);">11 Avtar Digital Hub</span>';
    h += '<h2>We Don\'t Sell Services.<br><span class="gold">We Diagnose Industries.</span></h2>';
    h += '<p>Every recommendation solves a business problem first. Everything we build connects directly to your revenue and business growth.</p>';
    h += '<a href="https://wa.me/918959592006" class="btn btn-gold">💬 Discuss Your Business</a>';
    h += '</div></div></section>';
    return h;
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function truncate(text, maxLen) {
    if (!text) return '';
    if (text.length <= maxLen) return text;
    return text.substring(0, maxLen) + '...';
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function scrollToTop() {
    try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch(e) {
        window.scrollTo(0, 0);
    }
}

function render404Page() {
    var main = document.getElementById('mainContent');
    if (main) {
        main.innerHTML = '<section style="text-align:center;padding:80px;"><h2 style="color:var(--gold);">Page Not Found</h2><p>The industry page you requested does not exist.</p><a href="#/" class="btn btn-gold">← Home</a></section>';
    }
}