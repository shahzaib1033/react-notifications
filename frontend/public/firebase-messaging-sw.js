// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeA6LtoMYM9VcarlyD8l7d9gvAbAC1cxs",
    authDomain: "car-rental-f0e79.firebaseapp.com",
    projectId: "car-rental-f0e79",
    storageBucket: "car-rental-f0e79.appspot.com",
    messagingSenderId: "898414440900",
    appId: "1:898414440900:web:14e13460ce53e702fa3491",
    measurementId: "G-44N37PL491"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});