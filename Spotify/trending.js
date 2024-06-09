// console.log('Welcome to logged in page')
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// import { collection, addDoc, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; 
// import { setDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAy0-j5ZJJl6VST50_Y2JV_0MJKqhc3-7w",
    authDomain: "grovito-admin.firebaseapp.com",
    projectId: "grovito-admin",
    storageBucket: "grovito-admin.appspot.com",
    messagingSenderId: "914981071784",
    appId: "1:914981071784:web:6312a727ac7602b2c78b9d",
    measurementId: "G-G4DXEDMJT8"
};
// const db = getFirestore(app);
// Initialize Firebase
var functioncalled = false;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getuser() {
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            username = user.displayName;
            const profilePicture = user.photoURL;
            console.log("Welcome Mr," + username);
            // console.log("Profile Picture URL: " + profilePicture);
            // console.log('signed in')
            
            // console.log("Today is " + dayName);
            
            try {
                if (profilePicture != null) {
                    profilepic.innerHTML = `<img src="${profilePicture}" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">`
                } else {
                    profilepic.innerHTML = '<img src="favicon.ico" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'
                }
            } catch (error) {
                console.log(error.message)
                profilepic.innerHTML = '<img src="play.png" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'
            }
            functioncalled = true;
            // ...
        } else {
            // User is signed out
            // ...
            window.location.replace("index.html")
            // console.log('signed out')
        }
    });
}
await getuser();
var issubed = false;
let premiumsubs = document.querySelector('#premiumuser')
let logout = document.querySelector('#signout')
logout.addEventListener('click', async function () {
    const auth = getAuth();

    try {
        const user = await new Promise((resolve, reject) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("No user is signed in"));
                }
            });
        });

        if (user) {
            const uid = user.uid;
            await deleteDoc(doc(db, "Session Details", uid));
        }

        // If Firestore deletion is successful, proceed with sign out
        await auth.signOut();

        // Sign-out successful.
        localStorage.removeItem('token');
        window.location.replace('index.html');
    } catch (e) {
        // Handle errors appropriately
        console.error("Error during sign out process:", e);
    }
});



const letters = '0123456789ABCDEF';
let color = '#';
let profilepic = document.querySelector('.profilepicture')
let history = document.querySelector('.historylistening')
let placetoinsert = document.querySelector('.container')
let time = '';
async function getRandomColor() {
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 18)];
    }
    return color;
}
let days = '';

async function main() {
    // await getRandomColor();
    // printToday();
    // console.log(color);
    let rightside = document.querySelector('.firstrightpart')
    let appbar = document.querySelector('.appbar')
    appbar.style.backgroundColor = color;
    rightside.style.backgroundColor = color;
}
main();





