/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * INDUSTRY PAGE RENDERER — UPDATED VERSION
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
    // 1. HERO SECTION — Hook + Industry Understanding
    // ============================================================
    html += '<section style="padding-top:40px;">';
    html += '<div class="container">';
    html += '<div class="sec-head">';
    html += '<span class="text-sm gold">' + (data.icon || industry.icon || '') + ' ' + (data.name || industry.name || '') + ' Growth Intelligence</span>';
    
    // Hook headline if available
    if (data.hook && data.hook.headline) {
        html += '<h1 class="sec-title" style="font-size:2.5rem;line-height:1.3;">' + data.hook.headline + '</h1>';
        if (data.hook.subheadline) {
            html += '<p class="sec-sub" style="font-size:1.1rem;max-width:900px;">' + data.hook.subheadline + '</p>';
        }
        if (data.hook.statLine) {
            html += '<p style="margin-top:12px;font-weight:500;color:var(--gold);font-style:italic;">' + data.hook.statLine + '</p>';
        }
        if (data.hook.punch) {
            html += '<p style="margin-top:16px;font-size:1rem;font-weight:600;border-left:3px solid var(--gold);padding-left:16px;">' + data.hook.punch + '</p>';
        }
    }
    
    html += '<h2 class="sec-title" style="margin-top:30px;">' + (data.signature || '') + '</h2>';
    html += '<p class="sec-sub">' + (data.understanding || 'Complete digital growth ecosystem for ' + (data.name || industry.name) + ' industry.') + '</p>';
    html += '<p style="margin-top:8px;font-weight:500;color:var(--gold);">We don\'t just manage social media. We build the entire digital ecosystem that drives growth, trust, and repeat business — specific to the <strong>' + (data.name || industry.name) + '</strong> industry.</p>';
    html += '</div></div></section>';

    // ============================================================
    // 2. INDUSTRY INTELLIGENCE LAYER™ (if available)
    // ============================================================
    if (data.industryIntelligence) {
        var intel = data.industryIntelligence;
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Industry Intelligence Layer™</span>';
        html += '<h2 class="sec-title">' + (intel.headline || 'Before I Recommend Anything, I Study the Industry') + '</h2>';
        html += '</div>';
        
        // Market Dynamics
        if (intel.marketDynamics) {
            html += '<div class="card" style="margin-bottom:16px;">';
            html += '<h4 style="color:var(--gold);">📊 ' + intel.marketDynamics.title + '</h4>';
            html += '<p style="font-size:0.9rem;">' + intel.marketDynamics.description + '</p>';
            if (intel.marketDynamics.keyPoints) {
                html += '<ul style="margin-top:10px;">';
                for (var mk = 0; mk < intel.marketDynamics.keyPoints.length; mk++) {
                    html += '<li style="font-size:0.85rem;">' + intel.marketDynamics.keyPoints[mk] + '</li>';
                }
                html += '</ul>';
            }
            html += '</div>';
        }
        
        // Revenue Drivers
        if (intel.revenueDrivers) {
            html += '<div class="card" style="margin-bottom:16px;">';
            html += '<h4 style="color:var(--gold);">💰 ' + intel.revenueDrivers.title + '</h4>';
            html += '<p style="font-size:0.9rem;">' + intel.revenueDrivers.description + '</p>';
            if (intel.revenueDrivers.keyPoints) {
                html += '<ul style="margin-top:10px;">';
                for (var rd = 0; rd < intel.revenueDrivers.keyPoints.length; rd++) {
                    html += '<li style="font-size:0.85rem;">' + intel.revenueDrivers.keyPoints[rd] + '</li>';
                }
                html += '</ul>';
            }
            html += '</div>';
        }
        
        // Buying Behaviour
        if (intel.buyingBehaviour) {
            html += '<div class="card" style="margin-bottom:16px;">';
            html += '<h4 style="color:var(--gold);">🧠 ' + intel.buyingBehaviour.title + '</h4>';
            html += '<p style="font-size:0.9rem;">' + intel.buyingBehaviour.description + '</p>';
            if (intel.buyingBehaviour.keyPoints) {
                html += '<ul style="margin-top:10px;">';
                for (var bb = 0; bb < intel.buyingBehaviour.keyPoints.length; bb++) {
                    html += '<li style="font-size:0.85rem;">' + intel.buyingBehaviour.keyPoints[bb] + '</li>';
                }
                html += '</ul>';
            }
            html += '</div>';
        }
        
        // Digital Maturity
        if (intel.digitalMaturityLevel && intel.digitalMaturityLevel.levels) {
            html += '<div class="card" style="margin-bottom:16px;">';
            html += '<h4 style="color:var(--gold);">📈 ' + intel.digitalMaturityLevel.title + '</h4>';
            html += '<p style="font-size:0.9rem;">' + intel.digitalMaturityLevel.description + '</p>';
            for (var dl = 0; dl < intel.digitalMaturityLevel.levels.length; dl++) {
                var lvl = intel.digitalMaturityLevel.levels[dl];
                html += '<div style="margin:8px 0;padding:8px 12px;background:rgba(197,164,109,0.05);border-radius:6px;">';
                html += '<strong style="color:var(--gold);">' + lvl.level + '</strong>';
                html += '<p style="font-size:0.8rem;margin-top:4px;">' + lvl.characteristics + '</p>';
                html += '</div>';
            }
            if (intel.digitalMaturityLevel.industryAverage) {
                html += '<p style="margin-top:12px;font-weight:600;color:var(--gold);">' + intel.digitalMaturityLevel.industryAverage + '</p>';
            }
            html += '</div>';
        }
        
        html += '</div></section>';
    }

    // ============================================================
    // 3. HOTEL SEGMENTS (if available)
    // ============================================================
    if (data.hotelSegments && data.hotelSegments.segments) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Property Segments</span>';
        html += '<h2 class="sec-title">' + (data.hotelSegments.headline || 'Different Hotels, Different Strategies') + '</h2>';
        html += '<p class="sec-sub">' + (data.hotelSegments.philosophy || '') + '</p>';
        html += '</div><div class="grid-2">';
        
        for (var seg = 0; seg < data.hotelSegments.segments.length; seg++) {
            var segment = data.hotelSegments.segments[seg];
            html += '<div class="card">';
            html += '<h4 style="color:var(--gold);">🏨 ' + segment.segment + '</h4>';
            
            if (segment.biggestProblems && segment.biggestProblems.length > 0) {
                html += '<p style="font-weight:600;margin-top:8px;">Biggest Problems:</p><ul>';
                for (var bp = 0; bp < segment.biggestProblems.length; bp++) {
                    html += '<li style="font-size:0.8rem;">' + segment.biggestProblems[bp] + '</li>';
                }
                html += '</ul>';
            }
            
            if (segment.digitalPriorities && segment.digitalPriorities.length > 0) {
                html += '<p style="font-weight:600;margin-top:8px;">Digital Priorities:</p><ul>';
                for (var dp = 0; dp < segment.digitalPriorities.length; dp++) {
                    html += '<li style="font-size:0.8rem;">' + segment.digitalPriorities[dp] + '</li>';
                }
                html += '</ul>';
            }
            
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 4. BUSINESS CHALLENGES
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
            if (ch.businessImpact) {
                html += '<div class="problem-impact">💸 <strong>Business Impact:</strong> ' + ch.businessImpact + '</div>';
            }
            html += '<div class="problem-solution">✓ <strong>Digital Solution:</strong> ' + (ch.digitalSolution || ch.solution || '') + '</div>';
            if (ch.assetsNeeded && ch.assetsNeeded.length > 0) {
                html += '<div style="margin-top:8px;"><strong>Required Assets:</strong> ';
                html += '<div class="tag-group">';
                for (var an = 0; an < ch.assetsNeeded.length; an++) {
                    html += '<span class="tag" style="font-size:0.65rem;">' + ch.assetsNeeded[an] + '</span>';
                }
                html += '</div></div>';
            }
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 5. ROOT CAUSE (if available)
    // ============================================================
    if (data.rootCause) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Root Cause Analysis</span>';
        html += '<h2 class="sec-title">' + (data.rootCause.headline || '') + '</h2>';
        html += '<p class="sec-sub">' + (data.rootCause.insight || '') + '</p>';
        html += '</div>';
        if (data.rootCause.pillars && data.rootCause.pillars.length > 0) {
            html += '<div class="grid-4">';
            for (var rp = 0; rp < data.rootCause.pillars.length; rp++) {
                var pillar = data.rootCause.pillars[rp];
                html += '<div class="card" style="text-align:center;">';
                html += '<h4 style="color:var(--gold);">' + pillar.title + '</h4>';
                html += '<p style="font-size:0.85rem;">' + pillar.desc + '</p>';
                html += '</div>';
            }
            html += '</div>';
        }
        html += '</div></section>';
    }

    // ============================================================
    // 6. COMPETITIVE AUDIT (if available)
    // ============================================================
    if (data.competitiveAudit && data.competitiveAudit.auditDimensions) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Competitive Intelligence</span>';
        html += '<h2 class="sec-title">' + (data.competitiveAudit.headline || 'Know Your Competition') + '</h2>';
        html += '</div><div class="grid-2">';
        for (var ca = 0; ca < data.competitiveAudit.auditDimensions.length; ca++) {
            var dim = data.competitiveAudit.auditDimensions[ca];
            html += '<div class="card">';
            html += '<h4 style="color:var(--gold);">' + dim.dimension + '</h4>';
            html += '<p style="font-size:0.85rem;font-weight:600;">What to Analyze:</p>';
            html += '<p style="font-size:0.8rem;">' + dim.whatToAnalyze + '</p>';
            html += '<p style="font-size:0.85rem;font-weight:600;margin-top:8px;">Why It Matters:</p>';
            html += '<p style="font-size:0.8rem;">' + dim.whyItMatters + '</p>';
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 7. CUSTOMER JOURNEY
    // ============================================================
    if (data.customerJourney) {
        var journey = data.customerJourney;
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Customer Journey</span>';
        html += '<h2 class="sec-title">How Your <span class="gold">Customers Decide</span></h2>';
        html += '</div><div class="grid-2">';
        
        var stages = [
            { key: 'discovery', icon: 'fa-search', color: '#C5A46D' },
            { key: 'trust', icon: 'fa-shield-alt', color: '#A8894F' },
            { key: 'conversion', icon: 'fa-check-circle', color: '#8A6D3B' },
            { key: 'retention', icon: 'fa-redo', color: '#6B5229' }
        ];
        
        for (var st = 0; st < stages.length; st++) {
            var stage = journey[stages[st].key];
            if (stage) {
                html += '<div class="card">';
                html += '<span class="icon"><i class="fas ' + stages[st].icon + '" style="color:' + stages[st].color + ';"></i></span>';
                html += '<h4>' + (stage.title || stages[st].key) + '</h4>';
                html += '<p style="font-size:0.85rem;">' + (stage.description || '') + '</p>';
                
                if (stage.psychology) {
                    html += '<p style="font-size:0.75rem;color:var(--text-muted);margin-top:6px;"><strong>🧠 Psychology:</strong> ' + stage.psychology.substring(0, 150) + '...</p>';
                }
                
                if (stage.businessProblem) {
                    html += '<p style="font-size:0.75rem;color:var(--gold);margin-top:4px;"><strong>⚠️ Business Problem:</strong> ' + stage.businessProblem.substring(0, 120) + '...</p>';
                }
                
                if (stage.channels && Array.isArray(stage.channels)) {
                    html += '<div class="tag-group" style="margin-top:6px;">';
                    for (var chn = 0; chn < Math.min(stage.channels.length, 4); chn++) {
                        html += '<span class="tag" style="font-size:0.6rem;">' + stage.channels[chn] + '</span>';
                    }
                    if (stage.channels.length > 4) {
                        html += '<span class="tag" style="font-size:0.6rem;">+' + (stage.channels.length - 4) + ' more</span>';
                    }
                    html += '</div>';
                }
                
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 8. TRANSFORMATION JOURNEY (if available)
    // ============================================================
    if (data.transformationJourney && data.transformationJourney.stages) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Transformation Roadmap</span>';
        html += '<h2 class="sec-title">' + (data.transformationJourney.headline || 'Implementation Journey') + '</h2>';
        html += '</div>';
        html += '<div class="grid-2">';
        for (var ts = 0; ts < data.transformationJourney.stages.length; ts++) {
            var tStage = data.transformationJourney.stages[ts];
            html += '<div class="card">';
            html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">';
            html += '<span style="background:var(--gold);color:#1A1A1A;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;">' + (tStage.step || (ts + 1)) + '</span>';
            html += '<div>';
            html += '<h4 style="margin:0;">' + tStage.title + '</h4>';
            html += '<span style="font-size:0.7rem;color:var(--text-muted);">' + (tStage.duration || '') + '</span>';
            html += '</div></div>';
            html += '<p style="font-size:0.85rem;">' + (tStage.desc || '') + '</p>';
            if (tStage.objective) {
                html += '<p style="font-size:0.75rem;color:var(--gold);"><strong>Objective:</strong> ' + tStage.objective + '</p>';
            }
            if (tStage.businessOutcome) {
                html += '<p style="font-size:0.75rem;color:var(--text-muted);"><strong>📊 Outcome:</strong> ' + tStage.businessOutcome + '</p>';
            }
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 9. WEBSITE ARCHITECTURE & PLATFORM ECOSYSTEM
    // ============================================================
    html += '<section><div class="container">';
    html += '<div class="sec-head center">';
    html += '<span class="text-sm gold">Website & Platforms</span>';
    html += '<h2 class="sec-title">Custom <span class="gold">Digital Architecture</span></h2>';
    html += '</div>';
    
    // Website Architecture
    if (data.websiteArchitecture) {
        html += '<div class="card" style="margin-bottom:20px;">';
        html += '<h4 style="color:var(--gold);">🖥️ ' + (data.websiteArchitecture.headline || 'Website Blueprint') + '</h4>';
        if (data.websiteArchitecture.philosophy) {
            html += '<p style="font-size:0.85rem;margin-bottom:12px;">' + data.websiteArchitecture.philosophy.substring(0, 300) + '...</p>';
        }
        if (data.websiteArchitecture.pages && Array.isArray(data.websiteArchitecture.pages)) {
            html += '<div class="grid-2" style="margin-top:10px;">';
            for (var wp = 0; wp < Math.min(data.websiteArchitecture.pages.length, 6); wp++) {
                var page = data.websiteArchitecture.pages[wp];
                html += '<div style="padding:10px;background:rgba(197,164,109,0.05);border-radius:6px;">';
                html += '<strong style="font-size:0.85rem;">' + page.name + '</strong>';
                html += '<p style="font-size:0.75rem;color:var(--text-muted);">' + (page.purpose ? page.purpose.substring(0, 120) + '...' : '') + '</p>';
                html += '</div>';
            }
            html += '</div>';
        } else if (Array.isArray(data.websiteArchitecture)) {
            html += '<ul>';
            for (var wa = 0; wa < Math.min(data.websiteArchitecture.length, 8); wa++) {
                html += '<li style="font-size:0.85rem;">' + data.websiteArchitecture[wa] + '</li>';
            }
            html += '</ul>';
        }
        if (data.websiteArchitecture.architecturePrinciple) {
            html += '<p style="font-size:0.8rem;color:var(--gold);margin-top:10px;font-style:italic;">' + data.websiteArchitecture.architecturePrinciple + '</p>';
        }
        html += '</div>';
    }
    
    // Platform Ecosystem
    if (data.platformEcosystem) {
        html += '<div class="card">';
        html += '<h4 style="color:var(--gold);">📱 ' + (data.platformEcosystem.headline || 'Platform Ecosystem') + '</h4>';
        
        // NEW STRUCTURE: platformCategories array
        if (data.platformEcosystem.platformCategories && Array.isArray(data.platformEcosystem.platformCategories)) {
            html += '<div class="grid-2" style="margin-top:10px;">';
            for (var pc = 0; pc < data.platformEcosystem.platformCategories.length; pc++) {
                var category = data.platformEcosystem.platformCategories[pc];
                html += '<div style="padding:10px;background:rgba(197,164,109,0.05);border-radius:6px;">';
                html += '<strong style="color:var(--gold);font-size:0.85rem;">' + category.category + '</strong>';
                html += '<p style="font-size:0.7rem;color:var(--text-muted);">' + (category.businessGoal ? category.businessGoal.substring(0, 100) + '...' : '') + '</p>';
                if (category.platforms && Array.isArray(category.platforms)) {
                    html += '<div class="tag-group" style="margin-top:4px;">';
                    for (var cpp = 0; cpp < Math.min(category.platforms.length, 3); cpp++) {
                        html += '<span class="tag" style="font-size:0.6rem;">' + category.platforms[cpp].name + '</span>';
                    }
                    if (category.platforms.length > 3) {
                        html += '<span class="tag" style="font-size:0.6rem;">+' + (category.platforms.length - 3) + ' more</span>';
                    }
                    html += '</div>';
                }
                html += '</div>';
            }
            html += '</div>';
        }
        // OLD STRUCTURE: discovery, trust, conversion, retention objects
        else {
            var pStages = ['discovery', 'trust', 'conversion', 'retention'];
            var pColors = ['#C5A46D', '#A8894F', '#8A6D3B', '#6B5229'];
            var pIcons = ['fa-search', 'fa-shield-alt', 'fa-shopping-cart', 'fa-redo'];
            
            html += '<div class="grid-2" style="margin-top:10px;">';
            for (var ps = 0; ps < pStages.length; ps++) {
                var plat = data.platformEcosystem[pStages[ps]];
                if (plat) {
                    html += '<div style="padding:10px;background:rgba(197,164,109,0.05);border-radius:6px;">';
                    html += '<strong style="color:' + pColors[ps] + ';font-size:0.85rem;"><i class="fas ' + pIcons[ps] + '"></i> ' + (plat.title || pStages[ps]) + '</strong>';
                    if (plat.platforms && Array.isArray(plat.platforms)) {
                        html += '<div class="tag-group" style="margin-top:4px;">';
                        for (var pp = 0; pp < Math.min(plat.platforms.length, 4); pp++) {
                            var pName = typeof plat.platforms[pp] === 'string' ? plat.platforms[pp] : plat.platforms[pp].name || plat.platforms[pp];
                            html += '<span class="tag" style="font-size:0.6rem;">' + pName + '</span>';
                        }
                        html += '</div>';
                    }
                    html += '</div>';
                }
            }
            html += '</div>';
        }
        
        if (data.platformEcosystem.ecosystemPrinciple) {
            html += '<p style="font-size:0.8rem;color:var(--gold);margin-top:10px;font-style:italic;">' + data.platformEcosystem.ecosystemPrinciple + '</p>';
        }
        html += '</div>';
    }
    
    html += '</div></section>';

    // ============================================================
    // 10. ROI FRAMEWORK (if available)
    // ============================================================
    if (data.roiFramework && data.roiFramework.keyMetrics) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">ROI & Metrics</span>';
        html += '<h2 class="sec-title">' + (data.roiFramework.headline || 'Measurable Business Outcomes') + '</h2>';
        html += '</div><div class="grid-2">';
        for (var rm = 0; rm < Math.min(data.roiFramework.keyMetrics.length, 6); rm++) {
            var metric = data.roiFramework.keyMetrics[rm];
            html += '<div class="card">';
            html += '<h4 style="color:var(--gold);">📊 ' + metric.metric + '</h4>';
            html += '<p style="font-size:0.8rem;font-weight:600;">' + (metric.definition ? metric.definition.substring(0, 120) + '...' : '') + '</p>';
            html += '<p style="font-size:0.75rem;color:var(--text-muted);"><strong>Why:</strong> ' + (metric.whyItMatters ? metric.whyItMatters.substring(0, 150) + '...' : '') + '</p>';
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 11. GROWTH OPPORTUNITIES
    // ============================================================
    if (data.growthOpportunities && data.growthOpportunities.length > 0) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Growth Opportunities</span>';
        html += '<h2 class="sec-title">Untapped <span class="gold">Revenue Streams</span></h2>';
        html += '</div><div class="grid-2">';
        for (var go = 0; go < data.growthOpportunities.length; go++) {
            var opp = data.growthOpportunities[go];
            html += '<div class="card">';
            html += '<h4 style="color:var(--gold);">🚀 ' + (opp.opportunity || opp) + '</h4>';
            if (opp.description) {
                html += '<p style="font-size:0.85rem;">' + opp.description + '</p>';
            }
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 12. DELIVERABLES
    // ============================================================
    if (data.deliverables) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">What You Receive</span>';
        html += '<h2 class="sec-title">Deliverables <span class="gold">Overview</span></h2>';
        html += '</div><div class="grid-2">';
        
        // NEW STRUCTURE: object with named deliverables
        if (!Array.isArray(data.deliverables)) {
            for (var dk in data.deliverables) {
                if (data.deliverables.hasOwnProperty(dk)) {
                    var del = data.deliverables[dk];
                    html += '<div class="card">';
                    html += '<h4 style="color:var(--gold);">📦 ' + (del.item || dk) + '</h4>';
                    html += '<p style="font-size:0.8rem;">' + (del.detail ? del.detail.substring(0, 200) + '...' : '') + '</p>';
                    html += '</div>';
                }
            }
        }
        // OLD STRUCTURE: array of deliverable objects
        else {
            for (var d = 0; d < data.deliverables.length; d++) {
                html += '<div class="card">';
                html += '<h4 style="color:var(--gold);">📦 ' + data.deliverables[d].item + '</h4>';
                if (data.deliverables[d].qty) {
                    html += '<span class="tag" style="margin-bottom:8px;">' + data.deliverables[d].qty + '</span>';
                }
                html += '<p style="font-size:0.8rem;">' + (data.deliverables[d].detail ? data.deliverables[d].detail.substring(0, 180) + '...' : '') + '</p>';
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 13. DIGITAL ASSETS CHECKLIST
    // ============================================================
    if (data.digitalAssets) {
        var totalAssets = 0;
        for (var cat in data.digitalAssets) {
            if (data.digitalAssets.hasOwnProperty(cat) && Array.isArray(data.digitalAssets[cat])) {
                totalAssets += data.digitalAssets[cat].length;
            }
        }
        
        html += '<section><div class="container">';
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
    // 14. LIVE PROPOSAL PANEL
    // ============================================================
    var selectedCount = countSelectedAssets ? countSelectedAssets() : 0;
    var maturityPercent = totalAssets > 0 ? Math.round((selectedCount / totalAssets) * 100) : 0;
    
    html += '<section class="alt"><div class="container">';
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
    // 15. VALIDATION FRAMEWORK (if available)
    // ============================================================
    if (data.validation) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Validation Framework</span>';
        html += '<h2 class="sec-title">' + (data.validation.headline || 'Diagnosis Validation') + '</h2>';
        html += '</div>';
        html += '<div class="grid-2">';
        
        var valSections = ['marketValidation', 'businessValidation', 'customerValidation', 'digitalValidation', 'implementationValidation'];
        for (var vs = 0; vs < valSections.length; vs++) {
            var val = data.validation[valSections[vs]];
            if (val) {
                html += '<div class="card">';
                html += '<h4 style="color:var(--gold);">✓ ' + val.title + '</h4>';
                html += '<p style="font-size:0.8rem;">' + val.description + '</p>';
                if (val.checks && val.checks.length > 0) {
                    html += '<ul style="margin-top:6px;">';
                    for (var vc = 0; vc < Math.min(val.checks.length, 3); vc++) {
                        html += '<li style="font-size:0.75rem;">' + val.checks[vc].substring(0, 100) + '...</li>';
                    }
                    html += '</ul>';
                }
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 16. FAQ
    // ============================================================
    if (data.faqs && data.faqs.length > 0) {
        html += '<section class="alt"><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Frequently Asked Questions</span>';
        html += '<h2 class="sec-title">' + (data.name || industry.name) + ' <span class="gold">FAQ</span></h2>';
        html += '</div><div class="grid-2">';
        for (var fq = 0; fq < Math.min(data.faqs.length, 6); fq++) {
            html += '<div class="card">';
            html += '<h4 style="font-size:0.9rem;">❓ ' + data.faqs[fq].question + '</h4>';
            html += '<p style="font-size:0.78rem;">' + data.faqs[fq].answer.substring(0, 250) + '...</p>';
            html += '</div>';
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 17. STATS (if available)
    // ============================================================
    if (data.stats && data.stats.statsList) {
        html += '<section><div class="container">';
        html += '<div class="sec-head center">';
        html += '<span class="text-sm gold">Industry Statistics</span>';
        html += '<h2 class="sec-title">Data That <span class="gold">Validates</span> the Diagnosis</h2>';
        html += '</div><div class="grid-2">';
        for (var sk in data.stats.statsList) {
            if (data.stats.statsList.hasOwnProperty(sk)) {
                html += '<div class="card" style="text-align:center;">';
                html += '<h4 style="color:var(--gold);font-size:0.85rem;">' + sk + '</h4>';
                html += '<p style="font-size:1.1rem;font-weight:600;">' + data.stats.statsList[sk] + '</p>';
                html += '</div>';
            }
        }
        html += '</div></div></section>';
    }

    // ============================================================
    // 18. PHILOSOPHY / CLOSING
    // ============================================================
    html += '<section class="alt"><div class="container">';
    html += '<div class="philosophy-box">';
    html += '<span class="text-sm" style="color:var(--gold);">Why 11 Avtar Digital Hub</span>';
    html += '<h2 style="margin-top:4px;color:var(--text-on-dark);">We Do Not Offer Services First.<br><span class="gold">We Diagnose Your Industry, Map The Customer Journey, And Build The Required Ecosystem.</span></h2>';
    html += '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:20px;border-top:1px solid rgba(255,255,255,0.08);padding-top:20px;">';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Industry Research</div>';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Journey Mapping</div>';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Digital Architecture</div>';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Conversion Strategy</div>';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Automation</div>';
    html += '<div style="color:#ccc;font-size:0.8rem;">✓ Growth Planning</div>';
    html += '</div></div></div></section>';

    main.innerHTML = html;
    scrollToTop();
    updateActiveNavLink('industry');
    
    console.log('✅ Industry page rendered: ' + (data.name || industry.name));
    console.log('📊 Sections rendered: Hook, Intelligence, Segments, Challenges, Root Cause, Competitive, Journey, Transformation, Architecture, Ecosystem, ROI, Growth, Deliverables, Assets, Validation, FAQ, Stats');
}