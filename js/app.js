/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * Main Application Controller
 * Industry Growth Intelligence System™
 * ============================================================
 */

// ============================================================
// APP INITIALIZATION
// ============================================================
(function() {
    'use strict';
    
    console.log('🚀 11 Avtar Digital Hub — Starting...');
    console.log('📦 Version: 1.0.0');
    console.log('📋 Industries: ' + getIndustryCount());
    
    /**
     * Initialize the application
     */
    function initApp() {
        // Initialize router (this will render the first page)
        initRouter();
        
        // Initialize back to top button
        initBackToTop();
        
        // Initialize scroll listener for navbar
        initNavScroll();
        
        // Load saved assets if returning to an industry
        loadSavedState();
        
        // Handle external navigation (browser back/forward)
        window.addEventListener('popstate', function() {
            handleRouteChange();
        });
        
        // Handle online/offline status
        window.addEventListener('online', function() {
            console.log('🌐 Online — sync enabled');
        });
        
        window.addEventListener('offline', function() {
            console.log('📡 Offline — using cached data');
            showError('You are offline. Cached content will be shown.');
        });
        
        // Close mobile menu on window resize (if desktop)
        window.addEventListener('resize', debounce(function() {
            if (window.innerWidth >= 768 && APP_STATE.isMobileMenuOpen) {
                closeMobileMenu();
            }
        }, 250));
        
        console.log('✅ 11 Avtar Digital Hub ready!');
        console.log('💡 Select an industry from the homepage to begin.');
        console.log('📞 WhatsApp: +91 8959592006');
    }
    
    /**
     * Initialize navbar scroll behavior
     */
    function initNavScroll() {
        var nav = $('navbar');
        if (!nav) return;
        
        window.addEventListener('scroll', throttle(function() {
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }, 100));
    }
    
    /**
     * Load any saved state from previous session
     */
    function loadSavedState() {
        // Check if returning to a specific industry
        var lastIndustry = loadFromStorage('lastIndustry', null);
        if (lastIndustry) {
            var savedAssets = loadFromStorage('assets_' + lastIndustry, {});
            if (Object.keys(savedAssets).length > 0) {
                APP_STATE.selectedAssets = savedAssets;
                console.log('📂 Loaded saved assets for:', lastIndustry);
            }
        }
    }
    
    /**
     * Save current state before page unload
     */
    window.addEventListener('beforeunload', function() {
        if (APP_STATE.currentIndustry) {
            saveToStorage('lastIndustry', APP_STATE.currentIndustry);
            saveSelectedAssets(APP_STATE.currentIndustry);
        }
    });
    
    // Start the application
    initApp();
    
})();

// ============================================================
// GLOBAL FUNCTIONS (exposed for onclick handlers in HTML)
// ============================================================

/**
 * Generate proposal from selected assets
 */
function generateProposal() {
    var industryData = getIndustryData();
    if (!industryData) {
        showError('Please select an industry first.');
        return;
    }
    
    var selectedCount = countSelectedAssets();
    if (selectedCount === 0) {
        alert('⚠️ Please select at least one digital asset to generate the proposal.\n\nClick on the checklist items above to select what you need.');
        return;
    }
    
    // Build proposal text
    var grouped = {};
    for (var key in APP_STATE.selectedAssets) {
        if (APP_STATE.selectedAssets.hasOwnProperty(key)) {
            var parts = key.split('::');
            if (!grouped[parts[0]]) grouped[parts[0]] = [];
            grouped[parts[0]].push(parts[1]);
        }
    }
    
    var text = '═══════════════════════════════\n';
    text += '11 AVTAR DIGITAL HUB\n';
    text += 'Industry Growth Proposal\n';
    text += '═══════════════════════════════\n\n';
    text += 'Industry: ' + industryData.name + ' ' + (industryData.icon || '') + '\n';
    text += 'Framework: ' + industryData.signature + '\n';
    text += 'Date: ' + new Date().toLocaleDateString('en-IN', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    }) + '\n\n';
    text += '─── Selected Digital Assets ───\n\n';
    
    for (var cat in grouped) {
        if (grouped.hasOwnProperty(cat)) {
            text += '📌 ' + cat + ':\n';
            for (var i = 0; i < grouped[cat].length; i++) {
                text += '   ✓ ' + grouped[cat][i] + '\n';
            }
            text += '\n';
        }
    }
    
    text += '─── Growth Opportunities ───\n';
    if (industryData.growthOpportunities) {
        for (var g = 0; g < industryData.growthOpportunities.length; g++) {
            var opp = industryData.growthOpportunities[g];
            text += '   🚀 ' + (opp.opportunity || opp) + '\n';
        }
    }
    
    text += '\n─── Why 11 Avtar Digital Hub ───\n';
    text += '"We don\'t offer services first. We diagnose your industry, map the customer journey, and then build the required digital growth ecosystem."\n';
    text += '\n═══════════════════════════════\n';
    text += '11 Avtar Digital Hub\n';
    text += 'Industry Growth Intelligence System™\n';
    text += 'Contact: +91 8959592006\n';
    
    alert(text);
    
    // Also log to console for copying
    console.log('📋 Proposal generated:\n\n' + text);
    
    // Track
    trackEvent('proposal', 'generate', industryData.id);
}

/**
 * Send proposal via WhatsApp
 */
function sendProposalViaWhatsApp() {
    var industryData = getIndustryData();
    if (!industryData) return;
    
    var selectedCount = countSelectedAssets();
    
    var msg = 'Hi *11 Avtar Digital Hub*,%0A%0A';
    msg += 'I am interested in the *' + industryData.name + '* growth system.%0A';
    msg += 'Framework: _' + industryData.signature + '_%0A%0A';
    
    if (selectedCount > 0) {
        msg += '*Selected Digital Assets:*%0A';
        for (var key in APP_STATE.selectedAssets) {
            if (APP_STATE.selectedAssets.hasOwnProperty(key)) {
                var parts = key.split('::');
                msg += '• ' + parts[0] + ': ' + parts[1] + '%0A';
            }
        }
        msg += '%0A';
    }
    
    msg += 'Please share the complete proposal and pricing details.%0A';
    msg += 'Thank you! 🙏';
    
    var waURL = 'https://wa.me/918959592006?text=' + msg;
    window.open(waURL, '_blank');
    
    // Track
    trackEvent('whatsapp', 'send', industryData.id);
}

console.log('✅ 11 Avtar Digital Hub — App controller loaded');