function execute() {
  const url =
    "https://api.newscatcherapi.com/v2/search?q=Apple&from='2021/9/01'&countries=CA&page_size=1";
  const options = {
    method: "GET",
    headers: {
      // Accept: "application/json",
      "x-api-key": "gfp9aspPg2S3NP6L9fNBeiF8EfgAIBghZ0boegVtQyo",
    },
  };

  fetch(url, options)
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
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
execute();
