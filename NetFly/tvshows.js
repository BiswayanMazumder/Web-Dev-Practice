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
        genrelist.innerHTML+=`<option value="TV">${genrename[i]}</option>`
    }
  })
  .catch(err => console.error('Fetch error:', err));