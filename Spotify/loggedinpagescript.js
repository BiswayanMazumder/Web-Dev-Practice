// console.log('Welcome to logged in page')
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
var username = '';
const Username = localStorage.getItem('username');
const password = localStorage.getItem('password');
const email = localStorage.getItem('email');
const writetodb = localStorage.getItem('writetodb');
// console.log(Username, password, email)
// console.log(`Write to db ${writetodb}`);
if (writetodb == 'true') {
    async function writeuserdetails() {
        const auth = getAuth();
        try {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const uid = user.uid;
                    // console.log(uid);
                    try {
                        // Create a reference to the document with the user's UID
                        await setDoc(doc(db, "User Details", uid), {
                            'Username': Username,
                            'Email': email,
                            'Password': password,
                            'Profile Picture': profilePicture,
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
    }
    await writeuserdetails();
}

async function fetchusername() {
    profilepic.innerHTML = '<img src="favicon.ico" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;
        try {
            const userDocRef = doc(db, "User Details", uid);
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                username = docSnap.data().Username;
                // console.log("User name:", username);
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const today = new Date();
                const dayName = daysOfWeek[today.getDay()];
                if (dayName == 'Saturday' || dayName == 'Sunday') {
                    history.innerHTML = `🎉 It's ${dayName} and the weekend vibes are soaring high! ${username} 🎉`
                }
                else {
                    // console.log('Username: ' + username);
                    history.innerHTML = `🎉 Welcome to Trendy ${dayName}! ${username} 🎉 `
                }
            }

        } catch (e) {
            console.log(e.message);
        }
    });
}
setInterval(() => {
    fetchusername();
}, 3000);

var profilePicture = '';
async function getuser() {
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            username = user.displayName;
            profilePicture = user.photoURL;
            console.log("Username: " + username);
            // console.log("Profile Picture URL: " + profilePicture);
            // console.log('signed in')
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date();
            const dayName = daysOfWeek[today.getDay()];
            // console.log("Today is " + dayName);
            if (username != null) {
                if (dayName == 'Saturday' || dayName == 'Sunday') {
                    history.innerHTML = `🎉 It's ${dayName} and the weekend vibes are soaring high! ${username} 🎉`
                }
                else {
                    console.log('Username: ' + username);
                    history.innerHTML = `🎉 Welcome to Trendy ${dayName}! ${username} 🎉 `
                }
            } else if (Username != null) {
                if (dayName == 'Saturday' || dayName == 'Sunday') {
                    history.innerHTML = `🎉 It's ${dayName} and the weekend vibes are soaring high! ${Username}🎉`
                }
                else {
                    // console.log('Username: ' + username);
                    history.innerHTML = `🎉 Welcome to Trendy ${dayName}! ${Username}🎉 `
                }
            }
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
            console.log('signed out')
        }
    });
}
// setInterval(() => {
//      getuser();
// }, 1000);
var issubed = false;
let premiumsubs = document.querySelector('#premiumuser')
async function checksubsStatus() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;
        try {
            const userDocRef = doc(db, "users", uid);
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                issubed = docSnap.data().Subscribed;
                // console.log("Document data:", docSnap.data().Subscribed);
            }
            if (issubed) {
                premiumbutton.innerHTML = ``
                premiumsubs.innerHTML = `<img src="https://pics.paypal.com/00/c/gifts/gb/spotify2.png" alt="" style="height: 40px; padding-left: 10px;position: relative;padding-top: 10px;" >`
            }
        } catch (e) {
            console.log(e.message);
        }
    });
}
setInterval(checksubsStatus, 3000);
let premiumbutton = document.querySelector("#premiumbutton")

let logout = document.querySelector('#signout')
logout.addEventListener('click', function () {
    const auth = getAuth();

    auth.signOut().then(() => {
        // Sign-out successful.
        window.location.replace('index.html');
    }).catch((error) => {
        // An error happened.
        console.error('Error during sign out:', error);
    });
});

