/*jslint esversion: 6*/
let cacheName = 'restaurants';

// Install the service worker
self.addEventListener('install', function(event) {
    // Tells the browser not to kill the service worker until we are ready
    event.waitUntil(
        // The caches API allows us to store static files for retrieval later
        caches.open('cacheName').then(function(cache) {
            return cache.addAll([
                '../index.html'
            ]);
        })
    );
});
