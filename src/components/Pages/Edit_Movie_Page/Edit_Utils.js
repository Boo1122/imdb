import Cookie from "js-cookie";

export function editMovieToAPI(id) {
  document
    .getElementById("editMovieDetailsButton")
    .addEventListener("click", () => {
      const titleMovieEdit = document.getElementById("edit-movie-title");
      const yearMovieEdit = document.getElementById("edit-movie-year");
      const imdbIdMovieEdit = document.getElementById("edit-movie-ImdbID");
      const typeMovieEdit = document.getElementById("edit-movie-type");
      const posterUrlMovieEdit = document.getElementById("edit-movie-poster");
      const countryMovieEdit = document.getElementById("edit-movie-country");
      const languageMovieEdit = document.getElementById("edit-movie-language");
      const genreMovieEdit = document.getElementById("edit-movie-genre");
      const runtimeMovieEdit = document.getElementById("edit-movie-runtime");

      const token = Cookie.get("token");
      let url = `https://movies-app-siit.herokuapp.com/movies/${id}`;

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
            Title: `${titleMovieEdit.value}`,
            Year: `${yearMovieEdit.value}`,
            Country: `${countryMovieEdit.value}`,
            Language: `${languageMovieEdit.value}`,
            Type: `${typeMovieEdit.value}`,
            imdbID: `${imdbIdMovieEdit.value}`,
            Poster: `${posterUrlMovieEdit.value}`,
            Genre: `${genreMovieEdit.value}`,
            Runtime: `${runtimeMovieEdit.value}`,
          }),
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .then(location.reload(false));
    });
}