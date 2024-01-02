importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDRPEs_iDZ-6AOpxUIqzd0ZdQojec4Aliw",
  authDomain: "streamline-pn.firebaseapp.com",
  projectId: "streamline-pn",
  storageBucket: "streamline-pn.appspot.com",
  messagingSenderId: "509129972777",
  appId: "1:509129972777:web:c643c71ac40ec8a94b5038",
  measurementId: "G-M96SZHZG3L",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
