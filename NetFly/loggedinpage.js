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
let trending=document.querySelector('.trendingmovies')
async function fetchtrending(){
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if(user){
      const uid = user.uid;
      const userDocRef = doc(db, "Trending", 'Trending_Posters');
      const docsnap1 = await getDoc(userDocRef);
      if (docsnap1.exists()){
        var Trending1=docsnap1.data().trending1;
        var Trending2=docsnap1.data().trending2;
        var Trending3=docsnap1.data().trending3;
        var Trending4=docsnap1.data().trending4;
        var Trending5=docsnap1.data().trending5;
        var Trending6=docsnap1.data().trending6;
        trending.innerHTML=` <div class="trending1">
                    <svg id="rank-1" width="100px" height="200px" viewBox="-20 0 70 154" class="svg-icon svg-icon-rank-1 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path></svg>
                    <img src=${Trending1} alt="" height="200px">
                </div>
                <div class="trending2">
                    <svg id="rank-2" width="100px" height="200px" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-2 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"></path></svg>
                    <img src=${Trending2} alt="" height="200px">
                </div>
                <div class="trending3">
                    <svg id="rank-3" width="100px" height="200px" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-3 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"></path></svg>
                    <img src=${Trending3} alt="" height="200px">
                </div>
                <div class="trending4">
                    <svg id="rank-4" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-4 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"></path></svg>
                    <img src=${Trending4} alt="" height="200px">
                </div>
                <div class="trending4">
                    <svg id="rank-5" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-5 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"></path></svg>
                    <img src=${Trending5} alt="" height="200px">
                </div>
                <div class="trending4">
                    <svg id="rank-6" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-6 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"></path></svg>
                    <img src=${Trending6} alt="" height="200px">
                </div>
            </div>`
      }

    }
  })
}
await fetchtrending();
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
