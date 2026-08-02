/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * Hash-Based SPA Router
 * Industry Growth Intelligence System™
 * ============================================================
 */

// ============================================================
// ROUTE DEFINITIONS
// ============================================================
var ROUTES = {
    home: {
        pattern: /^#\/?$/,
        handler: 'renderHomePage',
        title: '11 Avtar Digital Hub | Industry Growth Intelligence System™'
    },
    industries: {
        pattern: /^#\/industries\/?$/,
        handler: 'renderIndustriesPage',
        title: 'All Industries | 11 Avtar Digital Hub'
    },
    industry: {
        pattern: /^#\/industry\/([a-zA-Z-]+)\/?$/,
        handler: 'renderIndustryPage',
        title: 'Industry Blueprint | 11 Avtar Digital Hub'
    },
    about: {
        pattern: /^#\/about\/?$/,
        handler: 'renderAboutPage',
        title: 'About | 11 Avtar Digital Hub'
    },
    howItWorks: {
        pattern: /^#\/how-it-works\/?$/,
        handler: 'renderHowItWorksPage',
        title: 'How It Works | 11 Avtar Digital Hub'
    },
    contact: {
        pattern: /^#\/contact\/?$/,
        handler: 'renderContactPage',
        title: 'Contact | 11 Avtar Digital Hub'
    },
    faq: {
        pattern: /^#\/faq\/?$/,
        handler: 'renderFAQPage',
        title: 'FAQ | 11 Avtar Digital Hub'
    }
};

// ============================================================
// ROUTER INITIALIZATION
// ============================================================
function initRouter() {
    console.log('🛤️ Router initializing...');
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleRouteChange);
    
    // Handle initial route
    handleRouteChange();
    
    console.log('✅ Router ready');
}

/**
 * Handle route change event
 */
function handleRouteChange() {
    var hash = window.location.hash || '#/';
    var route = parseRoute(hash);
    
    console.log('📍 Route:', hash, '→', route.page);
    
    // Close mobile menu on navigation
    if (APP_STATE.isMobileMenuOpen) {
        closeMobileMenu();
    }
    
    // Find matching route
    var matched = findMatchingRoute(hash);
    
    if (matched) {
        // Update page title
        document.title = matched.title || '11 Avtar Digital Hub';
        
        // Save previous page
        APP_STATE.previousPage = APP_STATE.currentPage;
        APP_STATE.currentPage = route.page;
        
        // Call the handler
        if (matched.params) {
            window[matched.handler](matched.params);
        } else {
            window[matched.handler]();
        }
        
        // Update active nav link
        updateActiveNavLink(route.page);
        
        // Track page view
        trackPageView(route.page);
        
        // Scroll to top
        scrollToTop();
    } else {
        // 404 - Page not found
        render404Page();
    }
}

/**
 * Find matching route for hash
 */
function findMatchingRoute(hash) {
    for (var key in ROUTES) {
        if (ROUTES.hasOwnProperty(key)) {
            var route = ROUTES[key];
            var match = hash.match(route.pattern);
            
            if (match) {
                return {
                    handler: route.handler,
                    title: route.title,
                    params: match[1] || null
                };
            }
        }
    }
    return null;
}

/**
 * Parse route into parts
 */
