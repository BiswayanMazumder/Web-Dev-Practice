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
  homepagevideo.innerHTML = `<video src="https://s3-iad-2.cf.trailer.row.aiv-cdn.net/39bb/339f/ccf6/4feb-92a5-82a55bb3fd40/b3b18c5e-d796-4c95-aa6f-e739331b622f_video_900_audio_aaclc_128.mp4?Expires=1719286944&Signature=kr0npVhuQM~UnXAEptixMzsxfLnYP9lkkpkYTV3NGMpREyjB8BxfOuDd86GTVLzxx5a0~QpmTg10gFKXg0J2~ZO2Zk6TLg4Yw9ktcmiTlNKuUwYGXVWc4ZuXPJ75goQIbZSC~x~svNUuGKG5KkJwgC3YLT6IcrW6OCpLFNQR5Fl1rDMAOWRAJiRPMm9gn7gvolvC7~rpq177XdWqamfc5fulwEr8HR7U8LAiNfQLXzGbZ39UIL~sgLFAY4qHGDPe0cJ8MZPGjFZY~PZe-b-hteAmGeoRWhe3gig10qkgz-5uMIA7uKjPpdSwvZMl0b8dhATIWTLMZqgdeQgOY1Rn9g__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA" width="100%" id="myVideo" autoplay muted loop></video>`
  let video = document.querySelector('#myVideo');
  // video.addEventListener('ended', function () {
  //   homepagevideo.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihROyGk5x7V5K1Hq-D2SlRMfRtH_kJ-TlrQ&s" alt="" width="100%">`
  // })
} catch (error) {
  console.log(error);
}