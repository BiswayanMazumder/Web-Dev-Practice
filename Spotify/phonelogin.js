import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged, signInWithPhoneNumber, RecaptchaVerifier  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAy0-j5ZJJl6VST50_Y2JV_0MJKqhc3-7w",
    authDomain: "grovito-admin.firebaseapp.com",
    projectId: "grovito-admin",
    storageBucket: "grovito-admin.appspot.com",
    messagingSenderId: "914981071784",
    appId: "1:914981071784:web:6312a727ac7602b2c78b9d",
    measurementId: "G-G4DXEDMJT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
let sendotp=document.querySelector('#sendotp')
let loginbutton = document.querySelector('#loginbutton')
let number=document.querySelector('#emailaddress')
const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });
// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
const appVerifier = window.recaptchaVerifier;
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log('Success')
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.error('error');
      // ...
    });