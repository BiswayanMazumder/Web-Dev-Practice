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
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function fetchUserDetails(uid) {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
        var isSubs=userDoc.data().isSubscribed 
        if(isSubs){
          window.location.replace("home.html")
        }
        else{
          window.location.replace("subscribe.html")
        }    
        } else {
            console.log("No such document!");
        }
    } catch (e) {
        console.error("Error fetching document: ", e);
    }
}
function getuser() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        isloggedin = true;
        console.log('signed in')
          fetchUserDetails(user.uid)
        // ...
      } else {
        // User is signed out
        // ...
        console.log('signed out')
        window.location.replace("loginhomepage.html")
      }
    });
  }
// Initialize Firebase
var functioncalled = false;
// const db = getFirestore(app);
var isloggedin=false;
console.log('welcome');
let intro=document.querySelector('#intro');
// intro.muted = false;
intro.addEventListener('ended', function () {
    getuser();
  });
  

