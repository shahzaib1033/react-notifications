// firebase.js
import { initializeApp } from '@firebase/app';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "Your-API-Key",
    authDomain: "Your-Auth-Domain",
    projectId: "Your-Project-Id",
    storageBucket: "Your-Storage-Bucket",
    messagingSenderId: "Your-Messaging-Sender-Id",
    appId: "Your-App-Id",
    measurementId: "Your-Measurement-Id"
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
            localStorage.removeItem('token');

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