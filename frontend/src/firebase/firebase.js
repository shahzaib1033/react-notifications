// firebase.js
import { initializeApp } from '@firebase/app';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';

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
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const setupNotifications = async () => {
    try {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const token = await getToken(messaging);
            localStorage.setItem('token', token);
            console.log('FCM Token:', token);
        } else {
            console.log('Notification permission denied.');
        }
        // Handle foreground notifications
        onMessage(messaging, (payload) => {
            console.log('Foreground Message:', payload);
            // Handle the notification or update your UI
        });
    } catch (error) {
        console.error('Error setting up notifications:', error);
    }
};
export { messaging, setupNotifications };