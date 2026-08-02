// ============================================================
// 11 AVTAR DIGITAL HUB
// Service Worker v3.0.0
// Industry Growth Intelligence System™
// ============================================================
// STRATEGY: Network-First (Development)
// All content always fetched fresh from server
// Cache used ONLY as offline fallback
// ============================================================

const CACHE_VERSION = 'v3.0.0';
const CACHE_NAME = '11avtar-digital-hub-' + CACHE_VERSION;

// ============================================================
// BASE PATH — Critical for GitHub Pages subdirectory
// ============================================================
const BASE_PATH = '/11Avatar-growth-partner';

// ============================================================
// ASSETS TO PRECACHE (stable, rarely-changing files only)
// ============================================================
const PRECACHE_ASSETS = [
    BASE_PATH + '/',
    BASE_PATH + '/index.html',
    BASE_PATH + '/css/style.css',
    BASE_PATH + '/css/home.css',
    BASE_PATH + '/css/responsive.css',
    BASE_PATH + '/js/utils.js',
    BASE_PATH + '/js/components.js',
    BASE_PATH + '/js/router.js',
    BASE_PATH + '/js/app.js',
    BASE_PATH + '/js/data/industry-index.js',
    BASE_PATH + '/js/pages/home.js',
    BASE_PATH + '/js/pages/industry-page.js',
    BASE_PATH + '/js/pages/proposal.js',
    BASE_PATH + '/assets/icons/icon-72.png',
    BASE_PATH + '/assets/icons/icon-96.png',
    BASE_PATH + '/assets/icons/icon-128.png',
    BASE_PATH + '/assets/icons/icon-144.png',
    BASE_PATH + '/assets/icons/icon-152.png',
    BASE_PATH + '/assets/icons/icon-192.png',
    BASE_PATH + '/assets/icons/icon-512.png',
    BASE_PATH + '/manifest.json'
];

// ============================================================
// INSTALL EVENT — Precache stable assets
// ============================================================
self.addEventListener('install', function(event) {
    console.log('🔧 [SW v3.0.0] Install starting...');
    console.log('📋 Precaching ' + PRECACHE_ASSETS.length + ' stable assets');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('📦 Cache opened:', CACHE_NAME);
                
                // Precache assets one by one to avoid failing all if one fails
                return Promise.allSettled(
                    PRECACHE_ASSETS.map(function(asset) {
                        return cache.add(asset).then(function() {
                            console.log('  ✅ Cached:', asset);
                        }).catch(function(error) {
                            console.warn('  ⚠️ Failed to cache:', asset, '-', error.message);
                        });
                    })
                );
            })
            .then(function(results) {
                var successCount = results.filter(function(r) { return r.status === 'fulfilled'; }).length;
                var failCount = results.filter(function(r) { return r.status === 'rejected'; }).length;
                console.log('📊 Precaching complete — ' + successCount + ' succeeded, ' + failCount + ' failed');
                
                // Force activation — don't wait for old SW to release
                return self.skipWaiting();
            })
            .then(function() {
                console.log('✅ [SW v3.0.0] Install complete — skipping waiting');
            })
            .catch(function(error) {
                console.error('❌ [SW v3.0.0] Install failed:', error);
            })
    );
});