let playlistImg1 = '';
let playlistName1 = '';
let playlistImg2 = '';
let playlistName2 = '';
let playlistImg3 = '';
let playlistName3 = '';
let playlistImg4 = '';
let playlistName4 = '';
let imageslinks = ['https://i.scdn.co/image/ab67706f0000000233fab13281f6d0d067511882', 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3iW9AR-default.jpg', 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3ckHLO-default.jpg', 'https://i.scdn.co/image/ab67706f00000002754d1154dfbc2662171cb5c3', 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84f2c5413e0ce355f28e6a6540', 'https://i.scdn.co/image/ab67706f000000024783416ea0e27510ecc91c76', 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1aUtIB-default.jpg'];
let playnames = ['This is Parmish Verma', 'This is KR$NA', 'This is Shubh', 'This is Badshah', 'Sad Songs', 'Trending Punjabi Songs', 'This is Imran Khan'];
let play1 = Math.floor(Math.random() * imageslinks.length);
// console.log(play1);
let play2 = Math.floor(Math.random() * imageslinks.length);
// console.log(play2);
let play3 = Math.floor(Math.random() * imageslinks.length);
// console.log(play3);
let play4 = Math.floor(Math.random() * imageslinks.length);
// console.log(play4);
function getplaylistname1() {
    //putting playlist 1 image
    let images = document.querySelector('.secondpart')
    images.innerHTML += `<div class="playlists1">
    <img src="${imageslinks[play1]}" alt="parmish verma" height="200px" width="200px" style="border-radius: 10px;">
</div>
<br>
<div class="playname1">
    ${playnames[play1]}
</div>
<br><br>`
}
function getplaylistname2() {
    //putting playlist 1 image
    let images = document.querySelector('.secondpart')
    images.innerHTML += `<div class="playlists2">
    <img src="${imageslinks[play2]}" alt="parmish verma" height="200px" width="200px" style="border-radius: 10px;">
</div>
<br>
<div class="playname2">
    ${playnames[play2]}
</div>
<br><br>`
}
function getplaylistname3() {
    //putting playlist 1 image
    let images = document.querySelector('.secondpart')
    images.innerHTML += `<div class="playlists3">
    <img src="${imageslinks[play3]}" alt="parmish verma" height="200px" width="200px" style="border-radius: 10px;">
</div>
<br>
<div class="playname3">
    ${playnames[play3]}
</div>
<br><br>`
}
function getplaylistname4() {
    //putting playlist 1 image
    let images = document.querySelector('.secondpart')
    images.innerHTML += `<div class="playlists4">
    <img src="${imageslinks[play4]}" alt="parmish verma" height="200px" width="200px" style="border-radius: 10px;">
</div>
<br>
<div class="playname4">
    ${playnames[play4]}
    <br>
</div>
<br><br>`
}
getplaylistname1();
getplaylistname2();
getplaylistname3();
getplaylistname4();
let firstpart = document.querySelector('.firstrightpart')
var playerloaded = false;
async function premiumsuccess() {
    const auth = getAuth();
    try {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(uid);
                try {
                    // Create a reference to the document with the user's UID
                    await setDoc(doc(db, "Premium_Status", uid), {
                        Subscribed: true
                    });
                    checksubsStatus();
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
}
let trending1=document.querySelector('.trending1')
let trending2=document.querySelector('.trending2')
let trending3=document.querySelector('.trending3')
let trending4=document.querySelector('.trending4')
async function fetchtrending1(){
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDocRef = doc(db, "Trending", "Trending1");
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    const trending1song = docSnap.data().Name;
                    const videotrending1 = docSnap.data().preview;
                    console.log(trending1song);
                    console.log('Video '+videotrending1);
                    trending1.innerHTML=`<div class="songname" style="color: #1DB954; font-weight: 600; font-size: 24px;margin-left: 10px;">
                            #1 ${trending1song}
                        </div>
                        <br><br>
                        <center>
                            <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                        </center>`
                }
            } else {
                console.error("No user is signed in");
            }
        });
    } catch (error) {
        console.log(error)
    }
}
await fetchtrending1();
async function fetchtrending2(){
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDocRef = doc(db, "Trending", "Trending2");
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    const trending1song = docSnap.data().Name;
                    const videotrending1 = docSnap.data().preview;
                    console.log(trending1song);
                    console.log('Video '+videotrending1);
                    trending2.innerHTML=`<div class="songname" style="color: #1DB954; font-weight: 600; font-size: 24px;margin-left: 10px;">
                            #2 ${trending1song}
                        </div>
                        <br><br>
                        <center>
                            <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                        </center>`
                }
            } else {
                console.error("No user is signed in");
            }
        });
    } catch (error) {
        console.log(error)
    }
}
await fetchtrending2();
async function fetchtrending3(){
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDocRef = doc(db, "Trending", "Trending3");
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    const trending1song = docSnap.data().Name;
                    const videotrending1 = docSnap.data().preview;
                    console.log(trending1song);
                    console.log('Video '+videotrending1);
                    trending3.innerHTML=`<div class="songname" style="color: #1DB954; font-weight: 600; font-size: 24px;margin-left: 10px;">
                            #3 ${trending1song}
                        </div>
                        <br><br>
                        <center>
                            <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                        </center>`
                }
            } else {
                console.error("No user is signed in");
            }
        });
    } catch (error) {
        console.log(error)
    }
}
await fetchtrending3();
async function fetchtrending4(){
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDocRef = doc(db, "Trending", "Trending4");
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    const trending1song = docSnap.data().Name;
                    const videotrending1 = docSnap.data().preview;
                    console.log(trending1song);
                    console.log('Video '+videotrending1);
                    trending4.innerHTML=`<div class="songname" style="color: #1DB954; font-weight: 600; font-size: 24px;margin-left: 10px;">
                            #4 ${trending1song}
                        </div>
                        <br><br>
                        <center>
                            <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                        </center>`
                }
            } else {
                console.error("No user is signed in");
            }
        });
    } catch (error) {
        console.log(error)
    }
}
await fetchtrending4();