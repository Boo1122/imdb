// import Cookie from "js-cookie";

// export function addMovieToAPI() {
//   const title = document.getElementById('movie-Title-id').value;
//   const year = document.getElementById('movieYear-id').value
//   const imdbID = document.getElementById('movie-ImdbID-id').value
//   const type = document.getElementById('movie-Type-id')
//   const posterUrl = document.getElementById('movie-Poster-id').value

//     document.getElementById("addMovieButton").addEventListener("click", () => {

//         const token = Cookie.get("token");
//         console.log(token);

//         fetch(
//           "https://movies-api-siit.herokuapp.com/movies",
//           {
//             method: "POST", // *GET, POST, PUT, DELETE, etc.
//             mode: "cors", // no-cors, *cors, same-origin
//             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: "same-origin", // include, *same-origin, omit
//             headers: {
//               "Content-Type": "application/json",
//               "X-Auth-Token": token
//             },
//             redirect: "follow", // manual, *follow, error
//             referrerPolicy: "no-referrer", // no-referrer, *client
//             body: JSON.stringify({
//               Title: title,
//               Year:​ ​year,
//               imdbID: imdbID,
//               Type: type,
//               Poster: posterUrl,
//             })
//           }
//         )
//           .then(response => response.json())
//           .then(json => {
//             console.log(json);

//             if (json.accessToken) {
//             let emptyTitleInput = document.getElementById("movie-Title-id");
//             emptyTitleInput.value = "";

//             let emptyYearInput = document.getElementById("movieYear-id");
//             emptyYearInput.value = "";

//             let emptyImdbIDInput = document.getElementById("movie-ImdbID-id");
//             emptyImdbIDInput.value = "";

//             let emptyPosterInput = document.getElementById("movie-Poster-id");
//             emptyPosterInput.value = "";
//             }
//           });
//       });
// }
