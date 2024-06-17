import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
// const db = getFirestore(app);
// Initialize Firebase
var functioncalled = false;
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
var isloggedin=false;
// let writetodb=localStorage.setItem("writetodb", false);
function getuser(){
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      isloggedin=true;
      console.log('signed in')
      window.location.replace("loggedinpage.html")
      // ...
    } else {
      // User is signed out
      // ...
      console.log('signed out')
      window.location.replace("index.html")
    }
  });
}
getuser()
