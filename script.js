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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7a6ea40b65msh76b90858980b18ap120230jsn8cc36400d771",
    "X-RapidAPI-Host": "reddit-meme.p.rapidapi.com",
  },
};

fetch("https://reddit-meme.p.rapidapi.com/memes/trending", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function getData() {
  return fetch("https://reddit-meme.p.rapidapi.com/memes/trending", {
    method: "GET",
    headers: {
      created_utc: 1643524062,
      title: "Sad aliens noises",
      url: "https://i.redd.it/tmd5shz9rre81.gif",
      subreddit: "memes",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

getData().then((response) => console.log(response));
console.log(reddit[0].subreddit);
