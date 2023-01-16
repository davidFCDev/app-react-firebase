/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAfo4sfEtAumAcveqikF4nFeQFb7wk18Wc",
    authDomain: "fir-shopping-8e43d.firebaseapp.com",
    projectId: "fir-shopping-8e43d",
    storageBucket: "fir-shopping-8e43d.appspot.com",
    messagingSenderId: "686926329797",
    appId: "1:686926329797:web:9f733d3c9fe910b08ffdac"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Título de notificación';
    const notificationOptions = {
        body: 'Éste es el body.',
        icon: 'https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es-419'
    };
    self.registration.showNotification(notificationTitle,
        notificationOptions);
});