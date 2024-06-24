console.log('Welcome to search');
var logo = document.querySelector('.logo');
var searchbody = document.querySelector('.searchbody');

logo.addEventListener('click', function() {
  window.location.href = "home.html";
});

// Function to create a shimmer effect
function createShimmer() {
  var shimmerDiv = document.createElement('div');
  shimmerDiv.className = 'shimmer';
  return shimmerDiv;
}

async function fetchMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3NjJhNjczNmYwY2Q0MmRlMzliZGI2YmZmMWJmNSIsInN1YiI6IjY1MDg1OGJiM2NkMTJjMDBlYjQ1ODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tPbUSb-HNcaxpQNV7fFApLUMVa0mI49PMqZC-DmhrU'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
    const data = await response.json();
    const posterPaths = data.results.slice(0, 20).map(movie => movie.poster_path);

    for (var i = 0; i < posterPaths.length; i++) {
      // Show shimmer effect
      searchbody.appendChild(createShimmer());

      // Load actual image
      const image = new Image();
      image.src = 'https://image.tmdb.org/t/p/w500' + posterPaths[i];
      image.onload = function() {
        // Replace shimmer with actual image
        const shimmerDiv = searchbody.getElementsByClassName('shimmer')[0];
        if (shimmerDiv) {
          searchbody.replaceChild(image, shimmerDiv);
        }
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchMovies();

// CSS for shimmer effect
var style = document.createElement('style');
style.textContent = `
  .shimmer {
    width: 100%;
    height: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-size: 800px 104px; /* Adjust as needed */
    position: relative;
    overflow: hidden;
    animation: shimmer 1s infinite linear;
  }

  @keyframes shimmer {
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
  }
`;
document.head.appendChild(style);
