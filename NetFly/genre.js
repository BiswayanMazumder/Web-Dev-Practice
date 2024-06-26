console.log('Welcome to netfly');
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { GoogleGenerativeAI } from "https://cdn.skypack.dev/@google/generative-ai";
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
var isloggedin=true;
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
  var genreid=localStorage.getItem('genreid');
  console.log('genreid'+genreid);
  var genrename = [];
  var catimg=[];
  var categoriesbody=document.querySelector('.categoriesbody')
  async function getgenrenames(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
        }
      };
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=true&language=en-US&sort_by=popularity.desc&with_genres=${genreid}`, options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 100).map(movie => movie.poster_path);
    const namePaths = data.results.slice(0, 100).map(movie => movie.original_name);
    // console.log(posterPaths);
    // console.log(namePaths);
    for(var i=0;i<posterPaths.length;i++){
        categoriesbody.innerHTML+=`<div class="image${i}" style="font-weight: 500; font-size: 15px;">
        <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[i]}  style="display: flex;flex-direction: column;text-align: center;justify-content: center;">
        <br>
        <h4>${namePaths[i]}</h4>
        </div>`
    }
      } catch (error) {
        console.log(error)
      }
  }
  // await getgenrenames()
  document.addEventListener('DOMContentLoaded', function() {
    getgenrenames()
  });
