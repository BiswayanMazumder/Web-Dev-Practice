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
      window.location.replace("index.html")
    }
  });
}
getuser()

// Select the elements
let homepagevideo = document.querySelector('.headingimg');
let mutebutton = document.querySelector('.mutebutton');
let mutesvg = document.querySelector('.svg')
let likebutton = document.querySelector('.likebutton');
let likesvg = document.querySelector('.likesvg');

// Set initial mute state
let is_muted = true;

try {
  // Set up the video element with autoplay and muted attributes
  homepagevideo.innerHTML = `<video src="https://firebasestorage.googleapis.com/v0/b/netflix-5002f.appspot.com/o/Home%20Screen%20Videos%2Fvideoplayback%20(1).mp4?alt=media&token=5e6c0c40-dbde-4d00-bb86-f23672105edd" width="100%" id="myVideo" autoplay muted ></video>`;

  // Get reference to the video element
  let video = document.querySelector('#myVideo');

  // Listen for the end of the video
  video.addEventListener('ended', function () {
    homepagevideo.innerHTML = `<img src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX7JIM6pl5HGOFeEaRYAib9CVkYcF2wkbRy7TLBCQMRGwB-29CVEsgC6Von3BRmvYZpGvyyXnMclZV-wEFYzomV5J0XrxhSJwe3XmV8fhKv_sYAOFqoPROWQTk9DaaKr6rqYXqMo6J8pDWlXA9wrYEP71WvaPkqD67n9E0RneqEMP8I8uqk94ypvbHdIknG6X5K1u5NaZrmmalLpjiArnRqzmMqHhskJb7b8o9F1XLUDoUl4NhKowHyfrzJQeC9nFT_K34-91uNSHOocCXVv0Y5PTmZGqbyF53CjVVzoImxmdm4MKB7xbswZ6_HxxlucjkL5BztyHp0JGq-1IsSlfw0.webp?r=aa5" alt="" width="100%">`;
  });

  // Event listener for mute button click
  mutebutton.addEventListener('click', function () {
    // Toggle mute state
    is_muted = !is_muted;

    // Set muted attribute of the video based on is_muted
    video.muted = is_muted;

    // Log status (optional)
    if (is_muted) {
      mutesvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="VolumeOffStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="white"></path></svg>`
    } else {
      mutesvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="VolumeHighStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z" fill="white"></path></svg>`
    }

  });

} catch (error) {
  console.log(error);
}
var is_liked = false;
async function fetchlikedetails() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    const uid = user.uid;
    const userDocRef = doc(db, "Bade Miyaan Chote Miyaan Likes", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      is_liked = docSnap.data().liked;
      console.log(is_liked);
      if (is_liked) {
        likebutton.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ThumbsUpTwoFillStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.313 2.50407L17.407 3.25579C17.4688 3.75001 17.4688 4.24999 17.407 4.74421L17.125 7H21.5C22.3284 7 23 7.67157 23 8.5C23 9.02174 22.7336 9.48127 22.3295 9.75H22.5C23.3284 9.75 24 10.4216 24 11.25C24 11.9804 23.478 12.5888 22.7867 12.7226C23.2148 12.9868 23.5 13.4601 23.5 14C23.5 14.8284 22.8284 15.5 22 15.5H21.6181C21.8556 15.7654 22 16.1158 22 16.5C22 17.3284 21.3284 18 20.5 18H20H17.9195C17.9722 17.7585 18 17.5075 18 17.25C18 16.2903 17.6138 15.4209 16.9883 14.7886C16.996 14.6934 17 14.5972 17 14.5C17 12.567 15.433 11 13.5 11H11.3906L11.3915 10.9923C11.4739 10.3333 11.4739 9.66668 11.3915 9.00772L11.2976 8.256L10.0645 8.41013L11.2976 8.256C11.2865 8.16745 11.2731 8.0797 11.2574 7.99281C11.519 7.83232 11.7422 7.61247 11.9074 7.34813L13.848 4.2432C13.9473 4.08427 14 3.90062 14 3.7132V0.47644C14 0.21331 14.2133 0 14.4764 0C15.9181 0 17.1342 1.07353 17.313 2.50407ZM9.31301 8.50407L9.40697 9.25579C9.46875 9.75001 9.46875 10.25 9.40697 10.7442L9.125 13H13.5C14.3284 13 15 13.6716 15 14.5C15 15.0217 14.7336 15.4813 14.3294 15.75H14.5C15.3284 15.75 16 16.4216 16 17.25C16 17.9804 15.478 18.5888 14.7867 18.7226C15.2147 18.9868 15.5 19.4601 15.5 20C15.5 20.8284 14.8284 21.5 14 21.5H13.6181C13.8556 21.7654 14 22.1158 14 22.5C14 23.3284 13.3284 24 12.5 24H12H9H8.01556C6.69475 24 5.39679 23.6553 4.25 23L4.07684 22.9011C3.04352 22.3106 1.874 22 0.683874 22C0.306181 22 0 21.6938 0 21.3161V15.7543C0 15.3078 0.295977 14.9154 0.725279 14.7928L2.76086 14.2112C3.23665 14.0752 3.64516 13.7677 3.90742 13.3481L5.848 10.2432C5.94733 10.0843 6 9.90062 6 9.7132V6.47644C6 6.21331 6.21331 6 6.47644 6C7.91812 6 9.13419 7.07353 9.31301 8.50407Z" fill="white"></path></svg>`
      }
      else {
        likebutton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ThumbsUpStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="white"></path></svg>`
      }
    }
  });
}
await fetchlikedetails();
likebutton.addEventListener("click", async function () {
  console.log('clicked')
  //   await fetchlikedetails();
  is_liked = !is_liked;
  if (is_liked) {
    likebutton.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ThumbsUpTwoFillStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.313 2.50407L17.407 3.25579C17.4688 3.75001 17.4688 4.24999 17.407 4.74421L17.125 7H21.5C22.3284 7 23 7.67157 23 8.5C23 9.02174 22.7336 9.48127 22.3295 9.75H22.5C23.3284 9.75 24 10.4216 24 11.25C24 11.9804 23.478 12.5888 22.7867 12.7226C23.2148 12.9868 23.5 13.4601 23.5 14C23.5 14.8284 22.8284 15.5 22 15.5H21.6181C21.8556 15.7654 22 16.1158 22 16.5C22 17.3284 21.3284 18 20.5 18H20H17.9195C17.9722 17.7585 18 17.5075 18 17.25C18 16.2903 17.6138 15.4209 16.9883 14.7886C16.996 14.6934 17 14.5972 17 14.5C17 12.567 15.433 11 13.5 11H11.3906L11.3915 10.9923C11.4739 10.3333 11.4739 9.66668 11.3915 9.00772L11.2976 8.256L10.0645 8.41013L11.2976 8.256C11.2865 8.16745 11.2731 8.0797 11.2574 7.99281C11.519 7.83232 11.7422 7.61247 11.9074 7.34813L13.848 4.2432C13.9473 4.08427 14 3.90062 14 3.7132V0.47644C14 0.21331 14.2133 0 14.4764 0C15.9181 0 17.1342 1.07353 17.313 2.50407ZM9.31301 8.50407L9.40697 9.25579C9.46875 9.75001 9.46875 10.25 9.40697 10.7442L9.125 13H13.5C14.3284 13 15 13.6716 15 14.5C15 15.0217 14.7336 15.4813 14.3294 15.75H14.5C15.3284 15.75 16 16.4216 16 17.25C16 17.9804 15.478 18.5888 14.7867 18.7226C15.2147 18.9868 15.5 19.4601 15.5 20C15.5 20.8284 14.8284 21.5 14 21.5H13.6181C13.8556 21.7654 14 22.1158 14 22.5C14 23.3284 13.3284 24 12.5 24H12H9H8.01556C6.69475 24 5.39679 23.6553 4.25 23L4.07684 22.9011C3.04352 22.3106 1.874 22 0.683874 22C0.306181 22 0 21.6938 0 21.3161V15.7543C0 15.3078 0.295977 14.9154 0.725279 14.7928L2.76086 14.2112C3.23665 14.0752 3.64516 13.7677 3.90742 13.3481L5.848 10.2432C5.94733 10.0843 6 9.90062 6 9.7132V6.47644C6 6.21331 6.21331 6 6.47644 6C7.91812 6 9.13419 7.07353 9.31301 8.50407Z" fill="white"></path></svg>`
  }
  else {
    likebutton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ThumbsUpStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="white"></path></svg>`
  }
  const auth = getAuth();
  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        // console.log(uid);
        try {
          // Create a reference to the document with the user's UID
          await setDoc(doc(db, "Bade Miyaan Chote Miyaan Likes", uid), {
            'liked': is_liked,
            'UID': uid,
          });
          // console.log("Document written with ID: ", uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      } else {
        console.error("No user is signed in");
      }
    });
  } catch (e) {
    console.error("Error with auth state change: ", e);
  }
})
let sharebutton=document.querySelector('.sharesvg')
sharebutton.addEventListener('click', () =>{
  let link=document.URL
  try {
    navigator.clipboard.writeText(link)
    sharebutton.innerHTML=`Copied!`
    setInterval(() => {
      sharebutton.innerHTML=`<svg class="fbl-icon _30dE3d _1a_Ljt" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><title>Share Android</title><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.423 2.041 C 16.823 2.136,16.237 2.369,15.725 2.716 C 14.735 3.389,14.086 4.536,14.013 5.743 L 13.989 6.145 11.344 7.588 C 9.182 8.768,8.688 9.022,8.636 8.985 C 8.600 8.960,8.483 8.873,8.376 8.791 C 8.098 8.579,7.556 8.306,7.175 8.186 C 5.790 7.752,4.219 8.136,3.197 9.157 C 2.770 9.585,2.518 9.962,2.302 10.500 C 2.075 11.062,2.020 11.355,2.020 12.000 C 2.020 12.645,2.075 12.938,2.302 13.500 C 2.775 14.677,3.750 15.535,4.995 15.871 C 5.330 15.962,5.460 15.975,6.000 15.977 C 6.564 15.978,6.656 15.968,7.020 15.864 C 7.598 15.699,8.163 15.407,8.551 15.074 L 8.682 14.961 11.335 16.288 L 13.989 17.614 14.012 18.137 C 14.051 19.039,14.337 19.818,14.876 20.488 C 16.372 22.351,19.110 22.511,20.806 20.836 C 21.761 19.893,22.182 18.525,21.917 17.227 C 21.755 16.431,21.399 15.760,20.841 15.197 C 20.485 14.837,20.163 14.613,19.663 14.376 C 19.100 14.110,18.697 14.024,18.000 14.024 C 17.270 14.024,16.885 14.111,16.255 14.419 C 15.639 14.720,15.229 15.055,14.771 15.634 L 14.696 15.728 12.246 14.503 C 10.230 13.495,9.799 13.265,9.817 13.209 C 9.940 12.809,9.976 12.533,9.977 12.000 C 9.978 11.520,9.962 11.359,9.886 11.067 C 9.835 10.872,9.799 10.709,9.807 10.703 C 9.814 10.697,10.894 10.106,12.208 9.391 L 14.595 8.090 14.731 8.295 C 15.165 8.948,15.952 9.535,16.746 9.797 C 18.744 10.456,20.945 9.428,21.712 7.477 C 21.928 6.927,21.980 6.637,21.979 5.980 C 21.979 5.439,21.968 5.341,21.864 4.980 C 21.651 4.243,21.340 3.700,20.841 3.197 C 20.113 2.462,19.179 2.055,18.140 2.020 C 17.876 2.011,17.554 2.021,17.423 2.041 M18.383 4.043 C 19.185 4.190,19.839 4.872,19.967 5.695 C 20.153 6.894,19.209 8.000,18.000 8.000 C 17.032 8.000,16.183 7.268,16.033 6.305 C 15.933 5.663,16.132 5.061,16.596 4.596 C 17.085 4.108,17.698 3.918,18.383 4.043 M6.383 10.043 C 7.185 10.190,7.839 10.872,7.967 11.695 C 8.153 12.894,7.209 14.000,6.000 14.000 C 5.032 14.000,4.183 13.268,4.033 12.305 C 3.933 11.663,4.132 11.061,4.596 10.596 C 5.085 10.108,5.698 9.918,6.383 10.043 M18.383 16.043 C 19.185 16.190,19.839 16.872,19.967 17.695 C 20.153 18.894,19.209 20.000,18.000 20.000 C 17.032 20.000,16.183 19.268,16.033 18.305 C 15.933 17.663,16.132 17.061,16.596 16.596 C 17.085 16.108,17.698 15.918,18.383 16.043 " fill="white" stroke="none" fill-rule="evenodd"></path></svg></svg>`
    }, 5000);
  } catch (error) {
    
  }
})


