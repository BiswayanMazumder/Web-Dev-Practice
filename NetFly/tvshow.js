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
var posterpath=localStorage.getItem('poster')
var id=localStorage.getItem('id')
console.log(id)
console.log('https://image.tmdb.org/t/p/w500'+posterpath)
var relatedsection=document.querySelector('.relatedsection')
async function fetchrecommendation(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
        }
      };
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 10).map(movie => movie.poster_path);
    // console.log(posterPaths);
    for(var i=0;i<posterPaths.length;i++){
        relatedsection.innerHTML += `<div class="img${i}">
                <img src=${'https://image.tmdb.org/t/p/w500'+posterPaths[i]}
                    alt="" ;height="100px" width="200px">`
    }
      } catch (error) {
        
      }
}
await fetchrecommendation();
var posterholder=document.querySelector('.headingimg')
var PosterPath='https://image.tmdb.org/t/p/w500'+posterpath
async function fetchposter(){
posterholder.innerHTML=`<img src=${PosterPath} alt="" width="100%" height="720px">`
}
await fetchposter();