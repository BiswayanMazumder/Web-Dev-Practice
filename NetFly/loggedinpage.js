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
var isloggedin = false;
// let writetodb=localStorage.setItem("writetodb", false);
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
      //   window.location.replace("loggedinpage.html")
      // ...
    } else {
      // User is signed out
      // ...
      console.log('signed out')
      window.location.replace("loginhomepage.html")
    }
  });
}
getuser()
let homepagevideo = document.querySelector('.headingimg');
try {
  homepagevideo.innerHTML = `<video src="https://avodmp4s3ww-a.akamaihd.net/ww_iad/a53f/f39e/b244/40b6-9978-7f5ab4f5a565/bab7f88a-6332-4821-bf53-7fda2e748673_video_720p_2500kbps_audio_aaclc_128kbps.mp4" width="100%" id="myVideo" autoplay muted ></video>`
  // let video = document.querySelector('#myVideo');
  // video.addEventListener('ended', function () {
  //   homepagevideo.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihROyGk5x7V5K1Hq-D2SlRMfRtH_kJ-TlrQ&s" alt="" width="100%">`
  // })
} catch (error) {
  console.log(error);
}
let image1 = document.querySelector('.img1');
let image2=document.querySelector('.img2');
let image3=document.querySelector('.img3');
let image4=document.querySelector('.img4');
let image5=document.querySelector('.img5');
let image6=document.querySelector('.img6');
image1.addEventListener('click', function () {
  console.log('clicked bademiya')
  try {
    localStorage.setItem('moviename', 'Bade Miyaan Chote Miyaan');
    console.log('Value set in localStorage');
    window.location.href = "movies.html"
  } catch (error) {
    console.log(error)
  }
})
image2.addEventListener('click', function () {
  console.log('clicked vikings')
  try {
    localStorage.setItem('moviename', 'Vikings');
    console.log('Value set in localStorage');
    window.location.href = "movies.html"
  } catch (error) {
    console.log(error)
  }
})
image3.addEventListener('click', function () {
  console.log('clicked vikings')
  try {
    localStorage.setItem('moviename', 'El Chappo');
    console.log('Value set in localStorage');
    window.location.href = "movies.html"
  } catch (error) {
    console.log(error)
  }
})
image4.addEventListener('click', function () {
  console.log('clicked vikings')
  try {
    localStorage.setItem('moviename', 'Pablo Escobar');
    console.log('Value set in localStorage');
    window.location.href = "movies.html"
  } catch (error) {
    console.log(error)
  }
})
image5.addEventListener('click', function () {
  console.log('clicked maidaan')
  try {
    localStorage.setItem('moviename', 'Maidaan');
    console.log('Value set in localStorage');
    window.location.href = "movies.html"
  } catch (error) {
    console.log(error)
  }
})
image6.addEventListener('click', function () {
  console.log('clicked mirzapur')
  try {
    localStorage.setItem('moviename', 'Mirzapur');
    console.log('Value set in localStorage');
    window.location.href = "movies.html"
  } catch (error) {
    console.log(error)
  }
})
let bannerimage = document.querySelector('.bannerimage')

bannerimage.addEventListener('click', function () {
  // console.log('clicked bademiya')
  // window.location.href="bademiyachotemiya.html"
})
let logout = document.querySelector('.watchvideo')
logout.addEventListener('click', async function () {
  const auth = getAuth();
  await auth.signOut();
  window.location.replace('loginhomepage.html');
})
