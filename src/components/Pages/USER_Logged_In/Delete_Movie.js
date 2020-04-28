import Cookie from "js-cookie";

export function deleteMovieFromApi() {
  const allMovies = document.getElementsByClassName("movie-page-container");
  for (const eachMovie of allMovies) {
    const delMov = eachMovie.id;

    const token = Cookie.get("token");

    fetch(`https://movies-app-siit.herokuapp.com/movies/${delMov}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }
}
