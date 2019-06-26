'use strict';

const searchURL = 'https://api.tvmaze.com/shows';


function displayResults(responseJson) {
  console.log(responseJson);
  $('.fetchBtn').click(function(event) {
  $('.results').empty();
  let random = responseJson[Math.floor(Math.random() * responseJson.length)];
  console.log(random)
    $('.results').append(`
      <img src ="${random.image.medium}" />
    `)
  // for (let i = 0; i < responseJson.length; i++){
    // $('.results').append(`
    // <img src="${responseJson[0].image.medium}" />
    // `) 
  $('.results').removeClass('hidden');
    // }
  });
};

  const url = searchURL;
  console.log(searchURL);

  fetch(url)
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
