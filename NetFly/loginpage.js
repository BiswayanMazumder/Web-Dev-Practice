import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
  const db = getFirestore(app);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  let emailfield=document.querySelector('#EmailAddress')
  let passwordfield=document.querySelector('#password')
  let loginbutton=document.querySelector('.signinbutton')
  const auth = getAuth();
  loginbutton.addEventListener("click",function(){
    let email=emailfield.value
    let password=passwordfield.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('logged in')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
  })
  let pwreset=document.querySelector('.forgetpw')
  pwreset.addEventListener('click',function(){
      if(emailfield.value!==""){
          sendPasswordResetEmail(auth, emailfield.value)
          .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
      }
  })