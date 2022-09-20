// add favorite joke to local storage
function add(favoriteJoke) {
  localStorage.setItem("response", JSON.stringify(favoriteJoke));
}

document.getElementById("viewFavorite").addEventListener("click", function () {
  // get local storage data
  var response = JSON.parse(localStorage.getItem("response"));
  // get elements we want to write to
  var setup = document.getElementById("setupText");
  var punchline = document.getElementById("punchlineText");

  // if localstorage has any saved jokes, display them on the page
  // if not, show an error message
  if (!!response.setup) {
    // update element text
    setup.innerHTML = response.setup;
    punchline.innerHTML = response.punchline;
  } else {
    // show error message
    setup.innerHTML = "no stored jokes";
  }
});

// funtion for API fetch request & return for random dad jokes //
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

      // display favorite joke if lock button is clicked on
      document.getElementById("lock").addEventListener("click", function () {
        add({ setup, punchline });
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

// funtion for API fetch request & return for random dad jokes //
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
// script to call both API functions //
var updatePage = function () {
  fetchJokes();
  fetchDoge();
};

updatePage();

// script to hide and show punchline of joke //
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

// click funtion to show "saved" for 1 second when lock button is clicked //
var saveBtn = document.querySelector("#lock");
var saved = document.querySelector("#saved");

saveBtn.onclick = function () {
  saved.className = "show";
  setTimeout(function () {
    saved.className = "hide";
  }, 1000);
};
