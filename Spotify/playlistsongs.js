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
// const db = getFirestore(app);
// Initialize Firebase
var functioncalled = false;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let playbutton = document.getElementById('Arijitplaylist')
let navigationbar = document.querySelector('.bottom-nav')
let arijitsongs = ['arijit/chaleya.mp3', 'arijit/galtisemistake.mp3', 'arijit/humariadhurikahani.mp3', 'arijit/luttputtgaya.mp3', 'arijit/omahi.mp3', 'arijit/satrangi.mp3']
let songnames = ['Chaleya', 'Galti Se Mistake', 'Humari Adhuri Kahani', 'Lutt Putt Gaya', 'O Mahi', 'Satranga']
let songimages=['https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR738jkhZFCLwDl6rjC3aMMkjVlfMUna3f6zg&s','https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/427275663.jpg','https://static.theprint.in/wp-content/uploads/2023/11/ANI-20231121142014.jpg','https://c.saavncdn.com/058/O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg','https://i1.sndcdn.com/artworks-5m5KwEnQsyUXxPaD-juuvfQ-t500x500.jpg']
let navbar = document.querySelector('.bottom-nav')
let playingsong = arijitsongs[0]
let playingsongname = songnames[0];
let playingsongimage=songimages[0]
let currentIndex = 0; 
function movenext() {
    var nextbutton = document.querySelector('.nav-forward');

    nextbutton.addEventListener('click', function () {
        
        if (currentIndex < arijitsongs.length - 1) {
            currentIndex += 1;
            playingsong = arijitsongs[currentIndex];
            playingsongname = songnames[currentIndex];
            playingsongimage=songimages[currentIndex]
            playnextsong(playingsongname, playingsong,playingsongimage); 
            document.title=`${songnames[currentIndex]} - Arijit Singh`;
            // console.log("Current Index:", currentIndex);
            // console.log("Playing Song:", playingsong);
            // console.log("Playing Song Name:", playingsongname);
            arijitplaying = false;
            playpause();
            movenext()
            moveprev()
        } else {
            console.log('End of list');
        }
    });
}
function moveprev(){
    var prevbutton = document.querySelector('#previousaudio');
    
    prevbutton.addEventListener('click', function () {
        // alert('prev clicked')
        if (currentIndex>0) {
            currentIndex -= 1;
            playingsong = arijitsongs[currentIndex];
            playingsongname = songnames[currentIndex];
            playingsongimage=songimages[currentIndex]
            playnextsong(playingsongname, playingsong,playingsongimage);
            document.title=`${songnames[currentIndex]} - Arijit Singh`;
            // console.log("Current Index:", currentIndex);
            // console.log("Playing Song:", playingsong);
            // console.log("Playing Song Name:", playingsongname);
            arijitplaying = false;
            playpause();
            moveprev()
            movenext()
            
        } else if(currentIndex==0) {
            console.log('End of list');
        }
    });
}
function playnextsong(songname,songfile,songimage){
    const auth = getAuth();
    try {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(uid);
                try {
                    // Create a reference to the document with the user's UID
                    await setDoc(doc(db, "Currently Playing", uid), {
                        'Song_Name': songname,
                        'Song_Image': songimage,
                        'Singer_Name': 'Arijit Singh',
                        'Song_Audio': songfile,
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
    <img src=${songimage} alt=${songname} class="krsna"
        height="50px" style="border-radius: 5px;padding-left: 5px;top: 10px;position: relative;">
    <div class="songname"
        style="color: white;margin-left: 10px;position: relative;top: 15px;font-size: 14px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
        <a href="#aamjahemunde" class="playingsongname">${songname}</a>
        <div class="singername"
            style="color: gray;position: relative;top: 10px;font-size: 10px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
            Arijit Singh
        </div>

    </div>
</div>
<div class="controls"
    style="position: absolute;justify-content: center;text-align: center;left: 50%;top: 10px;display: flex;flex-direction: column;">
    <div class="navigation">
        <audio src=${songfile} class="audioplay" id="audio" autoplay></audio>
        <a href="#previous" class="nav-prev"
            style="position: relative;top: 5px;padding-right: 10px;text-decoration: none;" id="previousaudio">
            <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
                viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
                <path
                    d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
                    fill="white"></path>
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
                    fill="white"></path>
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
playbutton.addEventListener('click', function() {
    // console.log(songname)
    playnextsong(playingsongname,playingsong);
    document.title=`${songnames[currentIndex]} - Arijit Singh`;
    playpause()
    movenext()
    moveprev()
})
var arijitplaying = true;

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
        if (arijitplaying == false) {
            // console.log(isplaying);
            audioplay.play()
            document.title=`${playingsongname} by Arijit Singh`
            arijitplaying = true;
            playbutton.innerHTML = pausesvg
        } else if (arijitplaying == true) {
            // console.log(isplaying);
            audioplay.pause()
            arijitplaying = false
            playbutton.innerHTML = playsvg

        }

    })
}


