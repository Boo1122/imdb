import Cookie from "js-cookie";


export function addMovieToAPI() {
  document.getElementById("addMovieButton").addEventListener("click", () => {
    const title = document.getElementById("movie-Title-id");
    const year = document.getElementById("movieYear-id");
    const imdbID = document.getElementById("movie-ImdbID-id");
    const type = document.getElementById("movie-Type-id");
    const posterUrl = document.getElementById("movie-Poster-id");


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
          Year: year.value
        }),
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

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
}