/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * HOMEPAGE RENDERER
 * Industry Growth Intelligence System™
 * ============================================================
 */

function renderHomePage() {
    var main = document.getElementById('mainContent');
    if (!main) return;

    APP_STATE.currentPage = 'home';
    document.title = '11 Avtar Digital Hub | Industry Growth Intelligence System™';

    var allIndustries = getAllIndustries();
    var featuredIndustries = getFeaturedIndustries();

    var html = '';

    // ============================================================
    // HERO SECTION — with Industry Selector
    // ============================================================
    html += '<section class="hero-section">';
    html += '<div class="hero-bg"></div>';
    html += '<div class="container hero-container">';
    
    // Hero Content
    html += '<div class="hero-content">';
    html += '<span class="hero-badge">Industry Growth Intelligence System™</span>';
    html += '<h1 class="hero-title">We Don\'t Sell <br>Marketing Packages.<span class="gold-block">We Design Industry <br>Growth Systems.</span></h1>';
    html += '<p class="hero-sub">Every industry has unique challenges, customer journeys, and growth opportunities. <strong>11 Avtar Digital Hub</strong> diagnoses your business ecosystem first, maps your customer journey, then builds the complete digital growth architecture — specific to YOUR industry.</p>';
    
    // Industry Selector in Hero
    html += '<div class="hero-selector">';
    html += '<label class="hero-selector-label"><i class="fas fa-chevron-down"></i> Select Your Industry to See Your Growth Blueprint</label>';
    html += '<select id="heroIndustrySelect" onchange="navigateToIndustry(this.value)" aria-label="Select your industry">';
    html += '<option value="">— Choose Your Industry (18 Available) —</option>';
    
    for (var i = 0; i < allIndustries.length; i++) {
        var ind = allIndustries[i];
        html += '<option value="' + ind.slug + '">' + ind.icon + ' ' + ind.name + ' — ' + ind.signature + '</option>';
    }
    
    html += '</select>';
    html += '</div>';
    
    // Hero Stats
    html += '<div class="hero-stats">';
    html += '<div class="stat"><span class="stat-num">18+</span><span class="stat-label">Industry Blueprints</span></div>';
    html += '<div class="stat"><span class="stat-num">100+</span><span class="stat-label">Deliverables per Industry</span></div>';
    html += '<div class="stat"><span class="stat-num">1</span><span class="stat-label">Growth Partner — 11 Avtar Digital Hub</span></div>';
    html += '</div>';
    html += '</div>';
    
    // Hero Visual Card
    html += '<div class="hero-visual">';
    html += '<div class="hero-card">';
    html += '<div class="hero-card-header"><div class="hero-card-dots"><span></span><span></span><span></span></div><span>11 Avtar Digital Hub</span></div>';
    html += '<div class="hero-card-body">';
    html += '<div class="hero-card-item"><i class="fas fa-stethoscope"></i> Industry Diagnosis</div>';
    html += '<div class="hero-card-item"><i class="fas fa-route"></i> Customer Journey Mapping</div>';
    html += '<div class="hero-card-item"><i class="fas fa-cubes"></i> Digital Architecture Design</div>';
    html += '<div class="hero-card-item"><i class="fas fa-robot"></i> Automation Strategy</div>';
    html += '<div class="hero-card-item"><i class="fas fa-chart-line"></i> Growth Roadmap</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    
    html += '</div>';
    html += '</section>';

    // ============================================================
    // TRUST BAR
    // ============================================================
    html += '<section class="alt" style="padding:30px 0;">';
    html += '<div class="container">';
    html += '<div class="trust-bar">';
    html += '<div class="trust-item"><div class="trust-icon"><i class="fas fa-building"></i></div><div class="trust-label">18 Industries</div><div class="trust-sublabel">Deep Blueprints</div></div>';
    html += '<div class="trust-item"><div class="trust-icon"><i class="fas fa-search"></i></div><div class="trust-label">Industry-First</div><div class="trust-sublabel">Diagnosis Approach</div></div>';
    html += '<div class="trust-item"><div class="trust-icon"><i class="fas fa-map"></i></div><div class="trust-label">Customer Journey</div><div class="trust-sublabel">Mapping Per Industry</div></div>';
    html += '<div class="trust-item"><div class="trust-icon"><i class="fas fa-cogs"></i></div><div class="trust-label">Complete Ecosystem</div><div class="trust-sublabel">Not Just Marketing</div></div>';
    html += '<div class="trust-item"><div class="trust-icon"><i class="fab fa-whatsapp"></i></div><div class="trust-label">Direct Connect</div><div class="trust-sublabel">+91 8959592006</div></div>';
    html += '</div>';
    html += '</div></section>';

    // ============================================================
    // HOW IT WORKS — 5 Steps
    // ============================================================
    html += '<section>';
    html += '<div class="container">';
    html += '<div class="sec-head center">';
    html += '<span class="text-sm gold">How 11 Avtar Digital Hub Works</span>';
    html += '<h2 class="sec-title">We Don\'t Start With Services.<br><span class="gold">We Start With Your Industry.</span></h2>';
    html += '<p class="sec-sub">Generic agencies sell SEO and social media packages. We diagnose your business model first, map your customer journey, then build the required digital ecosystem — specific to YOUR industry.</p>';
    html += '</div>';
    
    html += '<div class="steps-grid">';
    var steps = [
        { num: '01', icon: 'fa-stethoscope', title: 'Industry Diagnosis', desc: 'Deep analysis of your business model, revenue streams, competitive landscape, and digital maturity.' },
        { num: '02', icon: 'fa-route', title: 'Journey Mapping', desc: 'Map your customer\'s complete decision journey — Discovery, Trust, Conversion, Retention.' },
        { num: '03', icon: 'fa-cubes', title: 'Digital Architecture', desc: 'Design complete website, platform ecosystem, content strategy, and automation blueprint.' },
        { num: '04', icon: 'fa-rocket', title: 'Growth System Build', desc: 'Build everything — website, content, ads, automation, CRM — all under one roof.' },
        { num: '05', icon: 'fa-chart-line', title: 'Scale & Optimize', desc: 'Monthly reporting, continuous optimization, and long-term growth partnership.' }
    ];
    for (var s = 0; s < steps.length; s++) {
        html += '<div class="step-card">';
        html += '<div class="step-number">' + steps[s].num + '</div>';
        html += '<h4 class="step-title">' + steps[s].title + '</h4>';
        html += '<p class="step-desc">' + steps[s].desc + '</p>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div></section>';

    // ============================================================
    // FEATURED INDUSTRIES GRID
    // ============================================================
    html += '<section class="alt">';
    html += '<div class="container">';
    html += '<div class="sec-head center">';
    html += '<span class="text-sm gold">Explore Industry Blueprints</span>';
    html += '<h2 class="sec-title">Select Your <span class="gold">Industry</span></h2>';
    html += '<p class="sec-sub">18 complete industry blueprints. Each with unique challenges, customer journey, website architecture, platform ecosystem, content strategy, and quantified deliverables. Built by 11 Avtar Digital Hub.</p>';
    html += '</div>';
    
    html += '<div class="industries-grid">';
    for (var j = 0; j < allIndustries.length; j++) {
        var ind2 = allIndustries[j];
        html += '<a href="#/industry/' + ind2.slug + '" class="industry-card">';
        html += '<span class="industry-card-icon">' + ind2.icon + '</span>';
        html += '<div class="industry-card-name">' + ind2.name + '</div>';
        html += '<div class="industry-card-framework">' + ind2.signature + '</div>';
        html += '</a>';
    }
    html += '</div>';
    html += '</div></section>';

    // ============================================================
    // WHY 11 AVTAR DIGITAL HUB — Differentiator
    // ============================================================
    html += '<section>';
    html += '<div class="container">';
    html += '<div class="sec-head center">';
    html += '<span class="text-sm gold">Why We\'re Different</span>';
    html += '<h2 class="sec-title">Not a Marketing Agency.<br><span class="gold">An Industry Growth Intelligence Partner.</span></h2>';
    html += '</div>';
    
    html += '<div class="grid-3">';
    html += '<div class="card"><span class="icon"><i class="fas fa-times-circle"></i></span><h4>Generic Agencies</h4><p style="color:var(--text-muted);">Sell SEO, social media, and ads as separate packages. Same strategy for hotel, hospital, and factory. Don\'t understand YOUR business model or customer journey.</p></div>';
    html += '<div class="card"><span class="icon"><i class="fas fa-arrow-right"></i></span><h4>VS</h4></div>';
    html += '<div class="card"><span class="icon"><i class="fas fa-check-circle"></i></span><h4>11 Avtar Digital Hub</h4><p style="color:var(--gold);">Diagnoses your industry first. Maps your customer journey. Builds complete digital ecosystem — website, platforms, content, automation, CRM — all specific to YOUR industry. One partner, complete accountability.</p></div>';
    html += '</div>';
    html += '</div></section>';

    // ============================================================
    // CTA SECTION
    // ============================================================
    html += '<section class="cta-section">';
    html += '<div class="container">';
    html += '<h2 class="cta-title">Ready to Build Your Industry Growth System?</h2>';
    html += '<p class="cta-sub">Select your industry from the dropdown above, or connect directly on WhatsApp for a consultation. 11 Avtar Digital Hub is your Industry-Specific Digital Growth Intelligence Partner.</p>';
    html += '<div class="cta-buttons">';
    html += '<a href="https://wa.me/918959592006" class="btn btn-wa btn-lg" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Connect on WhatsApp: +91 8959592006</a>';
    html += '</div>';
    html += '</div></section>';

    // ============================================================
    // PHILOSOPHY BOX
    // ============================================================
    html += '<section class="alt">';
    html += '<div class="container">';
    html += createPhilosophyBox();
    html += '</div></section>';

    main.innerHTML = html;
    
    // Update active nav
    updateActiveNavLink('home');
    
    console.log('✅ Homepage rendered with ' + allIndustries.length + ' industries');
}