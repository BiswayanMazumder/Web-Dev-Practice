import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
const db = getFirestore(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
// console.log("Login Page reached")
let googlebutton = document.getElementById("GoogleLogin");
let emailaddress = document.getElementById("emailaddress");
let passwords = document.getElementById("Password");
function getuser() {
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
googlebutton.addEventListener("click", function () {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(async (result) => {
      // Get the Google Access Token and user info
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.replace('loggedinpage.html')
    })
    .catch((error) => {
      // Handle Errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorMessage);
    });
});
let facebookbutton = document.getElementById("FacebookLogin");
facebookbutton.addEventListener("click", function () {
  alert("Facebook Login Started")
})
let applebutton = document.getElementById("AppleLogin");
applebutton.addEventListener("click", function () {
  alert("Apple Login Started")
})
let phonebutton = document.getElementById("PhoneLogin");
// phonebutton.addEventListener("click",function(){
//     // alert("Phone Login Started")
//     window.location.href="phonelogin.html"
// })
let loginbutton = document.getElementById("EmailLogin");
let Buttons = document.querySelector('.Buttons')
loginbutton.addEventListener("click", function (event) {
  event.preventDefault();
  // alert("Email Login Started")
  const auth = getAuth();
  const email = emailaddress.value;
  const password = passwords.value;
  const originalContent = `<button class="loginbuttons" id="EmailLogin" style="color: black; background-color: #1DB954;border: #1DB954;">Login</button>`;
  // console.log(passwords.value)
  if (email == "" && password == "") {

    Buttons.innerHTML = `<div class="errors" style="color: red;position: relative;text-align: center;">Please enter credentials</div>`
    setTimeout(() => {
      Buttons.innerHTML = originalContent;
    }, 5000);

  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // alert('Creating User')
        window.location.replace("loggedinpage.html")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage)
        Buttons.innerHTML = `<div class="errors" style="color: red;position: relative;text-align: center;">Please enter correct credentials</div>`
        setTimeout(() => {
          Buttons.innerHTML = originalContent;
        }, 5000);
      });
  }
})
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
