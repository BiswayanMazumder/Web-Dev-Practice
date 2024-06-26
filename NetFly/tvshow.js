var posterpath=localStorage.getItem('poster')
var id=localStorage.getItem('id')
console.log(id)
console.log('https://image.tmdb.org/t/p/w500'+posterpath)
var relatedsection=document.querySelector('.relatedsection')
async function fetchrecommendation(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
        }
      };
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 10).map(movie => movie.poster_path);
    // console.log(posterPaths);
    for(var i=0;i<posterPaths.length;i++){
        relatedsection.innerHTML += `<div class="img${i}">
                <img src=${'https://image.tmdb.org/t/p/w500'+posterPaths[i]}
                    alt="" ;height="100px" width="200px">`
    }
      } catch (error) {
        
      }
}
await fetchrecommendation();
var posterholder=document.querySelector('.headingimg')
var PosterPath='https://image.tmdb.org/t/p/w500'+posterpath
async function fetchposter(){
posterholder.innerHTML=`<img src=${PosterPath} alt="" width="100%" height="720px">`
}
await fetchposter();