function parseRoute(hash) {
    var clean = hash.replace(/^#\/?/, '').replace(/\/$/, '');
    var parts = clean.split('/');
    
    return {
        page: parts[0] || 'home',
        subpage: parts[1] || null,
        fullPath: clean
    };
}

/**
 * Update active state in navigation links
 */
function updateActiveNavLink(currentPage) {
    var links = document.querySelectorAll('.nav-link');
    
    links.forEach(function(link) {
        link.classList.remove('active');
        var linkPage = link.getAttribute('data-page');
        
        if (linkPage === currentPage || 
            (currentPage === 'industry' && linkPage === 'industries')) {
            link.classList.add('active');
        }
    });
}

// ============================================================
// ROUTE HANDLERS — FALLBACKS
// ============================================================

/**
 * Industries listing page
 */
function renderIndustriesPage() {
    var main = $('mainContent');
    if (!main) return;
    
    var allIndustries = getAllIndustries();
    var html = '<section style="padding-top:40px;"><div class="container">';
    html += createSectionHeader({
        smallText: '18 Industry Blueprints',
        title: 'Select Your Industry',
        highlightText: 'Industry',
        subtitle: 'Every industry has unique challenges, customer journeys, and growth opportunities. 11 Avtar Digital Hub provides complete digital ecosystems for each.',
        center: true
    });
    html += '<div class="industries-grid">';
    
    for (var i = 0; i < allIndustries.length; i++) {
        html += createIndustryCard(allIndustries[i]);
    }
    
    html += '</div></div></section>';
    
    // Add philosophy
    html += '<section class="alt"><div class="container">';
    html += createPhilosophyBox();
    html += '</div></section>';
    
    main.innerHTML = html;
}

/**
 * About page
 */
function renderAboutPage() {
    var main = $('mainContent');
    if (!main) return;
    
    var html = '<section style="padding-top:40px;"><div class="container">';
    html += createSectionHeader({
        smallText: 'About Us',
        title: 'Industry-Specific Digital Growth Intelligence Partner',
        highlightText: 'Digital Growth Intelligence Partner',
        subtitle: '11 Avtar Digital Hub was founded with a simple belief: generic marketing agencies don\'t understand your business. We diagnose your industry first, map your customer journey, and then build the complete digital ecosystem you need.',
        center: true
    });
    html += '</div></section>';
    
    html += '<section class="alt"><div class="container">';
    html += createPhilosophyBox();
    html += '</div></section>';
    
    main.innerHTML = html;
}

/**
 * How It Works page
 */
function renderHowItWorksPage() {
    var main = $('mainContent');
    if (!main) return;
    
    var html = '<section style="padding-top:40px;"><div class="container">';
    html += createSectionHeader({
        smallText: 'Our Process',
        title: 'How 11 Avtar Digital Hub Works',
        highlightText: 'Works',
        subtitle: 'A systematic 5-step process that starts with understanding your industry, not selling you services.',
        center: true
    });
    
    html += '<div class="steps-grid">';
    var steps = [
        { num: '01', title: 'Industry Diagnosis', desc: 'Deep analysis of your business model and competitive landscape' },
        { num: '02', title: 'Journey Mapping', desc: 'Map customer decision process across all touchpoints' },
        { num: '03', title: 'Digital Architecture', desc: 'Design complete website, platform, and content blueprint' },
        { num: '04', title: 'Growth System', desc: 'Build automation, CRM, and conversion optimization' },
        { num: '05', title: 'Scale & Optimize', desc: 'Monthly reporting, A/B testing, continuous improvement' }
    ];
    
    for (var i = 0; i < steps.length; i++) {
        html += '<div class="step-card">';
        html += '<div class="step-number">' + steps[i].num + '</div>';
        html += '<h4 class="step-title">' + steps[i].title + '</h4>';
        html += '<p class="step-desc">' + steps[i].desc + '</p>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div></section>';
    
    html += '<section class="alt"><div class="container">';
    html += createPhilosophyBox();
    html += '</div></section>';
    
    main.innerHTML = html;
}

/**
 * Contact page
 */
function renderContactPage() {
    var main = $('mainContent');
    if (!main) return;
    
    var html = '<section style="padding-top:40px;"><div class="container">';
    html += createSectionHeader({
        smallText: 'Get in Touch',
        title: 'Connect with 11 Avtar Digital Hub',
        highlightText: 'Connect',
        subtitle: 'Ready to build your industry-specific growth system? Reach out on WhatsApp for a consultation.',
        center: true
    });
    html += '<div style="text-align:center;">';
    html += '<a href="https://wa.me/918959592006" class="btn btn-wa btn-lg" target="_blank" rel="noopener">';
    html += '<i class="fab fa-whatsapp"></i> Chat on WhatsApp: +91 8959592006';
    html += '</a>';
    html += '</div></div></section>';
    
    main.innerHTML = html;
}

/**
 * FAQ page
 */
function renderFAQPage() {
    var main = $('mainContent');
    if (!main) return;
    
    var html = '<section style="padding-top:40px;"><div class="container">';
    html += createSectionHeader({
        smallText: 'FAQ',
        title: 'Frequently Asked Questions',
        highlightText: 'Questions',
        subtitle: 'Common questions about 11 Avtar Digital Hub and our industry growth systems.',
        center: true
    });
    html += '</div></section>';
    
    main.innerHTML = html;
}

/**
 * 404 Page
 */
function render404Page() {
    var main = $('mainContent');
    if (!main) return;
    
    var html = '<section style="padding-top:40px;text-align:center;min-height:50vh;display:flex;align-items:center;justify-content:center;"><div class="container">';
    html += '<span class="text-sm gold">404</span>';
    html += '<h2 class="section-title">Page Not Found</h2>';
    html += '<p class="section-sub">The page you\'re looking for doesn\'t exist or has been moved.</p>';
    html += '<a href="#/" class="btn btn-gold" style="margin-top:20px;">Back to Home</a>';
    html += '</div></section>';
    
    main.innerHTML = html;
}

// ============================================================
// NAVIGATION HELPERS
// ============================================================

/**
 * Navigate to home page
 */
function goHome() {
    navigateTo('/');
}

/**
 * Navigate to a specific industry
 */
function navigateToIndustry(slug) {
    if (!slug) return;
    navigateTo('/industry/' + slug);
}

console.log('✅ 11 Avtar Digital Hub — Router loaded');
console.log('🛤️ Routes:', Object.keys(ROUTES).join(', '));