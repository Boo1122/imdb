export function addMovie() {
    document.getElementById("addMovieButton").addEventListener("click", () => {
        console.log(
          document.cookie
            .split(";")
            .find(element => {
              if (element.includes("token")) return true;
            })
            .split("=")[1]
        );
        const token = document.cookie
          .split(";")
          .find(element => {
            if (element.includes("token")) return true;
          })
          .split("=")[1];
      
        fetch(
          "https://movies-api-siit.herokuapp.com/movies/5e725d024fb1460022d1d4c4",
          {
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
              Title: `${title}`,
              Year:​ ​`${year}`,
              imdbID: `${imdbID}`,
              Type: `${type}`,
              Poster: `${posterUrl}`
            })
          }
        )
          .then(response => response.json())
          .then(json => {
            console.log(json);
          });
      });
}
