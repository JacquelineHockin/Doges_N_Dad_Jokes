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
