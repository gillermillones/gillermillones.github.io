import {precacheAndRoute} from 'workbox-precaching';
precacheAndRoute([
    {url: '/index.html', revision: '383676'},
    {url: '/styles/app.css', revision: null},
    {url: '/scripts/app.js', revision: null},
    // ... otras entradas ...
]);