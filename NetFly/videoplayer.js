console.log('welcome');
var movienames=localStorage.getItem('moviename')
document.title=`${movienames} - Netflix`
var poster=localStorage.getItem('poster')
var moviename=localStorage.getItem('movielink')
var player=document.querySelector('.player')
player.innerHTML=`<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%"
    poster=${poster} data-setup="{}">
    <source src=${moviename} type="video/mp4">
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>`