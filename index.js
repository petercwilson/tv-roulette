'use strict';

const searchURL = 'https://www.episodate.com/api/most-popular?page=3';

function displayResults(responseJson) {
  console.log(responseJson);
  $('.fetchBtn').click(function(event) {
  $('.results').empty();
  for (let i = 0; i < responseJson.tv_shows.length; i++){
    $('.results').append(`
    <img src="${responseJson.tv_shows[i].image_thumbnail_path}" /></p>
    `) 
  $('.results').removeClass('hidden');
    }
  });
};

  console.log(searchURL);

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

// function startFetch() {
//   $('.fetchBtn').click(function(event) {
//     console.log('the button was pressed')
//   });
// }

// $(startFetch);
