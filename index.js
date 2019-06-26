'use strict';

const searchURL = 'http://api.tvmaze.com/shows';

let shows = [
  {
      title: "Designated Survivor"
  },
  {
      title: "The Bachelorette"
  },
  {
      title: "The Bodyguard"
  },
  {
      title: "The West Wing"
  },
  {
      title: "Silicon Valley"
  }
]

function displayResults(responseJson) {
  console.log(responseJson);
  $('.fetchBtn').click(function(event) {
  $('.results').empty();
  let random = responseJson[Math.floor(Math.random() * responseJson.length)];
  console.log(random)
  // $('.results').append(
  //   console.log(random)
  // )
  // for (let i = 0; i < responseJson.length; i++){
    // $('.results').append(`
    // <img src="${responseJson[0].image.medium}" /></p>
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

// function startFetch() {
//   $('.fetchBtn').click(function(event) {
//     console.log('the button was pressed')
//   });
// }

// $(startFetch);