// ============================================================
// ACTIVATE EVENT — Delete ALL old caches, claim all clients
// ============================================================
self.addEventListener('activate', function(event) {
    console.log('🚀 [SW v3.0.0] Activate starting...');
    
    event.waitUntil(
        caches.keys()
            .then(function(cacheNames) {
                console.log('🔍 Found ' + cacheNames.length + ' cache(s):', cacheNames);
                
                // Delete every cache that doesn't match current CACHE_NAME
                var deletePromises = cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('  🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName).then(function(deleted) {
                            if (deleted) {
                                console.log('    ✅ Deleted:', cacheName);
                            }
                            return deleted;
                        });
                    } else {
                        console.log('  ✓ Keeping current cache:', cacheName);
                        return Promise.resolve(false);
                    }
                });
                
                return Promise.all(deletePromises);
            })
            .then(function(results) {
                var deletedCount = results.filter(function(r) { return r === true; }).length;
                console.log('📊 Cleanup complete — ' + deletedCount + ' old cache(s) deleted');
                
                // Take control of all clients immediately
                return self.clients.claim();
            })
            .then(function() {
                console.log('👑 [SW v3.0.0] Now controlling all clients');
                
                // Notify all clients that SW is active
                self.clients.matchAll().then(function(clients) {
                    clients.forEach(function(client) {
                        client.postMessage({
                            type: 'SW_ACTIVATED',
                            version: CACHE_VERSION,
                            cacheName: CACHE_NAME,
                            timestamp: new Date().toISOString()
                        });
                    });
                });
            })
            .catch(function(error) {
                console.error('❌ [SW v3.0.0] Activate failed:', error);
            })
    );
});

// ============================================================
// FETCH EVENT — Network-First with Cache Fallback
// ============================================================
self.addEventListener('fetch', function(event) {
    var request = event.request;
    var url = new URL(request.url);
    
    // ============================================================
    // SKIP CONDITIONS
    // ============================================================
    
    // Only handle GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Only handle http and https
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // Skip external/third-party resources (CDNs, fonts, analytics, etc.)
    if (url.hostname !== self.location.hostname) {
        return;
    }
    
    // Skip browser extension requests
    if (url.protocol === 'chrome-extension:' || url.protocol === 'moz-extension:') {
        return;
    }
    
    // Skip hot-reload and development server requests
    if (url.href.indexOf('browser-sync') !== -1 || 
        url.href.indexOf('hot-update') !== -1 ||
        url.href.indexOf('livereload') !== -1) {
        return;
    }
    
    // ============================================================
    // NETWORK-FIRST STRATEGY
    // Always try network first, fall back to cache
    // ============================================================
    
    event.respondWith(
        fetch(request)
            .then(function(networkResponse) {
                // Network succeeded — we got fresh content
                
                // Only cache successful GET responses from our domain
                if (networkResponse && 
                    networkResponse.status === 200 && 
                    networkResponse.type === 'basic') {
                    
                    // Clone the response (response body can only be consumed once)
                    var responseToCache = networkResponse.clone();
                    
                    // Cache in background — don't block the response
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(request, responseToCache).catch(function(error) {
                            // Non-critical error — cache put failed, but we have the network response
                            console.warn('⚠️ Cache put failed for:', url.pathname, '-', error.message);
                        });
                    });
                }
                
                return networkResponse;
            })
            .catch(function(networkError) {
                // Network failed — try to serve from cache
                console.warn('🌐 Network unavailable, trying cache for:', url.pathname);
                
                return caches.match(request).then(function(cachedResponse) {
                    if (cachedResponse) {
                        console.log('📦 Served from cache:', url.pathname);
                        
                        // Add header to indicate this is cached content
                        var headers = new Headers(cachedResponse.headers);
                        headers.set('X-Served-From', 'service-worker-cache');
                        headers.set('X-Cache-Date', new Date().toISOString());
                        
                        return new Response(cachedResponse.body, {
                            status: cachedResponse.status,
                            statusText: cachedResponse.statusText,
                            headers: headers
                        });
                    }
                    
                    // Nothing in cache either
                    console.error('❌ Not in cache:', url.pathname);
                    
                    // If it's a navigation request (HTML page), return offline page
                    if (request.mode === 'navigate') {
                        return caches.match(BASE_PATH + '/offline.html').then(function(offlinePage) {
                            if (offlinePage) {
                                return offlinePage;
                            }
                            // No offline page available — return simple message
                            return new Response(
                                '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Offline</title>' +
                                '<style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;' +
                                'height:100vh;margin:0;background:#1A1A1A;color:#FAF8F5;text-align:center}' +
                                'h1{color:#C5A46D;font-size:2rem;margin-bottom:1rem}' +
                                'p{font-size:1.1rem;opacity:0.8}</style></head>' +
                                '<body><div><h1>11 Avtar Digital Hub</h1>' +
                                '<p>You are currently offline.</p>' +
                                '<p>Please check your internet connection and try again.</p>' +
                                '<p style="margin-top:2rem;font-size:0.9rem;opacity:0.5">Industry Growth Intelligence System™</p></div></body></html>',
                                {
                                    status: 503,
                                    statusText: 'Service Unavailable - Offline',
                                    headers: {
                                        'Content-Type': 'text/html',
                                        'X-Served-From': 'service-worker-offline'
                                    }
                                }
                            );
                        });
                    }
                    
                    // For non-navigation requests, return error
                    return new Response('Resource unavailable offline', {
                        status: 503,
                        statusText: 'Service Unavailable - Offline'
                    });
                });
            })
    );
});

