console.log('Welcome to logged in page')
const letters = '0123456789ABCDEF';
let color = '#';
let profilepic = document.querySelector('.profilepicture')
let history = document.querySelector('.historylistening')
let listeninghistory1=document.querySelector('#history1')
let listeninghistory2=document.querySelector('#history2')
let listeninghistory3=document.querySelector('#history3')
let listeninghistory4=document.querySelector('#history4')
let listeninghistory5=document.querySelector('#history5')
let listeninghistory6=document.querySelector('#history6')
let listeninghistory7=document.querySelector('#history7')
let listeninghistory8=document.querySelector('#history8')
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
        history.innerHTML+=`This Weekend`
    }
    else{
        history.innerHTML+=`This Week`
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
    let names='Leo';
    let images='https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3iW9AR-default.jpg';
    listeninghistory1.innerHTML+=`<img src="https://i.scdn.co/image/ab67616100005174debeea13700496b7d2b345d9" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory2.innerHTML+=`<img src="https://i.scdn.co/image/ab67616d00001e02d045f5b403653ae1d59e46bb" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory3.innerHTML+=`<img src="https://i.scdn.co/image/ab67616d00001e02d5bf86c4e1fd46800b122641" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory4.innerHTML+=`<img src="https://i.scdn.co/image/ab67706f0000000207714ab1ffa0044de5633c9f" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory5.innerHTML+=`<img src="https://i.scdn.co/image/ab67616d00001e023bf0683f6ac36cc954339d03" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory6.innerHTML+=`<img src="${images}" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory7.innerHTML+=`<img src="https://i.scdn.co/image/ab67706f0000000233fab13281f6d0d067511882" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory8.innerHTML+=`<img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebeddbb664c4723f268a60d8c1/1/en/default" alt="Krsna" class="krsna" height="50px" style="border-radius: 5px;">`
    listeninghistory1.innerHTML+=`<div class="singername">KR$NA</div>`
    listeninghistory2.innerHTML+=`<div class="singername">Joota Japani</div>`
    listeninghistory3.innerHTML+=`<div class="singername">True Stories</div>`
    listeninghistory4.innerHTML+=`<div class="singername">Trending Songs India</div>`
    listeninghistory5.innerHTML+=`<div class="singername">${names}</div>`
    listeninghistory6.innerHTML+=`<div class="singername">This is KR$NA</div>`
    listeninghistory7.innerHTML+=`<div class="singername">This is Parmish Verma</div>`
    listeninghistory8.innerHTML+=`<div class="singername">Daily Mix #1</div>`
    profilepic.innerHTML += '<img src="https://source.unsplash.com/random/30x30?sig=3" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'