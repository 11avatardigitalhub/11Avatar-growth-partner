// ============================================================
// 11 AVTAR DIGITAL HUB
// EMERGENCY SERVICE WORKER — CACHE KILLER v4.0
// ============================================================
// PURPOSE: Delete all caches, then completely unregister itself
// RESULT: After this SW activates, NO Service Worker will run
//         All content will load fresh from the server every time
// ============================================================
// WHEN TO REPLACE: Once your content updates are stable,
//                  replace this with a proper caching SW
// ============================================================

console.log('═══════════════════════════════════════');
console.log('🚨 11 Avtar Digital Hub');
console.log('   EMERGENCY SERVICE WORKER v4.0');
console.log('   Mode: CACHE KILLER');
console.log('   Action: Delete everything → Unregister');
console.log('═══════════════════════════════════════');

// ============================================================
// INSTALL — Do nothing, skip waiting immediately
// ============================================================
self.addEventListener('install', function(event) {
    console.log('🔧 [Emergency SW v4.0] Install event');
    event.waitUntil(
        self.skipWaiting().then(function() {
            console.log('✅ [Emergency SW v4.0] Skipped waiting');
        })
    );
});

// ============================================================
// ACTIVATE — NUKE EVERYTHING
// ============================================================
self.addEventListener('activate', function(event) {
    console.log('🚀 [Emergency SW v4.0] Activate event');
    console.log('🔥 STARTING COMPLETE CACHE DESTRUCTION...');
    
    event.waitUntil(
        // STEP 1: Get all cache names
        caches.keys()
            .then(function(cacheNames) {
                console.log('📦 Found ' + cacheNames.length + ' cache(s):', cacheNames);
                
                if (cacheNames.length === 0) {
                    console.log('ℹ️ No caches to delete');
                    return [];
                }
                
                // STEP 2: Delete each cache one by one
                var deletePromises = cacheNames.map(function(cacheName) {
                    return caches.delete(cacheName)
                        .then(function(deleted) {
                            if (deleted) {
                                console.log('   ✅ DELETED: ' + cacheName);
                            } else {
                                console.log('   ⚠️ FAILED: ' + cacheName);
                            }
                            return deleted;
                        })
                        .catch(function(error) {
                            console.error('   ❌ ERROR deleting ' + cacheName + ':', error);
                            return false;
                        });
                });
                
                return Promise.all(deletePromises);
            })
            .then(function(results) {
                var deletedCount = results.filter(function(r) { return r === true; }).length;
                console.log('📊 Deletion complete: ' + deletedCount + ' cache(s) deleted');
                
                // STEP 3: Claim all clients immediately
                return self.clients.claim();
            })
            .then(function() {
                console.log('👑 [Emergency SW v4.0] Controlling all clients');
                
                // STEP 4: UNREGISTER THIS SERVICE WORKER
                console.log('🗑️ Now unregistering this Service Worker...');
                
                return self.registration.unregister()
                    .then(function(success) {
                        if (success) {
                            console.log('✅ SERVICE WORKER SUCCESSFULLY UNREGISTERED');
                            console.log('   No SW will run on subsequent page loads');
                        } else {
                            console.log('⚠️ SW unregister returned false');
                            console.log('   It may still be active until browser restart');
                        }
                        
                        // STEP 5: Notify all open clients
                        return self.clients.matchAll({ type: 'window' });
                    })
                    .then(function(clients) {
                        console.log('📢 Notifying ' + clients.length + ' client(s) to reload...');
                        
                        clients.forEach(function(client) {
                            // Send message to client
                            client.postMessage({
                                type: 'SW_REMOVED',
                                version: '4.0',
                                message: 'Service Worker has been permanently removed.',
                                timestamp: new Date().toISOString()
                            });
                            
                            // Force navigate to reload
                            try {
                                client.navigate(client.url);
                            } catch(e) {
                                console.log('   ⚠️ Could not navigate client:', e.message);
                            }
                        });
                        
                        console.log('═══════════════════════════════════════');
                        console.log('✅ EMERGENCY SW: MISSION COMPLETE');
                        console.log('   All caches: DELETED');
                        console.log('   Service Worker: UNREGISTERED');
                        console.log('   Clients: NOTIFIED TO RELOAD');
                        console.log('═══════════════════════════════════════');
                    });
            })
            .catch(function(error) {
                console.error('❌ [Emergency SW v4.0] Activate failed:', error);
                console.error('   Error details:', error.message);
                console.error('   Error stack:', error.stack);
                
                // Even if something fails, try to unregister
                return self.registration.unregister().then(function(success) {
                    console.log('🗑️ Emergency unregister after error:', success ? 'SUCCESS' : 'FAILED');
                });
            })
    );
});

// ============================================================
// FETCH — PASS THROUGH EVERYTHING
// The SW does NOT intercept any fetch requests
// All requests go directly to the network via browser default
// ============================================================
self.addEventListener('fetch', function(event) {
    // DO NOT respond to the fetch event
    // This lets the browser handle the request normally
    // Effectively disables the SW for all network requests
    return;
});

// ============================================================
// MESSAGE HANDLER
// ============================================================
self.addEventListener('message', function(event) {
    if (!event.data) return;
    
    console.log('📨 [Emergency SW v4.0] Message received:', event.data.action || 'unknown');
    
    switch (event.data.action) {
        case 'unregister':
            console.log('🗑️ Manual unregister requested');
            self.registration.unregister()
                .then(function(success) {
                    console.log('   Result:', success ? 'SUCCESS' : 'FAILED');
                    
                    if (event.source) {
                        event.source.postMessage({
                            type: 'UNREGISTER_RESULT',
                            success: success,
                            timestamp: new Date().toISOString()
                        });
                    }
                });
            break;
            
        case 'getStatus':
            if (event.source) {
                event.source.postMessage({
                    type: 'SW_STATUS',
                    version: '4.0-emergency',
                    mode: 'CACHE_KILLER',
                    active: true,
                    timestamp: new Date().toISOString()
                });
            }
            break;
            
        default:
            console.log('   Unknown action:', event.data.action);
    }
});

// ============================================================
// PUSH NOTIFICATIONS — Still handle these
// ============================================================
self.addEventListener('push', function(event) {
    if (!event.data) return;
    
    try {
        var data = event.data.json();
        var options = {
            body: data.body || 'Update from 11 Avtar Digital Hub',
            icon: '/11Avatar-growth-partner/assets/icons/icon-192.png',
            badge: '/11Avatar-growth-partner/assets/icons/icon-72.png',
            vibrate: [200, 100, 200],
            data: { url: data.url || '/11Avatar-growth-partner/' },
            tag: '11avtar-update',
            renotify: true
        };
        
        event.waitUntil(
            self.registration.showNotification('11 Avtar Digital Hub', options)
        );
    } catch(e) {
        console.error('Push notification error:', e);
    }
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    var url = (event.notification.data && event.notification.data.url) 
        || '/11Avatar-growth-partner/';
    
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(function(clientList) {
            for (var i = 0; i < clientList.length; i++) {
                if (clientList[i].url.indexOf(url) !== -1 && 'focus' in clientList[i]) {
                    return clientList[i].focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

// ============================================================
// ERROR HANDLING
// ============================================================
self.addEventListener('error', function(event) {
    console.error('❌ [Emergency SW v4.0] Error:', event.message);
});

console.log('✅ [Emergency SW v4.0] Ready — Waiting to activate');