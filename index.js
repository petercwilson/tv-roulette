'use strict';

const searchURL = 'https://api.tvmaze.com/shows';
const youTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyDFIlqkeyIwWwdg3tvu8sgPbp63Pl_BmrA'

function displayResults(responseJson) {
  console.log(responseJson);
  $('.fetchBtn').click(function(event) {
  $('.results').empty();
  let random = responseJson[Math.floor(Math.random() * responseJson.length)];
  console.log(random.name)
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
  });
};

  fetch(searchURL)
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

function resetForm() {
  $('.resetBtn').click(event => {
  $('.results').addClass('hidden');
    });
  }

  $(resetForm);
