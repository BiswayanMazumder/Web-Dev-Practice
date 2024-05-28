import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
console.log("Reset Password Page reached")
let reset = document.getElementById("ResetPassword");
let isadded = false;
let emailsent = false;
let successmessage = document.querySelector(".subtext");
function getuser(){
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          // isloggedin=true;
          console.log('signed in')
          window.location.replace("loggedinpage.html")
          // ...
        } else {
          // User is signed out
          // ...
          console.log('signed out')
        }
      });
    }
    getuser()
reset.addEventListener("click", function () {
    let emailAddress = document.getElementById("emailaddress");
    const auth = getAuth();
    const email = emailAddress.value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            console.log('sent')
            successmessage.innerHTML += `<div class="errormessage" style="position: relative;justify-content: center;text-align: center;color: #1DB954;font-weight: 700;">
    Password Reset Email Sent successfully
</div>`

            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
});


