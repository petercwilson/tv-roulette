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
      <p>Title: <a href=https://www.imdb.com/title/${random.externals.imdb}>${random.name}</a></p>
      <p>Genre(s): ${random.genres}</p>
      <p>Summary: ${random.summary}</p>
      <p>Where to Watch: ${random.network.name}</p>
      <p>Site: <a href="${random.officialSite}">${random.officialSite}</a></p>
      <p>Rating: ${random.rating.average}</p>
    `)
  $('.results').removeClass('hidden');
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

    function resetForm() {
      $('.resetBtn').click(event => {
      $('.results').addClass('hidden');
      });
  }

  $(resetForm);
