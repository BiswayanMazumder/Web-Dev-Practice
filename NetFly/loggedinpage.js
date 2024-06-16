console.log('Welcome to netfly');
let homepagevideo=document.querySelector('.headingimg');
try {
    homepagevideo.innerHTML=`<video src="https://firebasestorage.googleapis.com/v0/b/netflix-5002f.appspot.com/o/Home%20Screen%20Videos%2FShaitaan%20_%20Official%20Trailer%20_%20Ajay%20Devgan%2C%20R%20Madhavan%20_%20Netflix%20India.mp4?alt=media&token=893132ca-d46c-44b6-ba19-4f85976366ed" width="100%" id="myVideo" autoplay muted ></video>`
let video=document.querySelector('#myVideo');
video.addEventListener('ended', function(){
    homepagevideo.innerHTML=`<img src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVJYlnJec-T_hc9slgKNgf6KfCpl_LtbF5mkDrOPJi3LDKjaMwphGKHfDJi0uOq44S_r7GSOcoV3rBTIgYiOeaFgOZ8-d6YM1PxA.webp?r=c4c" alt="" width="100%">`
})
} catch (error) {
    console.log(error);
}
let image1 = document.querySelector('.img1');

image1.addEventListener('click',function(){
    console.log('clicked bademiya')
    window.location.href="bademiyachotemiya.html"
})

