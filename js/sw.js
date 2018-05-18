/*jslint esversion: 6*/
let cacheName = 'restaurants';

// Install the service worker
self.addEventListener('install', function(event) {
    // Tells the browser not to kill the service worker until we are ready
    event.waitUntil(
        // The caches API allows us to store static files for retrieval later
        caches.open('cacheName').then(function(cache) {
            return cache.addAll([
                '../index.html',
                '../restaurant.html',
                'dbhelper.js',
                'restaurant_info.js',
                'main.js',
                '../css/styles.css',
                '../css/normalize.css',
                '../img/1.jpg',
                '../img/2.jpg',
                '../img/3.jpg',
                '../img/4.jpg',
                '../img/5.jpg',
                '../img/6.jpg',
                '../img/7.jpg',
                '../img/8.jpg',
                '../img/9.jpg',
                '../img/10.jpg',
                '../data/restaurants.json'
            ]);
        })
    );
});
