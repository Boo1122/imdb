import Cookie from "js-cookie";

export function addMovieToAPI() {
  document.getElementById("addMovieButton").addEventListener("click", () => {
    const title = document.getElementById("movie-Title-id");
    const year = document.getElementById("movieYear-id");
    const imdbID = document.getElementById("movie-ImdbID-id");
    const posterUrl = document.getElementById("GET-THIS");

    const movieCountry = document.getElementById("add-movie-country");
    const movieLanguage = document.getElementById("add-movie-language");
    const movieRuntime = document.getElementById("add-movie-runtime");
    const movieImdbRating = document.getElementById("add-movie-rating");
    const movieImdbVotes = document.getElementById("add-movie-imdbVotes");
    const movieGenre = document.getElementById("add-movie-genre");

    console.log(posterUrl);

    const token = Cookie.get("token");

    fetch("https://movies-app-siit.herokuapp.com/movies", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        Title: title.value,
        Year: year.value,
        ImdbID: imdbID.value,
        Poster: posterUrl.value,
        Country: movieCountry.value,
        Language: movieLanguage.value,
        Runtime: movieRuntime.value,
        imdbRating: movieImdbRating.value,
        imdbVotes: movieImdbVotes.value,
        Genre: movieGenre.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        location.reload(false);
      })
      .then((json) => {
        if (json.accessToken) {
          let emptyTitleInput = document.getElementById("movie-Title-id");
          emptyTitleInput.value = "";

          let emptyYearInput = document.getElementById("movieYear-id");
          emptyYearInput.value = "";

          let emptyImdbIDInput = document.getElementById("movie-ImdbID-id");
          emptyImdbIDInput.value = "";

          let emptyPosterInput = document.getElementById("movie-Poster-id");
          emptyPosterInput.value = "";
        }
      });
  });

  const inputImageURL = document.getElementById("GET-THIS");
  inputImageURL.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("addMovieButton").click();
    }
  });
}