const letters = '0123456789ABCDEF';
let color = '#';
let profilepic = document.querySelector('.profilepicture')
let history = document.querySelector('.historylistening')
let listeninghistory1 = document.querySelector('#history1')
let listeninghistory2 = document.querySelector('#history2')
let listeninghistory3 = document.querySelector('#history3')
let listeninghistory4 = document.querySelector('#history4')
let listeninghistory5 = document.querySelector('#history5')
let listeninghistory6 = document.querySelector('#history6')
let listeninghistory7 = document.querySelector('#history7')
let listeninghistory8 = document.querySelector('#history8')
let placetoinsert = document.querySelector('.container')
let time = '';
async function getRandomColor() {
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 18)];
    }
    return color;
}
let days = '';
function printToday() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];
    // console.log("Today is " + dayName);
    if (dayName == 'Saturday' || dayName == 'Sunday') {
        history.innerHTML += `🎉 It's ${dayName} and the weekend vibes are soaring high! 🎉`
    }
    else {
        console.log('Username: ' + username);
        history.innerHTML += `🎉 Welcome to Trendy ${dayName}! 🎉 ${username}`
    }
}
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
let name5 = 'Leo';
let singername5 = 'Shubh';
let images1 = 'https://i.scdn.co/image/ab67616100005174debeea13700496b7d2b345d9'
let images2 = 'https://i.scdn.co/image/ab67616d00001e02d045f5b403653ae1d59e46bb'
let images3 = 'https://i.scdn.co/image/ab67616d00001e02d5bf86c4e1fd46800b122641'
let images4 = 'https://i.scdn.co/image/ab67616d00001e02af9e8dfd99c2150e692cd96e'
let images5 = 'https://i.scdn.co/image/ab67616d00001e023bf0683f6ac36cc954339d03'
let images6 = 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3iW9AR-default.jpg'
let images7 = 'https://i.scdn.co/image/ab67706f0000000233fab13281f6d0d067511882'
let images8 = 'https://i.scdn.co/image/ab67616d0000b273577ab4960248918a9ebc7f73'
listeninghistory1.innerHTML += `<img src=${images1} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory2.innerHTML += `<img src=${images2} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory3.innerHTML += `<img src=${images3} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory4.innerHTML += `<img src=${images4} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory5.innerHTML += `<img src=${images5} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory6.innerHTML += `<img src="${images6}" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory7.innerHTML += `<img src=${images7} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory8.innerHTML += `<img src=${images8} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
let name1 = 'Prarthana'
let singername1 = 'KR$NA'
let name2 = 'Joota Japani'
let singername2 = 'KR$NA'
let name3 = 'True Stories'
let singername3 = 'AP Dhillon'
let name4 = 'Gulabi Sadi'
let singername4 = 'Album'
let name6 = 'This is KR$NA'
let singername6 = 'Album'
let name7 = 'This is Parmish Verma'
let singername8 = 'Tayc, Shreya Ghosal'
let name8 = 'Yimmy Yimmy'
let singername7 = 'Album'
listeninghistory1.innerHTML += `<div class="singername">${name1}</div>`
listeninghistory2.innerHTML += `<div class="singername">${name2}</div>`
listeninghistory3.innerHTML += `<div class="singername">${name3}</div>`
listeninghistory4.innerHTML += `<div class="singername">${name4}</div>`
listeninghistory5.innerHTML += `<div class="singername">${name5}</div>`
listeninghistory6.innerHTML += `<div class="singername">${name6}</div>`
listeninghistory7.innerHTML += `<div class="singername">${name7}</div>`
listeninghistory8.innerHTML += `<div class="singername">${name8}</div>`

