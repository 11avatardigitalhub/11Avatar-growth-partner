// ============================================================
// 11 AVTAR DIGITAL HUB
// Service Worker — Offline Support & Caching
// Industry Growth Intelligence System™
// ============================================================

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `11avtar-digital-hub-${CACHE_VERSION}`;

// Assets to cache immediately on install (critical for offline)
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/home.css',
    '/css/responsive.css',
    '/js/utils.js',
    '/js/components.js',
    '/js/router.js',
    '/js/app.js',
    '/js/data/industry-index.js',
    '/js/pages/home.js',
    '/js/pages/industry-page.js',
    '/js/pages/proposal.js',
    '/assets/icons/icon-72.png',
    '/assets/icons/icon-96.png',
    '/assets/icons/icon-128.png',
    '/assets/icons/icon-144.png',
    '/assets/icons/icon-152.png',
    '/assets/icons/icon-192.png',
    '/assets/icons/icon-384.png',
    '/assets/icons/icon-512.png',
    '/manifest.json'
];

// Cache strategies:
// 1. Cache-First: CSS, JS, Fonts, Icons (static assets)
// 2. Network-First: HTML pages (always try to get latest)
// 3. Stale-While-Revalidate: Industry data files (use cache, update in background)

// ============================================================
// INSTALL EVENT — Precache critical assets
// ============================================================
self.addEventListener('install', function(event) {
    console.log('🔧 11 Avtar Digital Hub SW: Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('📦 Precaching critical assets...');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(function() {
                console.log('✅ All critical assets cached successfully');
                // Force waiting service worker to become active
                return self.skipWaiting();
            })
            .catch(function(error) {
                console.error('❌ Precaching failed:', error);
            })
    );
});

// ============================================================
// ACTIVATE EVENT — Clean old caches
// ============================================================
self.addEventListener('activate', function(event) {
    console.log('🚀 11 Avtar Digital Hub SW: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        // Delete any cache that doesn't match current version
                        if (cacheName !== CACHE_NAME) {
                            console.log('🗑️ Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(function() {
                console.log('✅ Old caches cleaned');
                // Take control of all clients immediately
                return self.clients.claim();
            })
            .then(function() {
                console.log('👑 Service Worker now controlling all clients');
            })
    );
});

// ============================================================
// FETCH EVENT — Smart caching strategies
// ============================================================
self.addEventListener('fetch', function(event) {
    const request = event.request;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') return;
    
    // Skip browser-sync and hot-reload requests
    if (url.href.includes('browser-sync') || url.href.includes('hot-update')) return;
    
    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) return;
    
    // ============================================================
    // STRATEGY 1: Cache-First for static assets
    // ============================================================
    if (isStaticAsset(url)) {
        event.respondWith(cacheFirst(request));
        return;
    }
    
    // ============================================================
    // STRATEGY 2: Network-First for HTML pages
    // ============================================================
    if (isHTMLPage(url)) {
        event.respondWith(networkFirst(request));
        return;
    }
    
    // ============================================================
    // STRATEGY 3: Stale-While-Revalidate for data files
    // ============================================================
    if (isDataFile(url)) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }
    
    // ============================================================
    // STRATEGY 4: Network-Only for external resources
    // ============================================================
    if (isExternalResource(url)) {
        event.respondWith(fetch(request).catch(function() {
            return new Response('External resource unavailable offline', { status: 503 });
        }));
        return;
    }
    
    // Default: Network-First with cache fallback
    event.respondWith(networkFirst(request));
});

// ============================================================
// CACHING STRATEGIES
// ============================================================

// Cache-First: Return from cache, fallback to network
function cacheFirst(request) {
    return caches.match(request)
        .then(function(cachedResponse) {
            if (cachedResponse) {
                // Update cache in background
                updateCache(request);
                return cachedResponse;
            }
            // Not in cache, fetch from network and cache
            return fetchAndCache(request);
        });
}

// Network-First: Try network, fallback to cache, fallback to offline page
function networkFirst(request) {
    return fetch(request)
        .then(function(networkResponse) {
            // Cache the fresh response
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(request, responseToCache);
            });
            return networkResponse;
        })
        .catch(function() {
            // Network failed, try cache
            return caches.match(request)
                .then(function(cachedResponse) {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // If HTML request failed and not cached, return offline page
                    if (request.headers.get('Accept') && request.headers.get('Accept').includes('text/html')) {
                        return caches.match('/offline.html');
                    }
                    throw new Error('No offline version available');
                });
        });
}

