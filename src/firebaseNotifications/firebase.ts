// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const firebase_config = {
  apiKey: "AIzaSyB77cvnFN6G80ywcJ08yv_ZWXBTUenynH4",
  authDomain: "serious-mariner-356010.firebaseapp.com",
  projectId: "serious-mariner-356010",
  storageBucket: "serious-mariner-356010.appspot.com",
  messagingSenderId: "189773937651",
  appId: "1:189773937651:web:5e3f07292214621cd7f086",
  measurementId: "G-GVVLZ1PVX5",
};

const firebase_vapidkey_tes = `BEfuIBJbXxTQ5pXpKP0-6sgR9pEAKN4s_LE0znKWQQqvVOHJDWpAjF-fK1CZMmyE6-pQBr0F0ThhEHxdMi6xi0c`;

initializeApp(firebase_config);

const messaging = getMessaging();

export const registrationService = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
        "/firebase-messaginj-sw.js",
        {
          type: "module",
        }
    );
    console.log({ registration });
    return registration
  } catch (error) {
    console.log(error)
  }
}

export const requestForToken = async() => {
  const service = await registrationService();
  return getToken(messaging, {
    vapidKey: firebase_vapidkey_tes,
    serviceWorkerRegistration: service,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        return currentToken;
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log(payload);
      resolve(payload);
    });
  });
