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

// init //
var init = function () {
  updatePage();
};

function add() {
  var new_data = document.getElementById('lock');
  if (localStorage.getItem('data') ==null) {
    localStorage.setItem('data', '[]');
  }
  var old_data =  JSON.parse(localStorage.getItem('data'));
  old_data.push(new_data);
  localStorage.setItem('data', JSON.stringify(old_data));
}

init();
