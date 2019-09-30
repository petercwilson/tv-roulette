'use strict';

const url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=56d2a76f60029e3b5159c82ad83f7df4&language=en-US&origin_country=us'

function doStartUpStuff() {
    $('.results').empty();
}

function displayResults(responseJson) {
    doStartUpStuff();
    showTvShowsOnClick(responseJson);
    listenForNextShow(responseJson);
};

function showTvShowsOnClick(responseJson) {
  $('.btn').on('click', function(event) {
    const firstRandom = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
      $('.start').hide();
      $('.results').append(`
        <img class="thumbnail" src="https://image.tmdb.org/t/p/original${firstRandom.poster_path}" />
        <div id="overview">
          <h2>Overview</h2>
          <p>${firstRandom.overview}</p>
        </div>
        <div id="add-buttons">
          <button class="add-btn btn-red btn-large" role="link">get show</button>
          <button class="btn btn-red btn-large video-btn" role="link">watch trailer</button>
        </div>
      `)
    $('.results').removeClass('hidden');
    $('.left-container').on('click', '.video-btn', function(event) {
      $('.video-container').empty();
      $('.results').append(`
        <div class="video-container">
          <iframe id="ytplayer" type="text/html" width="auto" height="auto"
          src="https://www.youtube.com/embed/?listType=search&list=${firstRandom.name} trailer"
          frameborder="0" allowfullscreen>
          </iframe>
          <button class="close" role="link">X</button>
        </div>
      `)
      });
    });
}



function listenForNextShow(responseJson) {
  $('.results').on('click', '.add-btn', function(event) {
    const secondRandom = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
      $('.start').hide();
      $('.results').empty();
      $('.results').append(`
        <img class="thumbnail" src="https://image.tmdb.org/t/p/original${secondRandom.poster_path}" />
        <div id="overview">
          <h2>Overview</h2>
          <p>${secondRandom.overview}</p>
        </div>
        <div id="add-buttons">
          <button class="add-btn btn-red btn-large" role="link">get show</button>
          <button class="btn btn-red btn-large video-btn" role="link">watch trailer</button>
        </div>
      `)
    $('.results').removeClass('hidden');
    $('.left-container').on('click', '.video-btn', function(event) {
      $('.video-container').empty();
      $('.results').append(`
        <div class="video-container">
          <iframe id="ytplayer" type="text/html" width="auto" height="auto"
          src="https://www.youtube.com/embed/?listType=search&list=${secondRandom.name} trailer"
          frameborder="0" allowfullscreen>
          </iframe>
          <button class="close" role="link">X</button>
        </div>
      `)
      });
  })
}


function closeTrailerButton(event) { 
  $('.results').on('click', '.close', function(event) {
    $('.video-container').fadeOut('fast');
  });
};

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }) 
  .then(displayResults)
  // .then(listenForNextShow)
  .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });

$(closeTrailerButton);