let playlistImg1 = '';
let playlistName1 = '';
let playlistImg2 = '';
let playlistName2 = '';
let playlistImg3 = '';
let playlistName3 = '';
let playlistImg4 = '';
let playlistName4 = '';
let audio1 = 'songs/Prarthana_320(PagalWorld.com.sb).mp3'
let audio2 = 'songs/jootajapani.mp3'
let audio3 = 'songs/truestories.mp3'
let audio4 = 'songs/gulabisadi.mp3'
let audio5 = 'songs/safetyoff.mp3'
let audio6 = 'songs/khattaflow.mp3'
let audio7 = 'songs/aamjahemunde.mp3'
let audio8 = 'songs/yimmyyimmy.mp3'
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
listeninghistory1.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #28282E, black)'
})
listeninghistory1.addEventListener('click', function () {
    playerloaded = true;
    document.title = name1;
    changeImageAndName(images1, name1, singername1, audio1)

    playpause();
})
listeninghistory2.addEventListener('click', function () {
    playerloaded = true;
    document.title = name2;
    changeImageAndName(images2, name2, singername2, audio2)
    playpause();
})
listeninghistory3.addEventListener('click', function () {
    playerloaded = true;
    document.title = name3;
    changeImageAndName(images3, name3, singername3, audio3)

    playpause();
})
listeninghistory4.addEventListener('click', function () {
    playerloaded = true;
    document.title = name4;
    changeImageAndName(images4, name4, singername4, audio4)
    playpause();
})
listeninghistory5.addEventListener('click', function () {
    playerloaded = true;
    document.title = name5;
    changeImageAndName(images5, name5, singername5, audio5)
    playpause();
})
listeninghistory6.addEventListener('click', function () {
    playerloaded = true;
    document.title = name6;
    changeImageAndName(images6, name6, singername6, audio6)
    playpause();
})
listeninghistory7.addEventListener('click', function () {
    playerloaded = true;
    document.title = name7;
    changeImageAndName(images7, name7, singername7, audio7)
    playpause();

})
listeninghistory8.addEventListener('click', function () {
    playerloaded = true;
    document.title = name8;
    changeImageAndName(images8, name8, singername8, audio8)
    playpause();
})
listeninghistory1.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory2.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #530C06, black)'
})
listeninghistory2.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory3.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #26455E, black)'
})
listeninghistory3.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory4.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #025802, black)'
})
listeninghistory4.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory5.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #411411, black)'
})
listeninghistory5.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory6.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #411411, black)'
})
listeninghistory6.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory7.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #1A202F, black)'
})
listeninghistory7.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
listeninghistory8.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #884B27, black)'
})
listeninghistory8.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
let navigationbar = document.querySelector('.bottom-nav')
var songname='';
var singer='';
var songfile='';
var poster='';
async function fetchlastplayed(){
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;
        try {
            const userDocRef = doc(db, "Currently Playing", uid);
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                songname = docSnap.data().Song_Name;
                singer= docSnap.data().Singer_Name;
                songfile=docSnap.data().Song_Audio;
                poster=docSnap.data().Song_Image;

            }
            // console.log("Document data:", songname,singer,songfile,poster);
        } catch (e) {
            console.log(e.message);
        }
    });
}
await fetchlastplayed();
async function changeImageAndName(imageSrc, name, singername, audiofile) {
    const auth = getAuth();
    try {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(uid);
                try {
                    // Create a reference to the document with the user's UID
                    await setDoc(doc(db, "Currently Playing", uid), {
                        'Song_Name':name,
                        'Song_Image':imageSrc,
                        'Singer_Name':singername,
                        'Song_Audio':audiofile,
                     }); 
                    //  console.log('written')
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
    navigationbar.innerHTML = `<div class="songname"
    style="position: relative;justify-content: start;text-align: start;display: flex;flex-direction: row;">
    <img src=${imageSrc} alt="Krsna" class="krsna"
        height="50px" style="border-radius: 5px;padding-left: 5px;top: 10px;position: relative;">
    <div class="songname"
        style="color: white;margin-left: 10px;position: relative;top: 15px;font-size: 14px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
        <a href=#${name} class="playingsongname">${name}</a>
        <div class="singername"
            style="color: gray;position: relative;top: 10px;font-size: 10px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
            ${singername}
        </div>

    </div>
</div>
<div class="controls"
    style="position: absolute;justify-content: center;text-align: center;left: 50%;top: 10px;display: flex;flex-direction: column;">
    <div class="navigation">
        <audio src=${audiofile} class="audioplay" id="audio" autoplay></audio>
        <a href="#previous" class="nav-prev"
            style="position: relative;top: 5px;padding-right: 10px;text-decoration: none;" id="playaudio">
            <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
                viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
                <path
                    d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
                    fill="grey"></path>
            </svg>
        </a>
        <a href="#play" class="nav-play" style="position: relative;top: 5px;text-decoration: none;"
            id="playpause">
            <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
<path
    d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
    fill="white"></path>
</svg>

        </a>
        <a href="#next" class="nav-forward"
            style="position: relative;top: 5px;position: relative;top: 5px;padding-left: 10px;text-decoration: none;">
            <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
                viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
                <path
                    d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
                    fill="grey"></path>
            </svg>
        </a>
    </div>
    <div class="slider" style="position: relative;top: 10px;display: flex;flex-direction: row;">
        <div class="inititaltimer"
            style="color: gray;font-size: 12px;font-weight: 500;padding-right: 10px;">00:00</div>
        <input type="range" min="0" max="100" value="0" id="volumeSlider" class="slider">
        <div class="endingtimer" style="color: gray;font-size: 12px;font-weight: 500;padding-left: 10px;">
            4:15</div>
    </div>
</div>
<br><br><br>`
}

var isplaying = true;
function playpause() {

    var audiobutton = document.querySelector('.nav-play')
    var audioplay = document.querySelector('.audioplay')

    var playbutton = document.getElementById('playpause');
    var playsvg = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
<path d="M3 2v12l10-6-10-6z" fill="white"/>
</svg>`
    var pausesvg = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
<path
    d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
    fill="white"></path>
</svg>`

    audiobutton.addEventListener('click', function () {
        if (isplaying == false) {
            // console.log(isplaying);
            audioplay.play()
            isplaying = true;
            playbutton.innerHTML = pausesvg
        } else if (isplaying == true) {
            // console.log(isplaying);
            audioplay.pause()
            isplaying = false
            playbutton.innerHTML = playsvg

        }

    })

}
async function premiumsuccess() {
    const auth = getAuth();
    try {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(uid);
                try {
                    // Create a reference to the document with the user's UID
                    await setDoc(doc(db, "users", uid), {
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


var options = {
    "key": "rzp_test_LWOeujcY4CFvGk", // Enter the Key ID generated from the Dashboard
    "amount": "120000", // Amount is in currency subunits. Default currency is INR.
    "currency": "INR",
    "name": "Grovito",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgz5EMEfoCRrQXJVOkaRfKbf0PNiI6TflGUA&s",
    "theme": {
        "color": "#1DB954"
    },
    "handler": function (response) {
        console.log("Handler triggered with response:", response);
        checkPaymentStatus('success');
    }
};

var rzp1 = new Razorpay(options);

document.getElementById('rzp-button1').onclick = function (e) {
    // premiumsuccess()
    paymentStatus().then(function (status) {
        checkPaymentStatus(status);
    }).catch(function (status) {
        checkPaymentStatus(status);
    });
    rzp1.open();
    e.preventDefault();
};

var paymentStatus = function () {
    return new Promise((resolve, reject) => {
        rzp1.on('payment.error', function (response) {
            console.log("Payment failed:", response);
            reject('failed');
        });

        rzp1.on('payment.success', function (response) {
            console.log("Payment successful:", response);
            resolve('success');
        });

        rzp1.on('external_wallet', function (response) {
            console.log("External wallet chosen:", response);
        });

        rzp1.on('rzp_event', function (response) {
            console.log("Razorpay event:", response);
        });
    });
};

async function checkPaymentStatus(status) {
    if (status === 'failed') {
        console.log('failed');
    } else {
        console.log('success');
        await premiumsuccess();
    }
}
