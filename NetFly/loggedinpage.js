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
async function checksubsStatus() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    const uid = user.uid;
    try {
      const userDocRef = doc(db, "users", uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        var issubed = docSnap.data().isSubscribed;
        console.log("Document data:", docSnap.data().isSubscribed);
        if (!issubed) {
          window.location.replace("subscribe.html")
        }
      }

    } catch (e) {
      console.log(e.message);
    }
  });
}
await checksubsStatus();
var is_muted = true;
let homepagevideo = document.querySelector('.headingimg');
try {
  homepagevideo.innerHTML = `<video src="https://avodmp4s3ww-a.akamaihd.net/ww_iad/baf3/2e3b/31ac/4ea8-83be-4e0c2f0087ff/882dbfb8-972e-4caa-b7a0-7d3840551eaf_video_720p_2500kbps_audio_aaclc_128kbps.mp4" width="100%" id="myVideo" autoplay muted loop></video>`
  let video = document.querySelector('#myVideo');
  var unmutebutton=document.querySelector('.mutebutton')
  unmutebutton.addEventListener('click', function () {
    console.log('clicked')
    is_muted=!is_muted;
    if(is_muted){
      unmutebutton.innerHTML=`<svg class="fbl-icon _30dE3d _1a_Ljt" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><title>Muted</title><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.669 2.064 C 19.551 2.101,19.413 2.187,19.307 2.291 C 19.212 2.384,18.434 3.250,17.578 4.216 L 16.020 5.973 16.000 4.855 C 15.980 3.754,15.979 3.735,15.878 3.539 C 15.678 3.152,15.219 2.936,14.801 3.032 C 14.666 3.063,13.518 3.699,11.192 5.029 L 7.780 6.980 5.460 7.000 L 3.140 7.020 2.880 7.145 C 2.548 7.304,2.302 7.551,2.144 7.880 L 2.020 8.140 2.020 12.000 L 2.020 15.860 2.133 16.104 C 2.276 16.413,2.585 16.721,2.900 16.868 L 3.140 16.980 4.670 17.000 L 6.199 17.020 4.666 18.746 C 3.823 19.695,3.108 20.532,3.076 20.606 C 3.045 20.680,3.020 20.867,3.020 21.023 C 3.020 21.268,3.036 21.333,3.141 21.503 C 3.446 21.998,4.086 22.146,4.540 21.828 C 4.647 21.753,8.058 17.945,12.797 12.611 C 21.377 2.953,21.000 3.395,21.000 3.000 C 21.000 2.605,20.705 2.190,20.333 2.064 C 20.106 1.986,19.922 1.987,19.669 2.064 M10.998 11.622 L 7.995 15.000 5.998 15.000 L 4.000 15.000 4.000 12.001 L 4.000 9.003 6.110 8.991 L 8.220 8.980 8.560 8.813 C 8.747 8.722,10.043 7.992,11.440 7.192 L 13.980 5.737 13.991 6.991 L 14.001 8.244 10.998 11.622 M19.729 7.050 C 19.569 7.102,19.259 7.368,19.179 7.523 C 19.146 7.585,19.102 7.722,19.079 7.828 C 19.029 8.067,19.075 8.245,19.354 8.880 C 19.593 9.424,19.766 10.004,19.885 10.662 C 20.000 11.295,20.011 12.609,19.907 13.220 C 19.771 14.013,19.611 14.548,19.295 15.268 C 19.115 15.675,19.080 15.794,19.080 15.988 C 19.082 16.910,20.187 17.336,20.805 16.652 C 21.185 16.231,21.727 14.593,21.926 13.260 C 21.998 12.781,21.998 11.219,21.926 10.740 C 21.775 9.732,21.515 8.806,21.138 7.940 C 20.845 7.264,20.525 6.993,20.035 7.004 C 19.939 7.006,19.801 7.027,19.729 7.050 M15.000 13.135 L 14.020 14.240 14.000 16.254 L 13.980 18.269 12.806 17.598 L 11.631 16.927 10.953 17.688 C 10.580 18.106,10.281 18.453,10.288 18.459 C 10.367 18.529,14.576 20.903,14.692 20.944 C 15.036 21.066,15.432 20.970,15.702 20.700 C 16.018 20.384,16.002 20.650,15.990 16.084 L 15.980 12.031 15.000 13.135 " fill="white" stroke="none" fill-rule="evenodd"></path></svg></svg>`
      video.muted = is_muted;
    }
    if(!is_muted){
      unmutebutton.innerHTML=`<svg class="fbl-icon _30dE3d _1a_Ljt" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><title>Unmuted</title><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.726 3.046 C 14.652 3.067,13.059 3.961,11.186 5.032 L 7.780 6.980 5.460 7.000 L 3.140 7.020 2.880 7.145 C 2.548 7.304,2.302 7.551,2.144 7.880 L 2.020 8.140 2.020 12.000 L 2.020 15.860 2.133 16.104 C 2.276 16.413,2.585 16.721,2.900 16.868 L 3.140 16.980 5.460 17.000 L 7.780 17.020 11.157 18.954 C 13.015 20.018,14.606 20.914,14.692 20.944 C 15.036 21.065,15.432 20.970,15.701 20.701 C 16.026 20.376,16.000 21.144,16.000 12.000 C 16.000 2.848,16.027 3.625,15.697 3.295 C 15.446 3.044,15.069 2.947,14.726 3.046 M13.990 15.134 L 13.980 18.269 11.400 16.791 C 9.981 15.978,8.685 15.247,8.520 15.167 L 8.220 15.020 6.110 15.008 L 4.000 14.997 4.000 11.998 L 4.000 9.000 6.041 9.000 C 7.951 9.000,8.097 8.995,8.311 8.923 C 8.437 8.881,9.764 8.146,11.260 7.291 L 13.980 5.737 13.990 8.868 C 13.996 10.591,13.996 13.410,13.990 15.134 M19.800 7.035 C 19.504 7.132,19.245 7.362,19.135 7.626 C 19.105 7.698,19.080 7.871,19.080 8.010 C 19.080 8.215,19.106 8.316,19.218 8.550 C 19.740 9.639,19.973 10.694,19.976 11.980 C 19.979 13.257,19.801 14.117,19.295 15.268 C 19.115 15.675,19.080 15.794,19.080 15.988 C 19.082 16.910,20.187 17.336,20.805 16.652 C 21.185 16.231,21.727 14.593,21.926 13.260 C 21.998 12.781,21.998 11.219,21.926 10.740 C 21.774 9.727,21.511 8.792,21.137 7.941 C 20.928 7.466,20.756 7.240,20.506 7.113 C 20.331 7.024,19.959 6.983,19.800 7.035 " fill="white" stroke="none" fill-rule="evenodd"></path></svg></svg>`
      video.muted = is_muted;
    }
  })
  // video.addEventListener('ended', function () {
  //   homepagevideo.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihROyGk5x7V5K1Hq-D2SlRMfRtH_kJ-TlrQ&s" alt="" width="100%">`
  // })
} catch (error) {
  console.log(error);
}
var promptsent = "";
var apikeys='';
async function fetchapikeys(){
  try {
    const userDoc = await getDoc(doc(db, "Gemini", "API_KEYS"));
    if (userDoc.exists()) {
     apikeys=userDoc.data().api 
    // console.log('api'+apikeys)    
    } else {
        console.log("No such document!");
    }
} catch (e) {
    console.error("Error fetching document: ", e);
}
}
async function readymessagebox() {
  await fetchapikeys();
  var API_KEY = apikeys;
const genAI = new GoogleGenerativeAI(API_KEY);
  if (ismessageopened) {
    var query = document.querySelector('.query')
    console.log('recieved query')
    var sendbutton = document.querySelector('.sendmssg');
    console.log('rrecived buttno')
    sendbutton.addEventListener('click', function () {
      console.log('Query'+query.value)
      promptsent = query.value;
      async function genresponse() {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = promptsent;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        var usermessage = document.querySelector('.messages')
        usermessage.innerHTML+=`<div class="clientmessage">
                ${text}
                </div>`
        query.value = ''
      }
      genresponse();

    })
  }
}
var messageprev = document.querySelector('.messagepreview')
var ismessageopened = false;
setTimeout(function () {
  messageprev.innerHTML = `
      <div class="message">
          <p class="message-content">Hello how can I help you?</p>
      </div>`;

}, 3000);
var messagebutton = document.querySelector('.helpsection')
messagebutton.addEventListener('click', function () {
  if (ismessageopened == false) {
    messageprev.innerHTML = ` <div class="messagebox">
                <div class="messages">
                </div>
                <div class="typingsection">
                    <input type="text" class="query" placeholder="Enter a message....">
                    <button class="sendmssg">
                        <img src="send.png" alt="" height="40px" width="60px">
                    </button>
                </div>
            </div>`;
    ismessageopened = true;
    
    var query = document.querySelector('.query')
    console.log('recieved query')
    var sendbutton = document.querySelector('.sendmssg');
    var usermessage = document.querySelector('.messages')
    sendbutton.addEventListener('click', function () {
      usermessage.innerHTML+=`<div class="usermessage">
                ${query.value}
                </div>`
      console.log(query.value)
       
    })
    readymessagebox();
  }
  else if (ismessageopened) {
    messageprev.innerHTML = `
      <div class="message">
          <p class="message-content">Hello how can I help you?</p>
      </div>`;
    ismessageopened = false;
  }
})

