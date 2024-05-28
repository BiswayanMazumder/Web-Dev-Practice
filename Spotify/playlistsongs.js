// console.log("playlists loaded")
let playbutton = document.getElementById('Arijitplaylist')
let arijitsongs = ['arijit/chaleya.mp3', 'arijit/galtisemistake.mp3', 'arijit/humariadhurikahani.mp3', 'arijit/luttputtgaya.mp3', 'arijit/omahi.mp3', 'arijit/satrangi.mp3']
let songnames = ['Chaleya', 'Galti Se Mistake', 'Humari Adhuri Kahani', 'Lutt Puttgaya', 'O Mahi', 'Satrangi']
let navbar = document.querySelector('.bottom-nav')
let playingsong = arijitsongs[0]
let playingsongname = songnames[0];
let currentIndex = 0; 
function movenext() {
    var nextbutton = document.querySelector('.nav-forward');

    nextbutton.addEventListener('click', function () {
        
        if (currentIndex < arijitsongs.length - 1) {
            currentIndex += 1;
            playingsong = arijitsongs[currentIndex];
            playingsongname = songnames[currentIndex];
            playnextsong(playingsongname, playingsong);
            console.log("Current Index:", currentIndex);
            console.log("Playing Song:", playingsong);
            console.log("Playing Song Name:", playingsongname);
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
            playnextsong(playingsongname, playingsong);
            console.log("Current Index:", currentIndex);
            console.log("Playing Song:", playingsong);
            console.log("Playing Song Name:", playingsongname);
            arijitplaying = false;
            playpause();
            moveprev()
            movenext()
        } else if(currentIndex==0) {
            console.log('End of list');
        }
    });
}
function playnextsong(songname,songfile){
    navigationbar.innerHTML = `<div class="songname"
    style="position: relative;justify-content: start;text-align: start;display: flex;flex-direction: row;">
    <img src="https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3" alt="Arijit Singh" class="krsna"
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


