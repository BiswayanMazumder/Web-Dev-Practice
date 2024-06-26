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
  var catimg=['https://image.tmdb.org/t/p/w400/ii8QGacT3MXESqBckQlyrATY0lT.jpg','https://image.tmdb.org/t/p/w400/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg','https://image.tmdb.org/t/p/w400/9cGSFGZVVLsrnbs0AFPDh6X2ynl.jpg','https://image.tmdb.org/t/p/w400/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg','https://image.tmdb.org/t/p/w400/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg','https://image.tmdb.org/t/p/w400/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg','https://image.tmdb.org/t/p/w400/h8C7KZwCJO5DN7jPifc7AoIjx7k.jpg','https://image.tmdb.org/t/p/w400/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg','https://image.tmdb.org/t/p/w400/sixfWYfNegaGGHKdXrNNUHaMiAC.jpg','https://image.tmdb.org/t/p/w400/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg','https://image.tmdb.org/t/p/w400/U8QRD7jvTXEYsUXq74IFKaSiL5.jpg','https://image.tmdb.org/t/p/w400/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg','https://image.tmdb.org/t/p/w400/AmHOQ7rpHwiaUMRjKXztnauSJb7.jpg','https://image.tmdb.org/t/p/w400//jiQRyCFXAgLBjnbYQxz04dxGWvR.jpg','https://image.tmdb.org/t/p/w400//n6bUvigpRFqSwmPp1m2YADdbRBc.jpg','https://image.tmdb.org/t/p/w400//bPnPsyo09tLRnTOb7AlsBsgnbhP.jpg','https://image.tmdb.org/t/p/w400//2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg']
  const genrename = [];
  const genreid=[];
  var categoriesbody=document.querySelector('.categoriesbody')
  async function getgenrenames(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
        }
      };
      fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Accessing the genres array from the API response
    const genres = data.genres;

    // Iterate over the genres array and push each genre name to genrename array
    genres.forEach(genre => {
    //   console.log(genre.name);
      genrename.push(genre.name);
      genreid.push(genre.id);
    });

    // Log the genrename array after all names have been collected
    // console.log('Genre names'+genreid);
    for(var i=0;i<genrename.length;i++){
        categoriesbody.innerHTML+=`<div class="image${i}">
        <h4> ${genrename[i]}</h4>
        <img src=${catimg[i]} style="display: flex;flex-direction: column;text-align: center;justify-content: center;" >
               
        </div>`
    }
    for (let i = 0; i < genrename.length; i++) {
      let imageElement = document.querySelector(`.image${i}`);
      if (imageElement) {
        imageElement.addEventListener('click', function() {
          localStorage.setItem('genreid',genreid[i]);
          window.location.href=("genre.html");
          // console.log(`Element with class ${genrename[i]} clicked.`);
        });
      } else {
        // console.error(`Element with class .image${i} not found.`);
      }
    }
    
    
  })
  .catch(err => console.error('Fetch error:', err));
  }
  // await getgenrenames()
  document.addEventListener('DOMContentLoaded', function() {
    getgenrenames()
  });
