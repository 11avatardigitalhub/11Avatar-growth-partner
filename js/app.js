/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * Main Application Controller
 * Industry Growth Intelligence System™
 * ============================================================
 */

// ============================================================
// GLOBAL APP STATE
// ============================================================
var APP_STATE = {
    currentPage: 'home',
    currentIndustry: null,
    selectedAssets: {},
    isMobileMenuOpen: false
};

// ============================================================
// INITIALIZATION — Runs when DOM is ready
// ============================================================
(function() {
    'use strict';
    
    console.log('═══════════════════════════════════════');
    console.log('✅ 11 Avtar Digital Hub');
    console.log('   Industry Growth Intelligence System™');
    console.log('   Initializing...');
    console.log('═══════════════════════════════════════');
    
    // Log available industries
    try {
        if (typeof getIndustryCount === 'function') {
            console.log('📋 Industries loaded: ' + getIndustryCount());
        }
        if (typeof getAllCategories === 'function') {
            console.log('📂 Categories: ' + getAllCategories().join(', '));
        }
    } catch(e) {
        console.warn('⚠️ Industry registry not fully loaded:', e.message);
    }
    
    // Initialize selected assets from localStorage
    loadSelectedAssetsFromStorage();
    
    // Hide loading state
    hideLoadingState();
    
    // Setup event listeners
    setupGlobalListeners();
    
    // Handle initial route
    handleInitialRoute();
    
    console.log('✅ App initialized successfully');
})();

// ============================================================
// LOADING STATE
// ============================================================
function hideLoadingState() {
    var loader = document.getElementById('loadingState');
    if (loader) {
        loader.style.display = 'none';
    }
}

function showLoadingState() {
    var loader = document.getElementById('loadingState');
    if (loader) {
        loader.style.display = 'flex';
    }
}

// ============================================================
// LOCAL STORAGE
// ============================================================
function loadSelectedAssetsFromStorage() {
    try {
        var stored = localStorage.getItem('11avtar_selected_assets');
        if (stored) {
            APP_STATE.selectedAssets = JSON.parse(stored);
        }
    } catch(e) {
        APP_STATE.selectedAssets = {};
    }
}

function saveSelectedAssetsToStorage() {
    try {
        localStorage.setItem('11avtar_selected_assets', JSON.stringify(APP_STATE.selectedAssets));
    } catch(e) {
        // Storage full or unavailable
    }
}

// ============================================================
// ASSET SELECTION
// ============================================================
function loadSelectedAssets(industryId) {
    // Assets are already loaded from storage on init
    // This function exists for compatibility
}

function handleChecklistClick(element) {
    var assetKey = element.getAttribute('data-asset-key');
    if (!assetKey) return;
    
    // Toggle selection
    if (APP_STATE.selectedAssets[assetKey]) {
        delete APP_STATE.selectedAssets[assetKey];
        element.classList.remove('selected');
        var icon = element.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-circle';
        }
    } else {
        APP_STATE.selectedAssets[assetKey] = true;
        element.classList.add('selected');
        var icon2 = element.querySelector('i');
        if (icon2) {
            icon2.className = 'fas fa-check-circle';
        }
    }
    
    // Update proposal panel
    updateProposalPanel();
    
    // Save to storage
    saveSelectedAssetsToStorage();
}

function countSelectedAssets() {
    return Object.keys(APP_STATE.selectedAssets).length;
}

