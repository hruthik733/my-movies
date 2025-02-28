// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "<your apiKey>",
    authDomain: "movieshub-4u.firebaseapp.com",
    projectId: "movieshub-4u",
    storageBucket: "movieshub-4u.firebasestorage.app",
    messagingSenderId: "866862438358",
    appId: "1:866862438358:web:bb5ec7316efd3053d77677",
    measurementId: "G-06P0BM70YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 
