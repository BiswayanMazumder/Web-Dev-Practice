const genrename = [];
var genrelist=document.querySelector('.categories')
var logo=document.querySelector('.logo')
logo.addEventListener('click',function(){
  window.location.href="home.html"  
})
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
  }
};

fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Accessing the genres array from the API response
    const genres = data.genres;

    // Iterate over the genres array and push each genre name to genrename array
    genres.forEach(genre => {
    //   console.log(genre.name);
      genrename.push(genre.name);
    });

    // Log the genrename array after all names have been collected
    // console.log('Genre names'+genrename);
    for(var i=0;i<genrename.length;i++){
        genrelist.innerHTML+=`<option value=${genrename[i]}>${genrename[i]}</option>`
    }
  })
  .catch(err => console.error('Fetch error:', err));
  var is_muted = true;
let homepagevideo = document.querySelector('.headingimg');
try {
  homepagevideo.innerHTML = `<video src="https://s3-iad-2.cf.trailer.row.aiv-cdn.net/2661/c1a9/77c6/48f2-b632-a681ff99e50f/236776a5-8e98-482c-b60b-c1f47a0b4b9f_video_900_audio_aaclc_128.mp4?Expires=1719340322&Signature=TpDkm65YTOz1uTHi~1f7WLOXc9Q53I~XiLN85Wbfxwvix9P3PvOAeFIKdLIGJOjmb9nFN0rxzCgJiEyri2k7CCE8iOurT5JOfu1pPTm13bdN8Aw1SQcuzBAztYZKFBzW8O4v9aJIb0YdDR~m50FvzFmVp0NFANSDerc5ipHCQCoFRILBLlmH8O2SQhb6sV9806oceJ89HkvxxkCR7fil2bRsAprscmWTGZMUKlXHKW1IcuHAAz5-pl~8yI1kudk7uQ7lDK-hLggOeO6qx00pMG9A-37fghTKJ~tXE70yc51eq6lj8924X5lbD4t8GrkEIyTwld9NUmMTw09axw7jBA__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA" width="100%" id="myVideo" autoplay muted loop></video>`
  let video = document.querySelector('#myVideo');
  // video.addEventListener('ended', function () {
  //   homepagevideo.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihROyGk5x7V5K1Hq-D2SlRMfRtH_kJ-TlrQ&s" alt="" width="100%">`
  // })
} catch (error) {
  console.log(error);
}