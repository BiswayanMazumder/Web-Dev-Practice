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
            var dp = localStorage.getItem('profilepic');
            console.log('profile ' + dp)
            if (dp == null) {
                profilepic.innerHTML = `<img src="favicon.ico" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">`
            } else {
                profilepic.innerHTML = `<img src=${dp} alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">`
            }
            functioncalled = true;
            // ...
        } else {
            // User is signed out showing error
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
let trending1 = document.querySelector('.trending1')
let trending2 = document.querySelector('.trending2')
let trending3 = document.querySelector('.trending3')
let trending4 = document.querySelector('.trending4')
async function fetchtrending1() {
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
                    const songtrending1 = docSnap.data().song;
                    // console.log('song'+songtrending1);
                    // console.log('Video '+videotrending1);
                    trending1.innerHTML = ` <div style="display: flex; justify-content: space-between; align-items: center; color: #1DB954; font-weight: 600; font-size: 24px; margin-left: 10px;">
        <div style="flex-grow: 1;">#1 ${trending1song}</div>
        <a href="#play" class="play1">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                <path d="M3 2v12l10-6-10-6z" fill="white" />
                            </svg>
                        </a>
    </div>
                        <br><br>
                        <center>
                            <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                        </center>`;

                    // Adding play/pause functionality
                    const playButton = document.querySelector('.play1');
                    let isPlaying = false;
                    const audio = new Audio(songtrending1);

                    playButton.addEventListener('click', () => {
                        if (isPlaying) {
                            audio.pause();
                            playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                <path d="M3 2v12l10-6-10-6z" fill="white" />
                            </svg>`;
                        } else {
                            audio.play();
                            playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                <path d="M3 2h4v12H3V2zm6 0h4v12H9V2z" fill="white" />
                            </svg>`;
                        }
                        isPlaying = !isPlaying;
                    });
                }
            } else {
                console.error("No user is signed in");
            }
        });
    } catch (error) {
        console.log(error);
    }
}

await fetchtrending1();
async function fetchtrending2() {
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
                    const songtrending1 = docSnap.data().song;
                    // console.log(trending1song);
                    // console.log('Video '+videotrending1);
                    trending2.innerHTML = ` <div style="display: flex; justify-content: space-between; align-items: center; color: #1DB954; font-weight: 600; font-size: 24px; margin-left: 10px;">
                    <div style="flex-grow: 1;">#2 ${trending1song}</div>
                    <a href="#play" class="play2">
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2v12l10-6-10-6z" fill="white" />
                                        </svg>
                                    </a>
                </div>
                                    <br><br>
                                    <center>
                                        <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                                    </center>`;
            
                                // Adding play/pause functionality
                                const playButton = document.querySelector('.play2');
                                let isPlaying = false;
                                const audio = new Audio(songtrending1);
            
                                playButton.addEventListener('click', () => {
                                    if (isPlaying) {
                                        audio.pause();
                                        playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2v12l10-6-10-6z" fill="white" />
                                        </svg>`;
                                    } else {
                                        audio.play();
                                        playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2h4v12H3V2zm6 0h4v12H9V2z" fill="white" />
                                        </svg>`;
                                    }
                                    isPlaying = !isPlaying;
                                });
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
async function fetchtrending3() {
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
                    const songtrending1 = docSnap.data().song;
                    // console.log(trending1song);
                    // console.log('Video '+videotrending1);
                    trending3.innerHTML = ` <div style="display: flex; justify-content: space-between; align-items: center; color: #1DB954; font-weight: 600; font-size: 24px; margin-left: 10px;">
                    <div style="flex-grow: 1;">#3 ${trending1song}</div>
                    <a href="#play" class="play3">
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2v12l10-6-10-6z" fill="white" />
                                        </svg>
                                    </a>
                </div>
                                    <br><br>
                                    <center>
                                        <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                                    </center>`;
            
                                // Adding play/pause functionality
                                const playButton = document.querySelector('.play3');
                                let isPlaying = false;
                                const audio = new Audio(songtrending1);
            
                                playButton.addEventListener('click', () => {
                                    if (isPlaying) {
                                        audio.pause();
                                        playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2v12l10-6-10-6z" fill="white" />
                                        </svg>`;
                                    } else {
                                        audio.play();
                                        playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2h4v12H3V2zm6 0h4v12H9V2z" fill="white" />
                                        </svg>`;
                                    }
                                    isPlaying = !isPlaying;
                                });
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
async function fetchtrending4() {
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
                    const songtrending1 = docSnap.data().song;
                    trending4.innerHTML = ` <div style="display: flex; justify-content: space-between; align-items: center; color: #1DB954; font-weight: 600; font-size: 24px; margin-left: 10px;">
                    <div style="flex-grow: 1;">#4 ${trending1song}</div>
                    <a href="#play" class="play4">
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2v12l10-6-10-6z" fill="white" />
                                        </svg>
                                    </a>
                </div>
                                    <br><br>
                                    <center>
                                        <video src=${videotrending1} autoplay loop muted width="640" height="360"></video>
                                    </center>`;
            
                                // Adding play/pause functionality
                                const playButton = document.querySelector('.play4');
                                let isPlaying = false;
                                const audio = new Audio(songtrending1);
            
                                playButton.addEventListener('click', () => {
                                    if (isPlaying) {
                                        audio.pause();
                                        playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2v12l10-6-10-6z" fill="white" />
                                        </svg>`;
                                    } else {
                                        audio.play();
                                        playButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" style="margin-left: auto;">
                                            <path d="M3 2h4v12H3V2zm6 0h4v12H9V2z" fill="white" />
                                        </svg>`;
                                    }
                                    isPlaying = !isPlaying;
                                });
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