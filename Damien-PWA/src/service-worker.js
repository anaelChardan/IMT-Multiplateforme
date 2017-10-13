/**
 * Check out https://googlechrome.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');
importScripts("https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js");

const FILES_TO_CACHE = [
  'build/main.js',
  'build/vendor.js',
  'build/main.css',
  'build/polyfills.js',
  'index.html',
  'manifest.json'
];

const STATIC_CACHE_NAME = 'pages-cache-v2';

// self.toolbox.options.cache = {
//   name: 'ionic-cache'
// };

// pre-cache our key assets
// self.toolbox.precache(
//   [
//     './build/main.js',
//     './build/vendor.js',
//     './build/main.css',
//     './build/polyfills.js',
//     'index.html',
//     'manifest.json'
//   ]
// );

// dynamically cache any other local assets
//self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
//self.toolbox.router.default = self.toolbox.networkFirst;


self.addEventListener('install', function (event) {
  console.log('Installation du Service Worker...');
  console.log('Mise en cache des ressources');
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME)
        .then(function (cache) {
          return cache.addAll(FILES_TO_CACHE);
        }),
      fetch("https://raw.githubusercontent.com/DevInstitut/conference-data/master/sessions.json")
        .then(function (resp) {
            return resp.json()
          }
        ).then(function (sessionsObj) {
          const sessions = Object.values(sessionsObj);
          console.log("sessions", sessions)
          localforage.config({storeName: 'sessions'})
          for (key in sessions) {
            localforage.setItem(key, sessions[key])
          }
        })
    ])
  );
});

self.addEventListener('fetch', function (event) {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log(event.request.url, 'servi depuis le cache');
          return response;
        }
        console.log(event.request.url, 'servi depuis le réseau');
        return fetch(event.request)
      })
      .then(function (response) {
        // rubrique à ajouter .then(function (response) {
        return caches.open(STATIC_CACHE_NAME).then(function (cache) {
          // mise en cache des ressources qui ne contiennent pas no.cache
          if (event.request.url.indexOf('no.cache') < 0
          ) {
            cache.put(event.request.url, response.clone());
          }
          return response;
        })
          ;
      })
      .catch(function (error) {
        console.log("oops");
      }))
  ;
});

self.addEventListener('activate', function (event) {
  console.log('Activating new service worker...');
  const cacheWhitelist = [STATIC_CACHE_NAME];
// suppression des caches excepté le cache courant (STATIC_CACHE_NAME)
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) < 0) {
            return caches.delete(cacheName);
          }
        }))
        ;
    }))
  ;
});

//self.skipWaiting();
