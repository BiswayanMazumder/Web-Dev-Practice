console.log('Welcome to netfly');
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
    //   window.location.replace("loggedinpage.html")
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
let homepagevideo=document.querySelector('.headingimg');
try {
    homepagevideo.innerHTML=`<video src="https://firebasestorage.googleapis.com/v0/b/netflix-5002f.appspot.com/o/Home%20Screen%20Videos%2FShaitaan%20_%20Official%20Trailer%20_%20Ajay%20Devgan%2C%20R%20Madhavan%20_%20Netflix%20India.mp4?alt=media&token=893132ca-d46c-44b6-ba19-4f85976366ed" width="100%" id="myVideo" autoplay muted ></video>`
let video=document.querySelector('#myVideo');
video.addEventListener('ended', function(){
    homepagevideo.innerHTML=`<img src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVJYlnJec-T_hc9slgKNgf6KfCpl_LtbF5mkDrOPJi3LDKjaMwphGKHfDJi0uOq44S_r7GSOcoV3rBTIgYiOeaFgOZ8-d6YM1PxA.webp?r=c4c" alt="" width="100%">`
})
} catch (error) {
    console.log(error);
}
let image1 = document.querySelector('.img1');

image1.addEventListener('click',function(){
    console.log('clicked bademiya')
    window.location.href="bademiyachotemiya.html"
})
let bannerimage=document.querySelector('.bannerimage')

bannerimage.addEventListener('click',function(){
    // console.log('clicked bademiya')
    // window.location.href="bademiyachotemiya.html"
})
let logout=document.querySelector('.watchvideo')
logout.addEventListener('click',async function(){
  const auth = getAuth();
  await auth.signOut();
  window.location.replace('index.html');
})
