import { auth } from './firebase-config.js';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.replace("movies.html");
    }
});

// Google Sign In
document.getElementById('google-sign-in-btn').addEventListener('click', function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User signed in: ", user);
            window.location.replace("movies.html");
        })
        .catch((error) => {
            console.error("Error during sign-in: ", error);
            alert("Error: " + error.message);
        });
});

// Email/Password Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.replace("movies.html");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Email/Password Sign Up
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.replace("movies.html");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Toggle between Login and Sign Up forms
document.getElementById('signupLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}); 