let trending = document.querySelector('.trendingmovies')
async function fetchtrending() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const userDocRef = doc(db, "Trending", 'Trending_Posters');
      const docsnap1 = await getDoc(userDocRef);
      if (docsnap1.exists()) {
        var Trending1 = docsnap1.data().trending1;
        var Trending2 = docsnap1.data().trending2;
        var Trending3 = docsnap1.data().trending3;
        var Trending4 = docsnap1.data().trending4;
        var Trending5 = docsnap1.data().trending5;
        var Trending6 = docsnap1.data().trending6;
        var Trending7 = docsnap1.data().trending7;
        var Trending8 = docsnap1.data().trending8;
        var Trending9 = docsnap1.data().trending9;
        var Trending10 = docsnap1.data().trending10;
        trending.innerHTML = ` <div class="trending1">
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
                <div class="trending4">
                    <svg id="rank-7" viewBox="0 0 78 154" width="100px" height="200px" class="svg-icon svg-icon-rank-7 top-10-rank"><path stroke="#595959" stroke-width="4" d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z" stroke-linejoin="square"></path></svg>
                    <img src=${Trending7} alt="" height="200px">
                </div>
                <div class="trending4">
                    <svg id="rank-8" width="100px" height="200px" viewBox="0 0 77 154" class="svg-icon svg-icon-rank-8 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M59.5 152c11.335 0 21.358-1.72 30.077-5.15 8.637-3.397 15.361-8.258 20.213-14.586 4.805-6.267 7.21-13.876 7.21-22.899 0-7.326-2.261-14.07-6.813-20.29-4.548-6.214-10.837-10.658-18.922-13.35l-5.4-1.799 5.338-1.975c7.238-2.678 12.572-6.683 16.066-12.018 3.53-5.388 5.284-11.178 5.284-17.414 0-7.912-2.133-14.839-6.405-20.84-4.3-6.042-10.403-10.825-18.345-14.351C79.816 3.78 70.386 2 59.5 2S39.184 3.781 31.197 7.328c-7.942 3.526-14.044 8.309-18.345 14.351-4.272 6.001-6.405 12.928-6.405 20.84 0 6.236 1.755 12.026 5.284 17.414 3.494 5.335 8.828 9.34 16.066 12.018l5.338 1.975-5.4 1.798c-8.085 2.693-14.374 7.137-18.922 13.351C4.261 95.295 2 102.04 2 109.365c0 9.023 2.405 16.632 7.21 22.899 4.852 6.328 11.576 11.19 20.213 14.586 8.72 3.43 18.742 5.15 30.077 5.15zm.5-89c-5.6 0-10.334-1.515-14.125-4.56C41.985 55.313 40 51.183 40 46.21c0-5.244 1.976-9.518 5.875-12.65C49.666 30.515 54.4 29 60 29s10.334 1.515 14.125 4.56C78.025 36.694 80 40.968 80 46.212c0 4.973-1.985 9.103-5.875 12.228C70.334 61.485 65.6 63 60 63zm-.5 62c-6.255 0-11.556-1.613-15.836-4.856-4.41-3.343-6.664-7.816-6.664-13.25 0-5.298 2.258-9.698 6.664-13.038C47.944 90.613 53.245 89 59.5 89c6.255 0 11.556 1.613 15.836 4.856 4.406 3.34 6.664 7.74 6.664 13.038 0 5.434-2.254 9.907-6.664 13.25C71.056 123.387 65.755 125 59.5 125z"></path></svg>
                    <img src=${Trending8} alt="" height="200px">
                </div>
                <div class="trending4">
                    <svg id="rank-9" viewBox="0 0 71 154" width="100px" height="200px" class="svg-icon svg-icon-rank-9 top-10-rank"><path stroke="#595959" stroke-width="4" d="M40.0597376,115.807692 L4.47328474,115.807692 C7.45109332,126.586242 13.4362856,135.15497 22.4670906,141.582071 C32.2129251,148.518048 44.5640134,152 59.5759717,152 C78.2141671,152 92.5105725,145.697944 102.6454,133.074799 C112.853557,120.360322 118,101.543854 118,76.5769231 C118,62.1603327 115.678843,49.3016297 111.046669,37.9886125 C106.453069,26.7698049 99.6241767,17.9802976 90.5435117,11.5767831 C81.5017862,5.20072813 70.1375399,2 56.3957597,2 C49.4158116,2 42.68229,3.15952329 36.1849549,5.47966815 C29.7045526,7.79376647 23.8782903,11.1932931 18.6948526,15.6846002 C13.5316746,20.1583529 9.45923583,25.508367 6.46782377,31.7491046 C3.4928156,37.95562 2,45.0644366 2,53.0961538 C2,61.9117395 4.02797967,69.7019439 8.0788911,76.5056791 C12.1434539,83.3323424 17.5832537,88.6925139 24.4218542,92.6108203 C31.2518358,96.5241882 38.8590885,98.4807692 47.2791519,98.4807692 C55.0853554,98.4807692 61.6095996,97.3619306 66.8547126,95.1478231 C72.0569983,92.9517941 76.4513169,89.5970183 80.0605818,85.0622151 L84.0584687,80.039134 L83.6207883,86.4440446 C82.74746,99.2241219 80.0984349,108.438199 75.5533003,114.10687 C70.9310132,119.871766 64.7726909,122.788462 57.2438163,122.788462 C52.8691399,122.788462 49.1904302,122.100251 46.212535,120.692834 C43.5930338,119.454801 41.5307848,117.825945 40.0597376,115.807692 Z M57.5,31 C63.3657106,31 68.4419893,32.9364861 72.6299874,36.7826253 C76.8609583,40.6682294 79,45.6186068 79,51.5 C79,57.3813932 76.8609583,62.3317706 72.6299874,66.2173747 C68.4419893,70.0635139 63.3657106,72 57.5,72 C51.6342894,72 46.5580107,70.0635139 42.3700126,66.2173747 C38.1390417,62.3317706 36,57.3813932 36,51.5 C36,45.6186068 38.1390417,40.6682294 42.3700126,36.7826253 C46.5580107,32.9364861 51.6342894,31 57.5,31 Z" stroke-linejoin="square"></path></svg>
                    <img src=${Trending9} alt="" height="200px">
                </div>
                <div class="trending4">
                    <svg id="rank-10" width="100px" height="200px" viewBox="0 0 140 154" class="svg-icon svg-icon-rank-10 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M34.757 151.55h35.869V2.976L2 19.687v30.14l32.757-8.41v110.132zm105.53 3.45c12.394 0 23.097-3.12 32.163-9.353 9.093-6.25 16.11-15.047 21.066-26.43C198.5 107.766 201 94.196 201 78.5c0-15.698-2.5-29.266-7.484-40.716-4.955-11.384-11.973-20.18-21.066-26.431C163.384 5.119 152.681 2 140.287 2c-12.393 0-23.096 3.12-32.162 9.353-9.093 6.25-16.11 15.047-21.066 26.43-4.984 11.45-7.484 25.02-7.484 40.717 0 15.698 2.5 29.266 7.484 40.716 4.955 11.384 11.973 20.18 21.066 26.431 9.066 6.234 19.769 9.353 32.162 9.353zm0-31.368c-7.827 0-13.942-4.147-18.15-12.178-4.053-7.736-6.047-18.713-6.047-32.954s1.994-25.218 6.047-32.954c4.208-8.03 10.323-12.178 18.15-12.178 7.827 0 13.943 4.147 18.15 12.178 4.053 7.736 6.048 18.713 6.048 32.954s-1.995 25.218-6.047 32.954c-4.208 8.03-10.324 12.178-18.15 12.178z"></path></svg>
                    <img src=${Trending10} alt="" height="200px">
                </div>
            </div>`
      }

    }
  })
}
// await fetchtrending();
async function gettrending() {
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
    const posterPaths = data.results.slice(0, 10).map(movie => movie.poster_path);
    // console.log('https://image.tmdb.org/t/p/w500'+posterPaths[9]);
    trending.innerHTML = ` <div class="trending1">
    <svg id="rank-1" width="100px" height="200px" viewBox="-20 0 70 154" class="svg-icon svg-icon-rank-1 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[0]} alt="" height="200px">
</div>
<div class="trending2">
    <svg id="rank-2" width="100px" height="200px" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-2 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[1]} alt="" height="200px">
</div>
<div class="trending3">
    <svg id="rank-3" width="100px" height="200px" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-3 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[2]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-4" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-4 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[3]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-5" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-5 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[4]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-6" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-6 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[5]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-7" viewBox="0 0 78 154" width="100px" height="200px" class="svg-icon svg-icon-rank-7 top-10-rank"><path stroke="#595959" stroke-width="4" d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z" stroke-linejoin="square"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[6]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-8" width="100px" height="200px" viewBox="0 0 77 154" class="svg-icon svg-icon-rank-8 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M59.5 152c11.335 0 21.358-1.72 30.077-5.15 8.637-3.397 15.361-8.258 20.213-14.586 4.805-6.267 7.21-13.876 7.21-22.899 0-7.326-2.261-14.07-6.813-20.29-4.548-6.214-10.837-10.658-18.922-13.35l-5.4-1.799 5.338-1.975c7.238-2.678 12.572-6.683 16.066-12.018 3.53-5.388 5.284-11.178 5.284-17.414 0-7.912-2.133-14.839-6.405-20.84-4.3-6.042-10.403-10.825-18.345-14.351C79.816 3.78 70.386 2 59.5 2S39.184 3.781 31.197 7.328c-7.942 3.526-14.044 8.309-18.345 14.351-4.272 6.001-6.405 12.928-6.405 20.84 0 6.236 1.755 12.026 5.284 17.414 3.494 5.335 8.828 9.34 16.066 12.018l5.338 1.975-5.4 1.798c-8.085 2.693-14.374 7.137-18.922 13.351C4.261 95.295 2 102.04 2 109.365c0 9.023 2.405 16.632 7.21 22.899 4.852 6.328 11.576 11.19 20.213 14.586 8.72 3.43 18.742 5.15 30.077 5.15zm.5-89c-5.6 0-10.334-1.515-14.125-4.56C41.985 55.313 40 51.183 40 46.21c0-5.244 1.976-9.518 5.875-12.65C49.666 30.515 54.4 29 60 29s10.334 1.515 14.125 4.56C78.025 36.694 80 40.968 80 46.212c0 4.973-1.985 9.103-5.875 12.228C70.334 61.485 65.6 63 60 63zm-.5 62c-6.255 0-11.556-1.613-15.836-4.856-4.41-3.343-6.664-7.816-6.664-13.25 0-5.298 2.258-9.698 6.664-13.038C47.944 90.613 53.245 89 59.5 89c6.255 0 11.556 1.613 15.836 4.856 4.406 3.34 6.664 7.74 6.664 13.038 0 5.434-2.254 9.907-6.664 13.25C71.056 123.387 65.755 125 59.5 125z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[7]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-9" viewBox="0 0 71 154" width="100px" height="200px" class="svg-icon svg-icon-rank-9 top-10-rank"><path stroke="#595959" stroke-width="4" d="M40.0597376,115.807692 L4.47328474,115.807692 C7.45109332,126.586242 13.4362856,135.15497 22.4670906,141.582071 C32.2129251,148.518048 44.5640134,152 59.5759717,152 C78.2141671,152 92.5105725,145.697944 102.6454,133.074799 C112.853557,120.360322 118,101.543854 118,76.5769231 C118,62.1603327 115.678843,49.3016297 111.046669,37.9886125 C106.453069,26.7698049 99.6241767,17.9802976 90.5435117,11.5767831 C81.5017862,5.20072813 70.1375399,2 56.3957597,2 C49.4158116,2 42.68229,3.15952329 36.1849549,5.47966815 C29.7045526,7.79376647 23.8782903,11.1932931 18.6948526,15.6846002 C13.5316746,20.1583529 9.45923583,25.508367 6.46782377,31.7491046 C3.4928156,37.95562 2,45.0644366 2,53.0961538 C2,61.9117395 4.02797967,69.7019439 8.0788911,76.5056791 C12.1434539,83.3323424 17.5832537,88.6925139 24.4218542,92.6108203 C31.2518358,96.5241882 38.8590885,98.4807692 47.2791519,98.4807692 C55.0853554,98.4807692 61.6095996,97.3619306 66.8547126,95.1478231 C72.0569983,92.9517941 76.4513169,89.5970183 80.0605818,85.0622151 L84.0584687,80.039134 L83.6207883,86.4440446 C82.74746,99.2241219 80.0984349,108.438199 75.5533003,114.10687 C70.9310132,119.871766 64.7726909,122.788462 57.2438163,122.788462 C52.8691399,122.788462 49.1904302,122.100251 46.212535,120.692834 C43.5930338,119.454801 41.5307848,117.825945 40.0597376,115.807692 Z M57.5,31 C63.3657106,31 68.4419893,32.9364861 72.6299874,36.7826253 C76.8609583,40.6682294 79,45.6186068 79,51.5 C79,57.3813932 76.8609583,62.3317706 72.6299874,66.2173747 C68.4419893,70.0635139 63.3657106,72 57.5,72 C51.6342894,72 46.5580107,70.0635139 42.3700126,66.2173747 C38.1390417,62.3317706 36,57.3813932 36,51.5 C36,45.6186068 38.1390417,40.6682294 42.3700126,36.7826253 C46.5580107,32.9364861 51.6342894,31 57.5,31 Z" stroke-linejoin="square"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[8]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-10" width="100px" height="200px" viewBox="0 0 140 154" class="svg-icon svg-icon-rank-10 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M34.757 151.55h35.869V2.976L2 19.687v30.14l32.757-8.41v110.132zm105.53 3.45c12.394 0 23.097-3.12 32.163-9.353 9.093-6.25 16.11-15.047 21.066-26.43C198.5 107.766 201 94.196 201 78.5c0-15.698-2.5-29.266-7.484-40.716-4.955-11.384-11.973-20.18-21.066-26.431C163.384 5.119 152.681 2 140.287 2c-12.393 0-23.096 3.12-32.162 9.353-9.093 6.25-16.11 15.047-21.066 26.43-4.984 11.45-7.484 25.02-7.484 40.717 0 15.698 2.5 29.266 7.484 40.716 4.955 11.384 11.973 20.18 21.066 26.431 9.066 6.234 19.769 9.353 32.162 9.353zm0-31.368c-7.827 0-13.942-4.147-18.15-12.178-4.053-7.736-6.047-18.713-6.047-32.954s1.994-25.218 6.047-32.954c4.208-8.03 10.323-12.178 18.15-12.178 7.827 0 13.943 4.147 18.15 12.178 4.053 7.736 6.048 18.713 6.048 32.954s-1.995 25.218-6.047 32.954c-4.208 8.03-10.324 12.178-18.15 12.178z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[9]} alt="" height="200px">
</div>
</div>`
  } catch (err) {
    console.error(err);
  }
}
await gettrending();
let trendingartist = document.querySelector('.trendingartistsection')
async function gettrendingartist() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 10).map(movie => movie.profile_path);
    // console.log(posterPaths[8]);
    trendingartist.innerHTML = ` <div class="trending1">
    <svg id="rank-1" width="100px" height="200px" viewBox="-20 0 70 154" class="svg-icon svg-icon-rank-1 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[0]} alt="" height="200px">
</div>
<div class="trending2">
    <svg id="rank-2" width="100px" height="200px" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-2 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[1]} alt="" height="200px">
</div>
<div class="trending3">
    <svg id="rank-3" width="100px" height="200px" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-3 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[2]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-4" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-4 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[3]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-5" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-5 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[4]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-6" width="100px" height="200px" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-6 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[5]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-7" viewBox="0 0 78 154" width="100px" height="200px" class="svg-icon svg-icon-rank-7 top-10-rank"><path stroke="#595959" stroke-width="4" d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z" stroke-linejoin="square"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[6]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-8" width="100px" height="200px" viewBox="0 0 77 154" class="svg-icon svg-icon-rank-8 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M59.5 152c11.335 0 21.358-1.72 30.077-5.15 8.637-3.397 15.361-8.258 20.213-14.586 4.805-6.267 7.21-13.876 7.21-22.899 0-7.326-2.261-14.07-6.813-20.29-4.548-6.214-10.837-10.658-18.922-13.35l-5.4-1.799 5.338-1.975c7.238-2.678 12.572-6.683 16.066-12.018 3.53-5.388 5.284-11.178 5.284-17.414 0-7.912-2.133-14.839-6.405-20.84-4.3-6.042-10.403-10.825-18.345-14.351C79.816 3.78 70.386 2 59.5 2S39.184 3.781 31.197 7.328c-7.942 3.526-14.044 8.309-18.345 14.351-4.272 6.001-6.405 12.928-6.405 20.84 0 6.236 1.755 12.026 5.284 17.414 3.494 5.335 8.828 9.34 16.066 12.018l5.338 1.975-5.4 1.798c-8.085 2.693-14.374 7.137-18.922 13.351C4.261 95.295 2 102.04 2 109.365c0 9.023 2.405 16.632 7.21 22.899 4.852 6.328 11.576 11.19 20.213 14.586 8.72 3.43 18.742 5.15 30.077 5.15zm.5-89c-5.6 0-10.334-1.515-14.125-4.56C41.985 55.313 40 51.183 40 46.21c0-5.244 1.976-9.518 5.875-12.65C49.666 30.515 54.4 29 60 29s10.334 1.515 14.125 4.56C78.025 36.694 80 40.968 80 46.212c0 4.973-1.985 9.103-5.875 12.228C70.334 61.485 65.6 63 60 63zm-.5 62c-6.255 0-11.556-1.613-15.836-4.856-4.41-3.343-6.664-7.816-6.664-13.25 0-5.298 2.258-9.698 6.664-13.038C47.944 90.613 53.245 89 59.5 89c6.255 0 11.556 1.613 15.836 4.856 4.406 3.34 6.664 7.74 6.664 13.038 0 5.434-2.254 9.907-6.664 13.25C71.056 123.387 65.755 125 59.5 125z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[7]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-9" viewBox="0 0 71 154" width="100px" height="200px" class="svg-icon svg-icon-rank-9 top-10-rank"><path stroke="#595959" stroke-width="4" d="M40.0597376,115.807692 L4.47328474,115.807692 C7.45109332,126.586242 13.4362856,135.15497 22.4670906,141.582071 C32.2129251,148.518048 44.5640134,152 59.5759717,152 C78.2141671,152 92.5105725,145.697944 102.6454,133.074799 C112.853557,120.360322 118,101.543854 118,76.5769231 C118,62.1603327 115.678843,49.3016297 111.046669,37.9886125 C106.453069,26.7698049 99.6241767,17.9802976 90.5435117,11.5767831 C81.5017862,5.20072813 70.1375399,2 56.3957597,2 C49.4158116,2 42.68229,3.15952329 36.1849549,5.47966815 C29.7045526,7.79376647 23.8782903,11.1932931 18.6948526,15.6846002 C13.5316746,20.1583529 9.45923583,25.508367 6.46782377,31.7491046 C3.4928156,37.95562 2,45.0644366 2,53.0961538 C2,61.9117395 4.02797967,69.7019439 8.0788911,76.5056791 C12.1434539,83.3323424 17.5832537,88.6925139 24.4218542,92.6108203 C31.2518358,96.5241882 38.8590885,98.4807692 47.2791519,98.4807692 C55.0853554,98.4807692 61.6095996,97.3619306 66.8547126,95.1478231 C72.0569983,92.9517941 76.4513169,89.5970183 80.0605818,85.0622151 L84.0584687,80.039134 L83.6207883,86.4440446 C82.74746,99.2241219 80.0984349,108.438199 75.5533003,114.10687 C70.9310132,119.871766 64.7726909,122.788462 57.2438163,122.788462 C52.8691399,122.788462 49.1904302,122.100251 46.212535,120.692834 C43.5930338,119.454801 41.5307848,117.825945 40.0597376,115.807692 Z M57.5,31 C63.3657106,31 68.4419893,32.9364861 72.6299874,36.7826253 C76.8609583,40.6682294 79,45.6186068 79,51.5 C79,57.3813932 76.8609583,62.3317706 72.6299874,66.2173747 C68.4419893,70.0635139 63.3657106,72 57.5,72 C51.6342894,72 46.5580107,70.0635139 42.3700126,66.2173747 C38.1390417,62.3317706 36,57.3813932 36,51.5 C36,45.6186068 38.1390417,40.6682294 42.3700126,36.7826253 C46.5580107,32.9364861 51.6342894,31 57.5,31 Z" stroke-linejoin="square"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[8]} alt="" height="200px">
</div>
<div class="trending4">
    <svg id="rank-10" width="100px" height="200px" viewBox="0 0 140 154" class="svg-icon svg-icon-rank-10 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M34.757 151.55h35.869V2.976L2 19.687v30.14l32.757-8.41v110.132zm105.53 3.45c12.394 0 23.097-3.12 32.163-9.353 9.093-6.25 16.11-15.047 21.066-26.43C198.5 107.766 201 94.196 201 78.5c0-15.698-2.5-29.266-7.484-40.716-4.955-11.384-11.973-20.18-21.066-26.431C163.384 5.119 152.681 2 140.287 2c-12.393 0-23.096 3.12-32.162 9.353-9.093 6.25-16.11 15.047-21.066 26.43-4.984 11.45-7.484 25.02-7.484 40.717 0 15.698 2.5 29.266 7.484 40.716 4.955 11.384 11.973 20.18 21.066 26.431 9.066 6.234 19.769 9.353 32.162 9.353zm0-31.368c-7.827 0-13.942-4.147-18.15-12.178-4.053-7.736-6.047-18.713-6.047-32.954s1.994-25.218 6.047-32.954c4.208-8.03 10.323-12.178 18.15-12.178 7.827 0 13.943 4.147 18.15 12.178 4.053 7.736 6.048 18.713 6.048 32.954s-1.995 25.218-6.047 32.954c-4.208 8.03-10.324 12.178-18.15 12.178z"></path></svg>
    <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[9]} alt="" height="200px">
</div>
</div>`
  } catch (err) {
    console.error(err);
  }
}
await gettrendingartist();
var upcoming = document.querySelector('.upcomingsection')
async function getupcoming() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);
    const idPaths = data.results.slice(0, 20).map(movie => movie.id);
    // console.log(idPaths);

    for (let i = 0; i < posterPaths.length; i++) {
      upcoming.innerHTML += `<div class="image${i}">
      <img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[i]} alt="Upcoming">
      </div>`;
    }

    for (let i = 0; i < posterPaths.length; i++) {
      let imageElement = document.querySelector(`.image${i}`);
      if (imageElement) {
        imageElement.addEventListener('click', function() {
          localStorage.setItem('id', idPaths[i]);
          localStorage.setItem('poster', posterPaths[i]);
          window.location.href="tvshow.html"
        });
      } else {
        console.error(`Element with class .image${i} not found.`);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
getupcoming();
document.addEventListener('DOMContentLoaded', function() {
  
});
var topmovies = document.querySelector('.topmoviessection')
async function gettopmovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);
    const idPaths = data.results.slice(0, 20).map(movie => movie.id);
    // console.log(posterPaths);
    for (let i = 0; i < posterPaths.length; i++) {
      topmovies.innerHTML += `<img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[i]} alt="Upcoming">`
    }
  } catch (err) {
    console.error(err);
  }
}
await gettopmovies();
var airing = document.querySelector('.airingsection')
async function getairingtoday() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=5&timezone=GMT%2B5%3A30', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);
    // console.log(posterPaths);
    for (let i = 0; i < posterPaths.length; i++) {
      airing.innerHTML += `<img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[i]} alt="Upcoming">`
    }
    for (let i = 0; i < posterPaths.length; i++) {
      let imageElement = document.querySelector(`.image${i}`);
      if (imageElement) {
        imageElement.addEventListener('click', function() {
          localStorage.setItem('id', idPaths[i]);
          localStorage.setItem('poster', posterPaths[i]);
          window.location.href="tvshow.html"
        });
      } else {
        console.error(`Element with class .image${i} not found.`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
await getairingtoday();
let image1 = document.querySelector('.img1');
let image2 = document.querySelector('.img2');
let image3 = document.querySelector('.img3');
let image4 = document.querySelector('.img4');
let image5 = document.querySelector('.img5');
let image6 = document.querySelector('.img6');
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
let video = document.querySelector('#myVideo');
let mutebutton = document.querySelector('.mutebutton');

var international = document.querySelector('#international_hover')
var inthover = document.querySelector('.inthover')
international.addEventListener('mouseover', function () {
  console.log('hovered')
  inthover.innerHTML += `<a href="#international" style="text-decoration: none;color: grey;font-size: 15px;font-weight: 600; padding-left: 20px;">Explore More</a>`
})
international.addEventListener('mouseout', function () {
  console.log('out')
  inthover.innerHTML = `<a href="#international" style="text-decoration: none;color: white;" id="international_hover">International TV Shows</a>`
})

// run()
var searchicon=document.querySelector('.searchicon')
searchicon.addEventListener('click',function(){
  window.location.href="search.html"
})
function navigateToPage() {
  var select = document.getElementById('cat');
  var selectedValue = select.value;

  // Debugging: log the selected value to the console
  // console.log('Selected value:', selectedValue);

  var url;
  switch (selectedValue) {
      case 'TV':
          url = 'tvshows.html'; // URL for TV Shows
          break;
      case 'Movies':
        url = 'categories.html'; // URL for Movies
          break;
      case 'New':
        url = 'tvshows.html'; // URL for New & Popular
          break;
      case 'Language':
        url = 'tvshows.html'; // URL for Browse By languages
          break;
      default:
          url = '#'; // Default URL (optional)
          break;
  }

  // Debugging: log the URL to the console
  // console.log('Navigating to:', url);

  // Perform the navigation
  window.location.href = url;
}

// Attach the event listener to the select element
document.getElementById('cat').addEventListener('change', navigateToPage);
