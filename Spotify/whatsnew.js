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
async function getuser() {
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            username = user.displayName;
            profilePicture = user.photoURL;
            console.log("Welcome Mr," + username);
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
                profilepic.innerHTML = '<img src="favicon.ico" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'
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
const whatsnew = document.querySelector('.whatsnew')
whatsnew.innerHTML += `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI" width="20" height="20"><title>What's New</title>
<path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"  fill="grey"></path></svg>`
// whatsnew.addEventListener('mouseover', function () {
//     whatsnew.innerHTML+= `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI" width="20" height="20"><title>What's New</title>
// <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"  fill="white"></path></svg>`
// })
// whatsnew.addEventListener('mouseout', function () {
//     whatsnew.innerHTML+= `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI" width="20" height="20"><title>What's New</title>
// <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"  fill="grey"></path></svg>`
// })

var username = '';
const Username = localStorage.getItem('username');
const password = localStorage.getItem('password');
const email = localStorage.getItem('email');
const writetodb = localStorage.getItem('writetodb');
let navigationbar = document.querySelector('.bottom-nav')
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
var songname = '';
var singer = '';
var songfile = '';
var poster = '';
let name5 = 'Safety Off';
let singername5 = 'Shubh';
let images1 = 'https://i.scdn.co/image/ab67616100005174debeea13700496b7d2b345d9'
let images2 = 'https://i.scdn.co/image/ab67616d00001e02d045f5b403653ae1d59e46bb'
let images3 = 'https://i.scdn.co/image/ab67616d00001e02d5bf86c4e1fd46800b122641'
let images4 = 'https://i.scdn.co/image/ab67616d00001e02af9e8dfd99c2150e692cd96e'
let images5 = 'https://i.scdn.co/image/ab67616d00001e023bf0683f6ac36cc954339d03'
let images6 = 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3iW9AR-default.jpg'
let images7 = 'https://i.scdn.co/image/ab67706f0000000233fab13281f6d0d067511882'
let images8 = 'https://i.scdn.co/image/ab67616d0000b273577ab4960248918a9ebc7f73'
let images9 = 'https://i.scdn.co/image/ab67616d0000b273fd2e3126a9d286550f9921a2'

let audio1 = 'songs/Prarthana_320(PagalWorld.com.sb).mp3'
let audio2 = 'songs/jootajapani.mp3'
let audio3 = 'songs/truestories.mp3'
let audio4 = 'songs/gulabisadi.mp3'
let audio5 = 'songs/safetyoff.mp3'
let audio6 = 'songs/khattaflow.mp3'
let audio7 = 'songs/aamjahemunde.mp3'
let audio8 = 'songs/yimmyyimmy.mp3'
let audio9 = 'songs/0to100.mp3'
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
let singername9 = 'Sidhu Moosewala'
let name9 = '0 to 100'
var lastplayed = false;
async function fetchlastplayed() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;
        try {
            const userDocRef = doc(db, "Currently Playing", uid);
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                songname = docSnap.data().Song_Name;
                singer = docSnap.data().Singer_Name;
                songfile = docSnap.data().Song_Audio;
                poster = docSnap.data().Song_Image;
                lastplayed = true;
            }

            document.title = songname;
            // console.log("Document data:", lastplayed);
            // console.log("Document data:", songname, singer, songfile, poster);
            if (lastplayed) {
                navigationbar.innerHTML = `<div class="songname"
    style="position: relative;justify-content: start;text-align: start;display: flex;flex-direction: row;">
    <img src=${poster} alt="Krsna" class="krsna"
        height="50px" style="border-radius: 5px;padding-left: 5px;top: 10px;position: relative;">
    <div class="songname"
        style="color: white;margin-left: 10px;position: relative;top: 15px;font-size: 14px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
        <a href=#${songname} class="playingsongname">${songname}</a>
        <div class="singername"
            style="color: gray;position: relative;top: 10px;font-size: 10px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
            ${singer}
        </div>

    </div>
</div>
<div class="controls"
    style="position: absolute;justify-content: center;text-align: center;left: 50%;top: 10px;display: flex;flex-direction: column;">
    <div class="navigation">
        <audio src=${songfile} class="audioplay" id="audio" controls></audio>
     </div>   
    
</div>
<br><br><br>`
            }
        } catch (e) {
            console.log(e.message);
        }
    });
}
// await fetchlastplayed();
// console.log("Document data:", lastplayed);
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
fetchusername();

var profilePicture = '';

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
            const userDocRef = doc(db, "Premium_Status", uid);
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
var isplaying = true;
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
