'use strict';

const popularURL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=56d2a76f60029e3b5159c82ad83f7df4&language=en-US&origin_country=us'


function displayResults(responseJson) {
  $('.btn').click(function(event) {
    $('.start').hide();
    $('.results').empty();
  const random = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
  console.log(`"https://www.youtube.com/embed?listType=search&list=${random.name}"`)
    $('.results').append(`
      <img class="thumbnail" src="https://image.tmdb.org/t/p/original${random.poster_path}" />
      <div id="overview">
        <h2>Overview</h2>
        <p>${random.overview}</p>
      </div>
      <div id="add-buttons">
        <button class="add-btn btn-red btn-large" role="link">fetch tv show</button>
        <button class="btn btn-red btn-large video-btn" role="link">Watch Trailer</button>
      </div>
    `)
  $('.results').removeClass('hidden');
  $('.video-btn').click(function(event) {
    $('.results').append(`
      <div class="video-container">
        <iframe id="ytplayer" type="text/html" width="1200" height="800"
        src="https://www.youtube.com/embed/?listType=search&list=${random.name} trailer"
        frameborder="0" allowfullscreen>
        </iframe>
        <button class="close" role="link">X</button>
      </div>
    `)
    });
  });
};

function fetchAnotherShow(responseJson) {
  $('#add-buttons').click(function(event) {
    $('.results').empty();
  const random = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
    $('.results').append(`
      <img class="thumbnail" src="https://image.tmdb.org/t/p/original${random.poster_path}" />
      <div id="overview">
        <h2>Overview</h2>
        <p>${random.overview}</p>
      </div>
      <div id="add-buttons">
        <button class="add-btn btn-red btn-large" role="link">fetch tv show</button>
        <button class="btn btn-red btn-large video-btn" role="link">Watch Trailer</button>
      </div>
    `)
  $('.results').removeClass('hidden');
  $('.video-btn').click(function(event) {
    $('.results').append(`
      <div class="video-container">
        <iframe id="ytplayer" type="text/html" width="1200" height="800"
        src="https://www.youtube.com/embed/?listType=search&list=${random.name} trailer"
        frameborder="0" allowfullscreen>
        </iframe>
        <button class="close" role="link">X</button>
      </div>
    `)
    });
  });
};

function closeButton(event) { 
  $('.results').on('click', '.close', function(event) {
    $('.video-container').fadeOut('fast');
  });
};

fetch(popularURL)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }) 
  .then(responseJson => displayResults(responseJson))
  .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });

$(fetchAnotherShow);
$(closeButton);