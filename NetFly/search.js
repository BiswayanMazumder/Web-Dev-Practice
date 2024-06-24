console.log('Welome to search')
var logo=document.querySelector('.logo')
logo.addEventListener('click',function(){
  window.location.href="home.html"  
})
var searchbody=document.querySelector('.searchbody')
async function fetchmovies(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
    // const response1 = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);
    for(var i=0;i<posterPaths.length;i++){
      searchbody.innerHTML += `<img src=${'https://image.tmdb.org/t/p/w500' + posterPaths[i]} alt="Upcoming">`
    }
  } catch (error) {
    
  }
}
fetchmovies();