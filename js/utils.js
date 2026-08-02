/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * Utility Functions
 * Industry Growth Intelligence System™
 * ============================================================
 */

// ============================================================
// DOM MANIPULATION
// ============================================================

/**
 * Get element by ID with error handling
 */
function $(id) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`⚠️ Element #${id} not found in DOM`);
    }
    return el;
}

/**
 * Get all elements matching a selector
 */
function $$(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
}

/**
 * Create an HTML element with attributes and children
 */
function createEl(tag, attrs, ...children) {
    const el = document.createElement(tag);
    
    if (attrs) {
        Object.keys(attrs).forEach(function(key) {
            if (key === 'className') {
                el.className = attrs[key];
            } else if (key === 'dataset') {
                Object.keys(attrs.dataset).forEach(function(dk) {
                    el.dataset[dk] = attrs.dataset[dk];
                });
            } else if (key === 'style' && typeof attrs[key] === 'object') {
                Object.assign(el.style, attrs[key]);
            } else if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
            } else {
                el.setAttribute(key, attrs[key]);
            }
        });
    }
    
    children.forEach(function(child) {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            el.appendChild(child);
        }
    });
    
    return el;
}

/**
 * Clear all children from an element
 */
function clearEl(el) {
    while (el && el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

/**
 * Set inner HTML safely
 */
function setHTML(el, html) {
    if (el) {
        el.innerHTML = html;
    }
}

// ============================================================
// STATE MANAGEMENT
// ============================================================

/**
 * Application state object
 * NEVER mutate directly — use getState/setState
 */
const APP_STATE = {
    currentPage: 'home',
    currentIndustry: null,
    selectedAssets: {},
    previousPage: null,
    scrollPosition: 0,
    isMobileMenuOpen: false
};

/**
 * Get current state (returns a copy to prevent direct mutation)
 */
function getState() {
    return Object.assign({}, APP_STATE);
}

/**
 * Update state with new values
 */
function setState(updates) {
    Object.keys(updates).forEach(function(key) {
        if (APP_STATE.hasOwnProperty(key)) {
            APP_STATE[key] = updates[key];
        }
    });
}

/**
 * Get selected assets for current industry
 */
function getSelectedAssets() {
    return Object.assign({}, APP_STATE.selectedAssets);
}

/**
 * Toggle an asset selection
 */
function toggleAsset(assetKey) {
    if (APP_STATE.selectedAssets[assetKey]) {
        delete APP_STATE.selectedAssets[assetKey];
        return false;
    } else {
        APP_STATE.selectedAssets[assetKey] = true;
        return true;
    }
}

/**
 * Clear all selected assets
 */
function clearSelectedAssets() {
    APP_STATE.selectedAssets = {};
}

/**
 * Count selected assets
 */
function countSelectedAssets() {
    return Object.keys(APP_STATE.selectedAssets).length;
}

// ============================================================
// ROUTING HELPERS
// ============================================================

/**
 * Navigate to a hash route
 */
function navigateTo(route) {
    window.location.hash = route;
}

/**
 * Get current hash route
 */
function getCurrentRoute() {
    return window.location.hash.slice(1) || '/';
}

/**
 * Parse route parameters
 */
function parseRoute(route) {
    const parts = route.replace('#/', '').split('/');
    return {
        page: parts[0] || 'home',
        subpage: parts[1] || null,
        params: parts.slice(2)
    };
}

// ============================================================
// SCROLLING
// ============================================================

/**
 * Smooth scroll to element
 */
function scrollToEl(el, offset) {
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - (offset || 80);
    window.scrollTo({ top: top, behavior: 'smooth' });
}

/**
 * Scroll to top
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Check if element is in viewport
 */
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================================
// MOBILE MENU
// ============================================================

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const menu = $('mobileMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    
    if (!menu || !btn) return;
    
    APP_STATE.isMobileMenuOpen = !APP_STATE.isMobileMenuOpen;
    
    if (APP_STATE.isMobileMenuOpen) {
        menu.classList.add('open');
        menu.setAttribute('aria-hidden', 'false');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    } else {
        closeMobileMenu();
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const menu = $('mobileMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    
    if (menu) {
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
    }
    if (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    }
    
    APP_STATE.isMobileMenuOpen = false;
    document.body.style.overflow = '';
}

// ============================================================
// BACK TO TOP BUTTON
// ============================================================

/**
 * Initialize back to top button visibility
 */
function initBackToTop() {
    const btn = $('backToTop');
    if (!btn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', scrollToTop);
}

// ============================================================
// FORMATTING
// ============================================================

/**
 * Format number with commas (Indian format)
 */
function formatNumber(num) {
    if (num >= 10000000) {
        return (num / 10000000).toFixed(1) + ' Cr';
    } else if (num >= 100000) {
        return (num / 100000).toFixed(1) + ' Lakh';
    } else if (num >= 1000) {
        return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    }
    return num.toString();
}

/**
 * Format percentage
 */
function formatPercent(num) {
    return Math.round(num) + '%';
}

/**
 * Truncate text
 */
function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

/**
 * Slugify a string
 */
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// ============================================================
// DEBOUNCE & THROTTLE
// ============================================================

/**
 * Debounce function calls
 */
function debounce(fn, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}

/**
 * Throttle function calls
 */
function throttle(fn, limit) {
    let inThrottle;
    return function() {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

// ============================================================
// STORAGE
// ============================================================

/**
 * Save to localStorage
 */
function saveToStorage(key, value) {
    try {
        localStorage.setItem('11avtar_' + key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.warn('⚠️ localStorage not available:', e.message);
        return false;
    }
}

/**
 * Load from localStorage
 */
function loadFromStorage(key, defaultValue) {
    try {
        const data = localStorage.getItem('11avtar_' + key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.warn('⚠️ localStorage not available:', e.message);
        return defaultValue;
    }
}

/**
 * Save selected assets for current industry
 */
function saveSelectedAssets(industryKey) {
    if (industryKey && Object.keys(APP_STATE.selectedAssets).length > 0) {
        saveToStorage('assets_' + industryKey, APP_STATE.selectedAssets);
    }
}

/**
 * Load selected assets for an industry
 */
function loadSelectedAssets(industryKey) {
    const saved = loadFromStorage('assets_' + industryKey, {});
    APP_STATE.selectedAssets = saved;
    return saved;
}

// ============================================================
// ANALYTICS (Simple)
// ============================================================

/**
 * Track page view
 */
function trackPageView(pageName) {
    console.log('📊 Page View:', pageName);
    // Future: Integrate with Google Analytics or custom analytics
}

/**
 * Track event
 */
function trackEvent(category, action, label) {
    console.log('📊 Event:', category, '-', action, '-', label);
    // Future: Integrate with analytics
}

// ============================================================
// PWA HELPERS
// ============================================================

/**
 * Check if app is running as PWA (standalone mode)
 */
function isPWA() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true;
}

/**
 * Check if device is online
 */
function isOnline() {
    return navigator.onLine;
}

// ============================================================
// DEVICE DETECTION
// ============================================================

/**
 * Check if device is mobile
 */
function isMobile() {
    return window.innerWidth < 768;
}

/**
 * Check if device is tablet
 */
function isTablet() {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
}

/**
 * Check if device is desktop
 */
function isDesktop() {
    return window.innerWidth >= 1024;
}

/**
 * Check if device supports touch
 */
function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

// ============================================================
// ERROR HANDLING
// ============================================================

/**
 * Safe JSON parse
 */
function safeJSONParse(str, fallback) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return fallback || null;
    }
}

/**
 * Show error message to user
 */
function showError(message) {
    console.error('❌', message);
    const toast = createEl('div', {
        className: 'error-toast',
        style: {
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#1A1A1A',
            color: '#C5A46D',
            padding: '12px 24px',
            borderRadius: '50px',
            zIndex: '9999',
            fontSize: '0.85rem',
            fontWeight: '500',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            border: '1px solid #C5A46D'
        }
    }, message);
    
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// ============================================================
// INITIALIZATION
// ============================================================

console.log('✅ 11 Avtar Digital Hub — Utils loaded');
console.log('📦 Available:', Object.keys({$:1,$$:1,createEl:1,clearEl:1,setHTML:1,getState:1,setState:1,toggleAsset:1,navigateTo:1,scrollToTop:1,toggleMobileMenu:1,closeMobileMenu:1,formatNumber:1,saveToStorage:1,loadFromStorage:1,isMobile:1,isPWA:1}).join(', '));