'use strict'

const searchURL = 'https://api.tvmaze.com/shows';
const youTubeURL = 'https://www.googleapis.com/youtube/v3/search?q=game-of-thrones&part=snippet&maxResults=10&key=AIzaSyDFIlqkeyIwWwdg3tvu8sgPbp63Pl_BmrA'

$('.fetchBtn').on('click', function(event) {
  var searchResponse = fetchSearch();
  displaySearch(searchResponse);
  var youtubeResponse = fetchYoutube();
  displayYoutube(youtubeResponse);
});

function fetchSearch(){
  fetch(searchURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displaySearch(searchResponse) {
  $('.results').empty();
  let random = searchResponse[Math.floor(Math.random() * searchResponse.length)];
  // console.log(random.name)
    $('.results').append(`
      <img src ="${random.image.medium}" />
      <p>Title: ${random.name}</p>
      <p>Genre(s): ${random.genres}</p>
      <p>Summary: ${random.summary}</p>
      <p>Where to Watch: ${random.network.name}</p>
      <p>Site: <a href="${random.officialSite}">${random.officialSite}</a></p>
      <p>Rating: ${random.rating.average}</p>
    `)
  $('.results').removeClass('hidden');
}

function fetchYoutube(){ 
    fetch(youTubeURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    }); };

// function displayYoutube() { ... };