console.log('Welcome to logged in page')
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
let placetoinsert=document.querySelector('.container')
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
    console.log("Today is " + dayName);
    if (dayName == 'Saturday' || dayName == 'Sunday') {
        history.innerHTML += `This Weekend`
    }
    else {
        history.innerHTML += `This Week`
    }
}
async function main() {
    // await getRandomColor();
    printToday();
    console.log(color);
    let rightside = document.querySelector('.firstrightpart')
    let appbar = document.querySelector('.appbar')
    appbar.style.backgroundColor = color;
    rightside.style.backgroundColor = color;
}
main();
let name5 = 'Leo';
let images1='https://i.scdn.co/image/ab67616100005174debeea13700496b7d2b345d9'
let images2='https://i.scdn.co/image/ab67616d00001e02d045f5b403653ae1d59e46bb'
let images3='https://i.scdn.co/image/ab67616d00001e02d5bf86c4e1fd46800b122641'
let images4='https://i.scdn.co/image/ab67706f0000000207714ab1ffa0044de5633c9f'
let images5='https://i.scdn.co/image/ab67616d00001e023bf0683f6ac36cc954339d03'
let images6 = 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3iW9AR-default.jpg'
let images7='https://i.scdn.co/image/ab67706f0000000233fab13281f6d0d067511882'
let images8='https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebeddbb664c4723f268a60d8c1/1/en/default'
listeninghistory1.innerHTML += `<img src=${images1} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory2.innerHTML += `<img src=${images2} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory3.innerHTML += `<img src=${images3} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory4.innerHTML += `<img src=${images4} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory5.innerHTML += `<img src=${images5} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory6.innerHTML += `<img src="${images6}" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory7.innerHTML += `<img src=${images7} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory8.innerHTML += `<img src=${images8} alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
let name1='KR$NA'
let name2='Joota Japani'
let name3='True Stories'
let name4='Trending Songs India'
let name6='This is KR$NA'
let name7='This is Parmish Verma'
let name8='Daily Mix #1'
listeninghistory1.innerHTML += `<div class="singername">${name1}</div>`
listeninghistory2.innerHTML += `<div class="singername">${name2}</div>`
listeninghistory3.innerHTML += `<div class="singername">${name3}</div>`
listeninghistory4.innerHTML += `<div class="singername">${name4}</div>`
listeninghistory5.innerHTML += `<div class="singername">${name5}</div>`
listeninghistory6.innerHTML += `<div class="singername">${name6}</div>`
listeninghistory7.innerHTML += `<div class="singername">${name7}</div>`
listeninghistory8.innerHTML += `<div class="singername">${name8}</div>`
try {
    profilepic.innerHTML += '<img src="favicon.ico" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'
} catch (error) {
    console.log(error.message)
    profilepic.innerHTML += '<img src="play.png" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'
}
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
console.log(play1);
let play2 = Math.floor(Math.random() * imageslinks.length);
console.log(play2);
let play3 = Math.floor(Math.random() * imageslinks.length);
console.log(play3);
let play4 = Math.floor(Math.random() * imageslinks.length);
console.log(play4);
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
listeninghistory1.addEventListener('mouseover', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #28282E, black)'
})
listeninghistory2.addEventListener('click', function () {
    changeImageAndName(images2,name2)
})
listeninghistory3.addEventListener('click', function () {
    changeImageAndName(images3,name3)
})
listeninghistory4.addEventListener('click', function () {
    changeImageAndName(images4,name4)
})
listeninghistory5.addEventListener('click', function () {
    changeImageAndName(images5,name5)
})
listeninghistory6.addEventListener('click', function () {
    changeImageAndName(images6,name6)
})
listeninghistory7.addEventListener('click', function () {
    changeImageAndName(images7,name7)
})
listeninghistory8.addEventListener('click', function () {
    changeImageAndName(images8,name8)
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
    firstpart.style.background = 'linear-gradient(to bottom, #3A363F, black)'
})
listeninghistory8.addEventListener('mouseout', function () {
    firstpart.style.background = 'linear-gradient(to bottom, #24333E, black)'
})
let navigationbar=document.querySelector('.bottom-nav')
// function changeImageAndName(imageSrc, name){
//     navigationbar.innerHTML+=`<div class="songname"
//     style="position: relative;justify-content: start;text-align: start;display: flex;flex-direction: row;">
//     <img src=${imageSrc} alt="Krsna" class="krsna"
//         height="50px" style="border-radius: 5px;padding-left: 5px;top: 10px;position: relative;">
//     <div class="songname"
//         style="color: white;margin-left: 10px;position: relative;top: 15px;font-size: 14px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
//         ${name}
//         <div class="singername"
//             style="color: gray;position: relative;top: 10px;font-size: 10px;font-weight: 600;display: flex;flex-direction: column;font-family: sans-serif;">
//             KR$NA, Raftaar
//         </div>
//     </div>
// </div>
// <div class="controls"
//     style="position: absolute;justify-content: center;text-align: center;left: 50%;top: 10px;display: flex;flex-direction: column;">
//     <div class="navigation">
//         <a href="#previous" class="nav-prev"
//             style="position: relative;top: 5px;padding-right: 10px;text-decoration: none;">
//             <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
//                 viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
//                 <path
//                     d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
//                     fill="grey"></path>
//             </svg>
//         </a>
//         <a href="#play" class="nav-play" style="position: relative;top: 5px;text-decoration: none;">
//             <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
//                 viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
//                 <path
//                     d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
//                     fill="white"></path>
//             </svg>
//         </a>
//         <a href="#next" class="nav-forward"
//             style="position: relative;top: 5px;position: relative;top: 5px;padding-left: 10px;text-decoration: none;">
//             <svg data-encore-id="icon" role="img" aria-hidden="true" height="16" width="16"
//                 viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
//                 <path
//                     d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
//                     fill="grey"></path>
//             </svg>
//         </a>
//     </div>
//     <div class="slider" style="position: relative;top: 10px;display: flex;flex-direction: row;">
//     <div class="inititaltimer" style="color: gray;font-size: 12px;font-weight: 500;padding-right: 10px;">00:00</div>
//     <input type="range" min="0" max="100" value="0" id="volumeSlider">
//     <div class="endingtimer" style="color: gray;font-size: 12px;font-weight: 500;padding-left: 10px;">4:15</div>
//     </div>
// </div>
// <br><br><br>`
// }
var audiobutton=document.querySelector('.nav-play')
var audioplay=document.querySelector('.audioplay')
var isplaying=false;
audiobutton.addEventListener('click', function(){
    if(isplaying==false){
        audioplay.play()
        isplaying=true;
        console.log(isplaying);
    }else if(isplaying==true){
        audioplay.pause()
        isplaying=false
        console.log(isplaying);
    }
    
})