// ============================================================
// MESSAGE HANDLER — Communication from main app to SW
// ============================================================
self.addEventListener('message', function(event) {
    var data = event.data;
    var action = data ? data.action : null;
    
    console.log('📨 [SW v3.0.0] Message received:', action || 'unknown action');
    
    switch (action) {
        
        case 'skipWaiting':
            console.log('⏩ Manual skipWaiting requested');
            self.skipWaiting();
            break;
            
        case 'clearAllCaches':
            console.log('🗑️ Manual clearAllCaches requested');
            event.waitUntil(
                caches.keys().then(function(cacheNames) {
                    return Promise.all(
                        cacheNames.map(function(cacheName) {
                            console.log('  Deleting:', cacheName);
                            return caches.delete(cacheName);
                        })
                    );
                }).then(function() {
                    console.log('✅ All caches deleted by user request');
                    
                    // Notify all clients
                    self.clients.matchAll().then(function(clients) {
                        clients.forEach(function(client) {
                            client.postMessage({
                                type: 'CACHES_CLEARED',
                                timestamp: new Date().toISOString()
                            });
                        });
                    });
                })
            );
            break;
            
        case 'getCacheInfo':
            console.log('ℹ️ Cache info requested');
            event.waitUntil(
                caches.keys().then(function(cacheNames) {
                    var cacheInfo = {
                        currentVersion: CACHE_VERSION,
                        currentCacheName: CACHE_NAME,
                        totalCaches: cacheNames.length,
                        cacheNames: cacheNames,
                        basePath: BASE_PATH,
                        precacheAssetCount: PRECACHE_ASSETS.length
                    };
                    
                    // Send back via MessageChannel if available
                    if (event.ports && event.ports[0]) {
                        event.ports[0].postMessage(cacheInfo);
                    } else if (event.source) {
                        event.source.postMessage({
                            type: 'CACHE_INFO',
                            data: cacheInfo,
                            timestamp: new Date().toISOString()
                        });
                    }
                })
            );
            break;
            
        case 'forceRefresh':
            console.log('🔄 Force refresh requested');
            // Notify all clients to reload
            self.clients.matchAll().then(function(clients) {
                clients.forEach(function(client) {
                    client.postMessage({
                        type: 'FORCE_REFRESH',
                        timestamp: new Date().toISOString()
                    });
                    // Navigate the client to reload
                    client.navigate(client.url);
                });
            });
            break;
            
        default:
            console.log('📨 Unknown message action:', action);
            // Echo back for debugging
            if (event.source) {
                event.source.postMessage({
                    type: 'UNKNOWN_ACTION',
                    receivedAction: action,
                    supportedActions: ['skipWaiting', 'clearAllCaches', 'getCacheInfo', 'forceRefresh'],
                    version: CACHE_VERSION
                });
            }
    }
});

