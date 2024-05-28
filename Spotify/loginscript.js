import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
const provider = new GoogleAuthProvider();
console.log("Login Page reached")
let googlebutton=document.getElementById("GoogleLogin");
let emailaddress=document.getElementById("emailaddress");
let passwords=document.getElementById("Password");
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
let facebookbutton=document.getElementById("FacebookLogin");
facebookbutton.addEventListener("click",function(){
    alert("Facebook Login Started")
})
let applebutton=document.getElementById("AppleLogin");
applebutton.addEventListener("click",function(){
    alert("Apple Login Started")
})
let phonebutton=document.getElementById("PhoneLogin");
phonebutton.addEventListener("click",function(){
    alert("Phone Login Started")
})
let loginbutton=document.getElementById("EmailLogin");
loginbutton.addEventListener("click",function(event){
    event.preventDefault();
    // alert("Email Login Started")
    const auth = getAuth();
    const email = emailaddress.value;
    const password=passwords.value;
    // console.log(passwords.value)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // alert('Creating User')
    window.location.href="loggedinpage.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorMessage)
  });
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
