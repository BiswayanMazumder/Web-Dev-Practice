console.log('Welcome to signup')
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBEzWmfzRUoRFRHlXNEssfR-3EtoElwjJc",
    authDomain: "netflix-5002f.firebaseapp.com",
    databaseURL: "https://netflix-5002f-default-rtdb.firebaseio.com",
    projectId: "netflix-5002f",
    storageBucket: "netflix-5002f.appspot.com",
    messagingSenderId: "977326144598",
    appId: "1:977326144598:web:52026ea69e60f526738ff7",
    measurementId: "G-416W2YJ6K8"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
// console.log("Login Page reached")
let emailaddress = document.getElementById("EmailAddress");
let passwords = document.getElementById("password");
let loginbutton=document.querySelector('.signinbutton')
loginbutton.addEventListener("click", function (event) {
    event.preventDefault();
    const auth = getAuth();
    
    if (emailaddress.value !== "" && passwords.value !== "") {
        const email = emailaddress.value;
        const password = passwords.value;
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.replace("loggedinpage.html")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user: ", errorCode, errorMessage);
        });
    } else {
        alert("Please fill all the fields");
    }
  });
