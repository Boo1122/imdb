import Cookie from "js-cookie";

export function deleteMovieFromApi(id, getMovies) {
  const token = Cookie.get("token");

  fetch(`https://movies-app-siit.herokuapp.com/movies/${id}`, {
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
  }).then(() => {
    getMovies();
  });
}