// Stale-While-Revalidate: Return cached, update in background
function staleWhileRevalidate(request) {
    return caches.match(request)
        .then(function(cachedResponse) {
            const fetchPromise = fetch(request)
                .then(function(networkResponse) {
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(request, networkResponse.clone());
                    });
                    return networkResponse;
                })
                .catch(function() {
                    // Network failed, that's okay — we have cache
                });
            
            // Return cached response immediately, update in background
            return cachedResponse || fetchPromise;
        });
}

// Fetch from network and cache the response
function fetchAndCache(request) {
    return fetch(request)
        .then(function(networkResponse) {
            // Only cache valid responses
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(request, responseToCache);
                });
            }
            return networkResponse;
        });
}

// Update cache in background without blocking response
function updateCache(request) {
    fetch(request)
        .then(function(networkResponse) {
            if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(request, networkResponse);
                });
            }
        })
        .catch(function() {
            // Silent fail — cache update is non-critical
        });
}

// ============================================================
// URL TYPE DETECTORS
// ============================================================

function isStaticAsset(url) {
    const staticExtensions = [
        '.css', '.js', '.woff', '.woff2', '.ttf', '.eot',
        '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp',
        '.json' // manifest.json
    ];
    return staticExtensions.some(function(ext) {
        return url.pathname.toLowerCase().endsWith(ext);
    });
}

function isHTMLPage(url) {
    // HTML pages have no file extension OR end with .html
    const path = url.pathname;
    if (path.endsWith('.html')) return true;
    if (!path.includes('.')) return true; // Clean URLs like /about
    return false;
}

function isDataFile(url) {
    // Industry data JS files
    return url.pathname.includes('/js/data/') && url.pathname.endsWith('.js');
}

function isExternalResource(url) {
    // Resources from other domains
    return url.hostname !== self.location.hostname;
}

// ============================================================
// PUSH NOTIFICATIONS (Optional — can be enabled later)
// ============================================================
self.addEventListener('push', function(event) {
    if (!event.data) return;
    
    const data = event.data.json();
    const options = {
        body: data.body || 'New insights from 11 Avtar Digital Hub',
        icon: '/assets/icons/icon-192.png',
        badge: '/assets/icons/icon-72.png',
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/'
        },
        actions: [
            {
                action: 'open',
                title: 'View'
            },
            {
                action: 'close',
                title: 'Dismiss'
            }
        ],
        tag: '11avtar-notification',
        renotify: true
    };
    
    event.waitUntil(
        self.registration.showNotification(
            '11 Avtar Digital Hub',
            options
        )
    );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    if (event.action === 'open' || !event.action) {
        const url = event.notification.data.url || '/';
        event.waitUntil(
            clients.matchAll({ type: 'window' })
                .then(function(clientList) {
                    // If a window is already open, focus it
                    for (var i = 0; i < clientList.length; i++) {
                        var client = clientList[i];
                        if (client.url.includes(url) && 'focus' in client) {
                            return client.focus();
                        }
                    }
                    // Otherwise open new window
                    if (clients.openWindow) {
                        return clients.openWindow(url);
                    }
                })
        );
    }
});

// ============================================================
// MESSAGE HANDLER — Communication from app to SW
// ============================================================
self.addEventListener('message', function(event) {
    const data = event.data;
    
    switch (data.action) {
        case 'skipWaiting':
            self.skipWaiting();
            break;
            
        case 'clearCache':
            caches.delete(CACHE_NAME)
                .then(function() {
                    console.log('🗑️ Cache cleared by user request');
                    // Notify all clients
                    self.clients.matchAll().then(function(clients) {
                        clients.forEach(function(client) {
                            client.postMessage({
                                action: 'cacheCleared',
                                message: 'Cache cleared successfully'
                            });
                        });
                    });
                });
            break;
            
        case 'getVersion':
            if (event.ports && event.ports[0]) {
                event.ports[0].postMessage({
                    version: CACHE_VERSION,
                    cacheName: CACHE_NAME
                });
            }
            break;
            
        default:
            console.log('📨 Unknown message action:', data.action);
    }
});

// ============================================================
// BACKGROUND SYNC (for offline proposal submissions)
// ============================================================
self.addEventListener('sync', function(event) {
    if (event.tag === 'sync-proposals') {
        event.waitUntil(syncProposals());
    }
});

function syncProposals() {
    // This would sync any proposals saved while offline
    // Placeholder for future implementation
    console.log('🔄 Background sync: Checking for pending proposals...');
    return Promise.resolve();
}

// ============================================================
// LOGGING
// ============================================================
console.log('✅ 11 Avtar Digital Hub Service Worker loaded');
console.log('📦 Cache name:', CACHE_NAME);
console.log('📋 Precached assets:', PRECACHE_ASSETS.length);
console.log('🎯 Strategies: Cache-First (static), Network-First (HTML), SWR (data)');