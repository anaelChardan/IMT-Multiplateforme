// importScripts("https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js");

// const FILES_TO_CACHE = [
//     '.',
//     'app.css',
//     'app.js'
// ];

// const STATIC_CACHE_NAME = 'pages-cache-v2';

// self.addEventListener('install', event => {
//     console.log('Installation du Service Worker...');
//     console.log('Mise en cache des ressources');
//     event.waitUntil(
//         Promise.all([
//             caches.open(STATIC_CACHE_NAME)
//                 .then(cache => {
//                     return cache.addAll(FILES_TO_CACHE);
//                 }),
//             fetch('https://raw.githubusercontent.com/DevInstitut/conference-data/master/speakers.json')
//                 .then(resp => resp.json())
//                 .then(speakers => {
//                     localforage.config({ storeName: 'speakers' })
//                     for (key in speakers) {
//                         localforage.setItem(key, speakers[key])
//                     }
//                 })
//         ]
//         )
//     )
// });

// self.addEventListener('activate', event => {
//     console.log('Activating new service worker...');
//     const cacheWhitelist = [STATIC_CACHE_NAME];
//     // suppression des caches excepté le cache courant (STATIC_CACHE_NAME) event.waitUntil(
//     caches.keys().then(cacheNames => {
//         return Promise.all(
//             cacheNames.map(cacheName => {
//                 if (cacheWhitelist.indexOf(cacheName) < 0) {
//                     return caches.delete(cacheName);
//                 }
//             }));
//     });
// });

// self.skipWaiting();

// self.addEventListener('fetch', event => {
//     console.log('Fetching:', event.request.url);

//     event.respondWith(
//         caches.match(event.request).then(response => {
//             if (response) {
//                 console.log(event.request.url, 'servi depuis le cache');
//                 return response;
//             }

//             return fetch(event.request).then(response => {
//                 console.log(response.url, 'servi depuis l\'internet mondial')
//                 if (response.ok) {
//                     return caches.open(STATIC_CACHE_NAME).then(cache => {
//                         if (event.request.url.indexOf('no.cache') < 0) {
//                             cache.put(event.request.url, response.clone());
//                         }
//                         return response;
//                     });
//                 }
//             });
//         }).catch(error => {
//             console.log("oops");
//         }));
// });

// self.addEventListener('message', event => {
//     // console.log(event);
//     self.clients.matchAll().then(function (clients) {
//         // console.log("Hello");
//         // console.log(clients);
//         // clients.forEach(function (client) {
//         //     client.postMessage({
//         //         "command": "HELLO_LES_CLIENTS",
//         //         "message": "Hello je suis un SW"
//         //     });
//         // })
//     })
// })
// // exemple d'envoi de message à tous les clients (en local)