// ============================================================
// PUSH NOTIFICATIONS
// ============================================================
self.addEventListener('push', function(event) {
    console.log('📬 Push notification received');
    
    if (!event.data) {
        console.warn('⚠️ Push event has no data');
        return;
    }
    
    try {
        var data = event.data.json();
        
        var options = {
            body: data.body || 'New insights from 11 Avtar Digital Hub',
            icon: BASE_PATH + '/assets/icons/icon-192.png',
            badge: BASE_PATH + '/assets/icons/icon-72.png',
            vibrate: [200, 100, 200],
            data: {
                url: data.url || BASE_PATH + '/',
                timestamp: new Date().toISOString()
            },
            actions: [
                { action: 'open', title: 'View' },
                { action: 'dismiss', title: 'Dismiss' }
            ],
            tag: '11avtar-notification',
            renotify: true,
            requireInteraction: false
        };
        
        event.waitUntil(
            self.registration.showNotification('11 Avtar Digital Hub', options)
                .then(function() {
                    console.log('✅ Notification displayed');
                })
        );
    } catch (error) {
        console.error('❌ Error processing push notification:', error);
    }
});

// ============================================================
// NOTIFICATION CLICK HANDLER
// ============================================================
self.addEventListener('notificationclick', function(event) {
    console.log('👆 Notification clicked:', event.action);
    
    event.notification.close();
    
    if (event.action === 'dismiss') {
        console.log('  User dismissed notification');
        return;
    }
    
    // 'open' action or default click
    var targetUrl = (event.notification.data && event.notification.data.url) 
        ? event.notification.data.url 
        : BASE_PATH + '/';
    
    console.log('  Opening URL:', targetUrl);
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(function(clientList) {
                // Check if there's already a window open with this URL
                for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];
                    if (client.url.indexOf(targetUrl) !== -1 && 'focus' in client) {
                        console.log('  Focusing existing window');
                        return client.focus();
                    }
                }
                // Open new window
                if (clients.openWindow) {
                    console.log('  Opening new window');
                    return clients.openWindow(targetUrl);
                }
            })
            .catch(function(error) {
                console.error('❌ Error handling notification click:', error);
            })
    );
});

// ============================================================
// BACKGROUND SYNC (Future: offline proposal submissions)
// ============================================================
self.addEventListener('sync', function(event) {
    console.log('🔄 Background sync triggered:', event.tag);
    
    if (event.tag === 'sync-proposals') {
        event.waitUntil(
            syncPendingProposals().then(function(result) {
                console.log('✅ Proposals synced:', result);
            }).catch(function(error) {
                console.error('❌ Proposal sync failed:', error);
            })
        );
    }
    
    if (event.tag === 'sync-contact-forms') {
        event.waitUntil(
            syncPendingContactForms().then(function(result) {
                console.log('✅ Contact forms synced:', result);
            }).catch(function(error) {
                console.error('❌ Contact form sync failed:', error);
            })
        );
    }
});

function syncPendingProposals() {
    // Placeholder — implement when proposal system is built
    console.log('📋 Checking for pending proposals...');
    return Promise.resolve({ synced: 0, message: 'No pending proposals' });
}

function syncPendingContactForms() {
    // Placeholder — implement when contact system is built
    console.log('📧 Checking for pending contact forms...');
    return Promise.resolve({ synced: 0, message: 'No pending contact forms' });
}

// ============================================================
// ERROR HANDLING — Global catch for unexpected SW errors
// ============================================================
self.addEventListener('error', function(event) {
    console.error('❌ [SW v3.0.0] Unhandled error:', event.message);
    console.error('   File:', event.filename);
    console.error('   Line:', event.lineno);
    console.error('   Column:', event.colno);
});

self.addEventListener('unhandledrejection', function(event) {
    console.error('❌ [SW v3.0.0] Unhandled promise rejection:', event.reason);
});

// ============================================================
// STARTUP LOG
// ============================================================
console.log('═══════════════════════════════════════════');
console.log('✅ 11 Avtar Digital Hub Service Worker');
console.log('   Version:', CACHE_VERSION);
console.log('   Cache:', CACHE_NAME);
console.log('   Base Path:', BASE_PATH);
console.log('   Strategy: Network-First with Cache Fallback');
console.log('   Precached Assets:', PRECACHE_ASSETS.length);
console.log('   Status: Active & Controlling Clients');
console.log('═══════════════════════════════════════════');