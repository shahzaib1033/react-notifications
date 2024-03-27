import React, { useEffect, useState } from 'react';
import { setupNotifications } from '../firebase/firebase';
import { toastNotification, sendNativeNotification } from '../notification.helper.js';
import useVisibilityChange from '../hooks/useVisibilityChange.js';

function Home() {
    const isForeground = useVisibilityChange();
    const [token, setToken] = useState('');
    useEffect(() => {
      setupNotifications((message) => {
        // Extract title and body from message
        const { title, body } = message;
        if (isForeground) {
          // App is in the foreground, show toast notification
          toastNotification({
            title,
            description: body,
            status: "info",
          });
        } else {
          // App is in the background, show native notification
          sendNativeNotification({
            title,
            body,
          });
        }
      });
    }, [isForeground]);
    const allownotifications = () => {
        setupNotifications((message) => {
            const { title, body } = message;
            if (isForeground) {
                toastNotification({
                    title,
                    description: body,
                    status: "info",
                });
                setToken(localStorage.getItem('token'));

            } else {
                sendNativeNotification({
                    title,
                    body,
                });
                setToken(localStorage.getItem('token'));

            }
        }).then(() => {
            setToken(localStorage.getItem('token'));
        });
    }
    return (
        <div className="App">
            {!token && <p>click on button to get your device token</p>}
            {token && <p>Your Device token is here</p>}
            <br />
            {token && <p style={{ background: "red", color: "white", maxWidth: "fit-content" }}>{token}</p>}
            {token && <button onClick={() => { navigator.clipboard.writeText(token); alert("Token Copied") }}>Copy yor Token</button>}
            <br />

            {!token && <button onClick={allownotifications}>Generate token</button>}


        </div>
    );
}
export default Home;
