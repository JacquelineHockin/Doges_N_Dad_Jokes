const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fb149e99d2msh153206232876bbcp1e19d6jsncc2b70ec0cb9",
    "X-RapidAPI-Host": "reddit-meme.p.rapidapi.com",
  },
};
fetch("https://reddit-meme.p.rapidapi.com/memes/top", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
function getData() {
  return fetch("https://reddit-meme.p.rapidapi.com/memes/top", {})
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}
getData().then((response) => console.log(response));
console.log(reddit[0].subreddit);
