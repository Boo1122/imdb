import Cookie from "js-cookie";

<<<<<<< HEAD
export function editMovieToAPI() {
  document.getElementById("editMovieButton").addEventListener("click", () => {
    const title = document.getElementById("edit-movie-title");
    const year = document.getElementById("edit-movie-year");
    const imdbID = document.getElementById("edit-movie-ImdbID");
    const type = document.getElementById("edit-movie-type");
    const posterUrl = document.getElementById("edit-movie-poster");

    const token = Cookie.get("token");
    let url = `https://movies-app-siit.herokuapp.com/movies${/*this.*/movie.id}`;

    fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        Title: `${title.value}`,
        Year: `${year.value}`,
        ImdbID: `${imdbID.value}`,
        Type: `${type.value}`,
        Poster: `${posterUrl.value}`
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);

        /*if (json.accessToken) {
          let emptyTitleInput = document.getElementById("edit-movie-title");
          emptyTitleInput.value = "";

          let emptyYearInput = document.getElementById("edit-movie-year");
          emptyYearInput.value = "";

          let emptyImdbIDInput = document.getElementById("edit-movie-ImdbID");
          emptyImdbIDInput.value = "";

          let emptyTypeInput = document.getElementById("edit-movie-type");
          emptyImdbIDInput.value = "";

          let emptyPosterInput = document.getElementById("edit-movie-poster");
          emptyPosterInput.value = "";
        }*/
      });
  });
=======
export function editMovieToAPI(id) {
  document
    .getElementById("editMovieDetailsButton")
    .addEventListener("click", () => {
      const title = document.getElementById("edit-movie-title");
      const year = document.getElementById("edit-movie-year");
      const imdbID = document.getElementById("edit-movie-ImdbID");
      const type = document.getElementById("edit-movie-type");
      const posterUrl = document.getElementById("edit-movie-poster");

      const token = Cookie.get("token");
      let url = `https://movies-app-siit.herokuapp.com/movies/${id}`;

      console.log(url);

      fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
          Title: `${title.value}`,
          Year: `${year.value}`,
          ImdbID: `${imdbID.value}`,
          Type: `${type.value}`,
          Poster: `${posterUrl.value}`,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
    });
>>>>>>> Pre-Production-3.0
}
