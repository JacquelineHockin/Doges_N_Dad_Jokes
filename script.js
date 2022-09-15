// function getData() {
//   fetch("")
//     .then(function (response) {
//       //fetch data from url,gives us a response
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       filterData(data);
//     });
// }
// getData();

// function filterData(coldSprings) {
//   console.log(reddit[0].full_name);
// }

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "reddit-meme.p.rapidapi.com",
//   },
// };

// fetch("https://reddit-meme.p.rapidapi.com/memes/trending", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7a6ea40b65msh76b90858980b18ap120230jsn8cc36400d771",
//     "X-RapidAPI-Host": "reddit-meme.p.rapidapi.com",
//   },
// };

// fetch("https://reddit-meme.p.rapidapi.com/memes/trending", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// function getData() {
//   return fetch("https://reddit-meme.p.rapidapi.com/memes/trending", {
//     method: "GET",
//     headers: {
//       created_utc: 1643524062,
//       title: "Sad aliens noises",
//       url: "https://i.redd.it/tmd5shz9rre81.gif",
//       subreddit: "memes",
//     },
//   })
//     .then((response) => response.json())
//     .then((responseData) => {
//       console.log(responseData);
//       return responseData;
//     })
//     .catch((error) => console.warn(error));
// }

// getData().then((response) => console.log(response));
// console.log(reddit[0].subreddit);

// function execute() {
//   const url = "https://www.facebook.com/search/top?q=hawaii%20festivals";
//   const options = {
//     method: "GET",
//     headers: {
//       // Accept: "application/json",
//       "x-api-key": "7a6ea40b65msh76b90858980b18ap120230jsn8cc36400d771",
//     },
//   };
//   fetch(url, options)
//     .then((response) => {
//       console.log("response", response);
//       if (response.ok) {
//         return response.text();
//       }
//       return response.text().then((err) => {
//         return Promise.reject({
//           status: response.status,
//           statusText: response.statusText,
//           errorMessage: err,
//         });
//       });
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
// execute();

// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "7a6ea40b65msh76b90858980b18ap120230jsn8cc36400d771",
//     "X-RapidAPI-Host": "facebook-company-data.p.rapidapi.com",
//   },
//   body: '{"FBUrls":["https://www.facebook.com/RapidAPI.Hub/","https://www.facebook.com/jmcFlorist/","https://www.facebook.com/greshamsflorist"]}',
// };

// fetch("https://facebook-company-data.p.rapidapi.com/fbAboutData", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7a6ea40b65msh76b90858980b18ap120230jsn8cc36400d771",
//     "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//   },
// };

// fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

function fetchJokes() {
  var url = "https://official-joke-api.appspot.com/random_joke";
  fetch(url)
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.text();
      }
      return response.text().then((err) => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then((data) => {
      var setup = JSON.parse(data).setup;
      document.getElementById("setup").innerHTML = setup;
      var punchline = JSON.parse(data).punchline;
      document.getElementById("punchline").innerHTML = punchline;
    })
    .catch((err) => {
      console.error(err);
    });
}
function fetchDoge() {
  var url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
  fetch(url)
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.text();
      }
      return response.text().then((err) => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then((data) => {
      var dogeUrl = JSON.parse(data)[0];
      var dogeImage = document.querySelector("#dogeImage");
      dogeImage.style.backgroundImage = "url(" + dogeUrl + ")";
    })
    .catch((err) => {
      console.error(err);
    });
}
var updatePage = function () {
  fetchJokes();
  fetchDoge();
};
var punchlineText = document.querySelector("#punchline");
document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("showPunchline")) {
    punchlineText.className = "show";
  }
});
document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("refresh")) {
    updatePage();
    punchlineText.className = "hide";
  }
});
var init = function () {
  updatePage();
};
init();
