// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyB77cvnFN6G80ywcJ08yv_ZWXBTUenynH4",
  authDomain: "serious-mariner-356010.firebaseapp.com",
  projectId: "serious-mariner-356010",
  storageBucket: "serious-mariner-356010.appspot.com",
  messagingSenderId: "189773937651",
  appId: "1:189773937651:web:5e3f07292214621cd7f086",
  measurementId: "G-GVVLZ1PVX5",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
