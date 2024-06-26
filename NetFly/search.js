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
var logo = document.querySelector('.logo');
var searchbody = document.querySelector('.searchbody');

logo.addEventListener('click', function() {
  window.location.href = "home.html";
});

// Function to create a shimmer effect
function createShimmer() {
  var shimmerDiv = document.createElement('div');
  shimmerDiv.className = 'shimmer';
  return shimmerDiv;
}

async function fetchMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);

    for (var i = 0; i < posterPaths.length; i++) {
      // Show shimmer effect
      searchbody.appendChild(createShimmer());

      // Load actual image
      const image = new Image();
      image.src = 'https://image.tmdb.org/t/p/w500' + posterPaths[i];
      image.onload = function() {
        // Replace shimmer with actual image
        const shimmerDiv = searchbody.getElementsByClassName('shimmer')[0];
        if (shimmerDiv) {
          searchbody.replaceChild(image, shimmerDiv);
        }
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// fetchMovies();

// CSS for shimmer effect
var style = document.createElement('style');
style.textContent = `
  .shimmer {
    width: 100%;
    height: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-size: 800px 104px; /* Adjust as needed */
    position: relative;
    overflow: hidden;
    animation: shimmer 1s infinite linear;
  }

  @keyframes shimmer {
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
  }
`;
document.head.appendChild(style);
var searchtext = document.querySelector('.searchtext');
async function checkmoviename() {
  var placeholdername = document.querySelector('.search');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${placeholdername.value}&include_adult=true&language=en-US&page=1`, options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);
    const namePaths = data.results.slice(0, 20).map(movie => movie.original_title);
    const idPaths = data.results.slice(0, 20).map(movie => movie.id);

    searchbody.innerHTML = '';
    searchtext.innerHTML = '';
    searchtext.innerHTML += `<h2 style="color: white;">Searched: ${placeholdername.value}</h2><br><br>`;

    for (let i = 0; i < posterPaths.length; i++) {
      searchbody.innerHTML += `
        <div class="image-container" style="position: relative; color: white; font-weight: 300; font-size: 12px; justify-content: center; text-align: center; display: flex; flex-direction: column; gap: 20px">
          <img class="movie-image" src="https://image.tmdb.org/t/p/w500${posterPaths[i]}" style="display: flex; flex-direction: column; text-align: center; justify-content: center; padding-top: 30px">
          <h4 style="color: white;">${namePaths[i]}</h4>
          <div class="description" style="display: none; position: absolute; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px;">Description here...</div>
        </div>`;
    }

    for (let i = 0; i < posterPaths.length; i++) {
      let imageElement = document.querySelector(`.image-container:nth-of-type(${i + 1})`);
      if (imageElement) {
        imageElement.addEventListener('click', function() {
          localStorage.setItem('id', idPaths[i]);
          localStorage.setItem('poster', posterPaths[i]);
          console.log(posterPaths[i]);
          let description = imageElement.querySelector('.description');
          description.style.display = 'block';
        });
      } else {
        console.error(`Element with class .image${i} not found.`);
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.search').addEventListener('input', function() {
    checkmoviename();
  });
});

