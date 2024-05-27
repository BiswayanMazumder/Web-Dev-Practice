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
let names = 'Leo';
let images = 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3iW9AR-default.jpg';
listeninghistory1.innerHTML += `<img src="https://i.scdn.co/image/ab67616100005174debeea13700496b7d2b345d9" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory2.innerHTML += `<img src="https://i.scdn.co/image/ab67616d00001e02d045f5b403653ae1d59e46bb" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory3.innerHTML += `<img src="https://i.scdn.co/image/ab67616d00001e02d5bf86c4e1fd46800b122641" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory4.innerHTML += `<img src="https://i.scdn.co/image/ab67706f0000000207714ab1ffa0044de5633c9f" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory5.innerHTML += `<img src="https://i.scdn.co/image/ab67616d00001e023bf0683f6ac36cc954339d03" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory6.innerHTML += `<img src="${images}" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory7.innerHTML += `<img src="https://i.scdn.co/image/ab67706f0000000233fab13281f6d0d067511882" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory8.innerHTML += `<img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebeddbb664c4723f268a60d8c1/1/en/default" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
listeninghistory1.innerHTML += `<div class="singername">KR$NA</div>`
listeninghistory2.innerHTML += `<div class="singername">Joota Japani</div>`
listeninghistory3.innerHTML += `<div class="singername">True Stories</div>`
listeninghistory4.innerHTML += `<div class="singername">Trending Songs India</div>`
listeninghistory5.innerHTML += `<div class="singername">${names}</div>`
listeninghistory6.innerHTML += `<div class="singername">This is KR$NA</div>`
listeninghistory7.innerHTML += `<div class="singername">This is Parmish Verma</div>`
listeninghistory8.innerHTML += `<div class="singername">Daily Mix #1</div>`
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
// listeninghistory1.addEventListener('mouseover', function () {
//     listeninghistory1.innerHTML += `<div class="equaliser" style="position: relative; left:85%;top: 30%;">
//     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <path class="bar" d="M3.99902 14H5.99902V0H3.99902V14Z" fill="#1DB954"/>
//         <path class="bar" d="M-0.000976562 14H1.99902V4H-0.000976562V14Z" fill="#1DB954"/>
//         <path class="bar" d="M12 7V14H14V7H12Z" fill="#1DB954"/>
//         <path class="bar" d="M8.00002 14H10V10H8.00002V14Z" fill="#1DB954"/>
//     </svg>
// </div>`
// })