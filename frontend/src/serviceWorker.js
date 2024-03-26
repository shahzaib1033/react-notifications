export const register = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/firebase-messaging-sw.js')
                .then(function (registration) {
                    console.log('ServiceWorker registration successful:', registration);
                })
                .catch(function (error) {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
};