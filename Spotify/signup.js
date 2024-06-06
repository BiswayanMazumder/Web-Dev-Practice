import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAy0-j5ZJJl6VST50_Y2JV_0MJKqhc3-7w",
    authDomain: "grovito-admin.firebaseapp.com",
    projectId: "grovito-admin",
    storageBucket: "grovito-admin.appspot.com",
    messagingSenderId: "914981071784",
    appId: "1:914981071784:web:6312a727ac7602b2c78b9d",
    measurementId: "G-G4DXEDMJT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
// console.log("Login Page reached")
let googlebutton = document.getElementById("GoogleLogin");
let emailaddress = document.getElementById("emailaddress");
let passwords = document.getElementById("Password");
function getuser(){
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // isloggedin=true;
        console.log('signed in')
        window.location.replace("loggedinpage.html")
        // ...
      } else {
        // User is signed out
        // ...
        console.log('signed out')
      }
    });
  }
  getuser()
googlebutton.addEventListener("click",function(){
  // alert("Google Login Started")
  const auth = getAuth();
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  window.location.href="loggedinpage.html"
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  console.log(errorMessage)
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});
})
let facebookbutton = document.getElementById("FacebookLogin");
facebookbutton.addEventListener("click", function () {
    alert("Facebook Login Started")
})
let applebutton = document.getElementById("AppleLogin");
applebutton.addEventListener("click", function () {
    alert("Apple Login Started")
})
let phonebutton = document.getElementById("PhoneLogin");
// phonebutton.addEventListener("click", function () {
//     alert("Phone Login Started")
// })
let loginbutton = document.getElementById("EmailLogin");
let username=document.querySelector('#username')
loginbutton.addEventListener("click", function (event) {
  event.preventDefault();
  const auth = getAuth();
  
  if (username.value !== "" && emailaddress.value !== "" && passwords.value !== "") {
      const email = emailaddress.value;
      const password = passwords.value;
      
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem('username',username.value);
          localStorage.setItem('email',email);
          localStorage.setItem('password',passwords.value);
          window.location.replace("loggedinpage.html")
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user: ", errorCode, errorMessage);
      });
  } else {
      alert("Please fill all the fields");
  }
});

// let githubbutton=document.getElementById("GithubLogin");
// githubbutton.addEventListener("click",function(){
//     alert("Github Login Started")
// })


// let prom1= new Promise((resolve,reject)=>{
//     let number=Math.random()
//     console.log(number)
//     if(number>0.5){
//         resolve(alert("Resolved"))
//     }else{
//         reject(alert("Rejected"));
//     }
// })
// prom1.then(
//     console.log("Success")
// ).catch((err)=>{
//     console.log(err)
// })