function updateProposalPanel() {
    var display = document.getElementById('selectedAssetsDisplay');
    var indicator = document.getElementById('gapIndicator');
    
    if (!display || !indicator) return;
    
    var selectedKeys = Object.keys(APP_STATE.selectedAssets);
    
    if (selectedKeys.length === 0) {
        display.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">👆 Select digital assets above to build your proposal...</span>';
    } else {
        var html = '';
        for (var i = 0; i < selectedKeys.length; i++) {
            var parts = selectedKeys[i].split('::');
            var assetName = parts.length > 1 ? parts[1] : selectedKeys[i];
            html += '<span class="selected-asset-tag">' + assetName + '</span>';
        }
        display.innerHTML = html;
    }
    
    // Count total available assets
    var totalAssets = 0;
    var assetElements = document.querySelectorAll('[data-asset-key]');
    totalAssets = assetElements.length;
    
    var selCount = selectedKeys.length;
    var matPct = totalAssets > 0 ? Math.round((selCount / totalAssets) * 100) : 0;
    indicator.innerHTML = selCount === 0 ? 
        'Select assets to see your digital maturity score.' : 
        '📊 Digital Maturity: ' + selCount + '/' + totalAssets + ' assets selected (' + matPct + '%)';
}

// ============================================================
// PROPOSAL GENERATION
// ============================================================
function generateProposal() {
    var selectedKeys = Object.keys(APP_STATE.selectedAssets);
    
    if (selectedKeys.length === 0) {
        alert('Please select at least one digital asset to generate a proposal.');
        return;
    }
    
    // Build proposal summary
    var industryName = APP_STATE.currentIndustry || 'your industry';
    var assetList = '';
    for (var i = 0; i < selectedKeys.length; i++) {
        var parts = selectedKeys[i].split('::');
        var assetName = parts.length > 1 ? parts[1] : selectedKeys[i];
        assetList += '• ' + assetName + '\n';
    }
    
    var message = 'Hi 11 Avtar Digital Hub,\n\n';
    message += 'I am interested in the ' + industryName + ' growth system.\n\n';
    message += 'Selected Assets (' + selectedKeys.length + '):\n';
    message += assetList;
    message += '\nPlease share a custom proposal.';
    
    // Open WhatsApp
    var waUrl = 'https://wa.me/918959592006?text=' + encodeURIComponent(message);
    window.open(waUrl, '_blank');
}

function sendProposalViaWhatsApp() {
    generateProposal();
}

// ============================================================
// MOBILE MENU
// ============================================================
function toggleMobileMenu() {
    var btn = document.querySelector('.mobile-menu-btn');
    var menu = document.getElementById('mobileMenu');
    
    if (!menu) return;
    
    APP_STATE.isMobileMenuOpen = !APP_STATE.isMobileMenuOpen;
    
    if (APP_STATE.isMobileMenuOpen) {
        menu.classList.add('open');
        menu.setAttribute('aria-hidden', 'false');
        if (btn) btn.classList.add('active');
    } else {
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        if (btn) btn.classList.remove('active');
    }
}

function closeMobileMenu() {
    var btn = document.querySelector('.mobile-menu-btn');
    var menu = document.getElementById('mobileMenu');
    
    if (!menu) return;
    
    APP_STATE.isMobileMenuOpen = false;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    if (btn) btn.classList.remove('active');
}

// ============================================================
// NAVIGATION
// ============================================================
function updateActiveNavLink(page) {
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
        if (links[i].getAttribute('data-page') === page) {
            links[i].classList.add('active');
        }
    }
}

// ============================================================
// BACK TO TOP
// ============================================================
function setupGlobalListeners() {
    // Back to top button
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
    }
    
    // Nav scroll effect
    window.addEventListener('scroll', function() {
        var nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        if (APP_STATE.isMobileMenuOpen) {
            var menu = document.getElementById('mobileMenu');
            var btn = document.querySelector('.mobile-menu-btn');
            if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && APP_STATE.isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
}

// ============================================================
// ROUTING — Handles initial page load
// ============================================================
function handleInitialRoute() {
    // The router.js handles hash-based routing
    // This is just a fallback
    var hash = window.location.hash;
    if (!hash || hash === '#/' || hash === '#') {
        // Home page — already handled by router
        updateActiveNavLink('home');
    }
}

// ============================================================
// ERROR HANDLING
// ============================================================
window.addEventListener('error', function(e) {
    console.error('❌ Global error:', e.message, '-', e.filename, ':', e.lineno);
});

// ============================================================
// PERFORMANCE
// ============================================================
console.log('🚀 11 Avtar Digital Hub — App Controller Ready');