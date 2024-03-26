import admin from "firebase-admin";

import serviceAccount from "./config/firebase.json" assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const pushNotifications = async (token, title, body) => {
    const message = {
        token,
        notification: {
            title,
            body,
        },
    };
    return admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent notification:\n', response);
            const responses = {
                response,
                isError: false
            };
            return responses;
        })
        .catch((error) => {
            const response = {
                response: error,
                isError: true
            };
            return response;
        });
}

export default pushNotifications;