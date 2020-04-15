import "./Single_Page.css";

export class SinglePage {
  constructor() {
    this.homeContainerBox();

  }

  mainContent(movie) {
    console.log(movie);
    const main = document.getElementById("single-movie-page");
    main.style.backgroundImage =
      "url(./public/img/batman_wallpaper_movie_pg.jpg)";

    main.innerHTML = null;
    const contentDiv = document.createElement("div");
    contentDiv.id = "main-div";

    const movieContent = document.createElement("div");
    movieContent.id = "movie-content";

    const poster = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", movie.Poster);
    img.className = "single-poster-img";

    const movieDetails = document.createElement("section");
    movieDetails.id = "poster-wrapper";
    const titleDiv = document.createElement("div");
    titleDiv.className = "title-div";
    const movieTitle = document.createElement("h1");
    movieTitle.className = "single-movie-title";
    movieTitle.innerText = `${movie.Title}`;

    const facts = document.createElement("div");
    facts.className = "movie-facts";

    const genres = document.createElement("span");
    genres.className = "movie-genres";
    genres.innerText = `Genre: ${movie.Genre}`;

    const posterInfo = document.createElement("div");
    posterInfo.className = "poster-info";
    const movieInfo = document.createElement("p");
    movieInfo.innerText = `Realised in: ${movie.Released}   |   ${movie.Country}   |   ${movie.Language}   |   ${movie.Runtime}`;

    //Here is the personalities container
    const peopleDiv = document.createElement("div");
    peopleDiv.className = "people-info";
    const director = document.createElement("p");
    director.innerText = `Director: ${movie.Director}`;
    const writer = document.createElement("p");
    writer.innerText = `Writer: ${movie.Writer}`;
    const actors = document.createElement("p");
    actors.innerText = `Actors: ${movie.Actors}`;

    //Here is the short description
    const plotDiv = document.createElement("div");
    plotDiv.className = "plot-container";
    const plot = document.createElement("p");
    plot.innerText = `${movie.Plot}`;

    main.appendChild(contentDiv);
    contentDiv.appendChild(movieContent);
    movieContent.appendChild(poster);
    poster.appendChild(img);
    movieContent.appendChild(movieDetails);
    movieDetails.appendChild(titleDiv);
    titleDiv.appendChild(movieTitle);
    titleDiv.appendChild(facts);
    facts.appendChild(genres);
    titleDiv.appendChild(posterInfo);
    posterInfo.appendChild(movieInfo);

    posterInfo.appendChild(peopleDiv);
    peopleDiv.appendChild(director);
    peopleDiv.appendChild(writer);
    peopleDiv.appendChild(actors);

    posterInfo.appendChild(plotDiv);
    plotDiv.appendChild(plot);
  }

  homeContainerBox() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "single-movie-page";
    container.classList.add("page");

    body.appendChild(container);
  }

  renderMovie(movieId) {
    if (movieId) {
      fetch(`https://movies-api-siit.herokuapp.com/movies/${movieId}`)
        .then(response => response.json())
        .then(json => {
          this.mainContent(json);
          this.renderMovieTrailer(json.imdbID);
        });
    }

  }

  renderMovieTrailer(searchString) {
    fetch(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${searchString}&token=3ebec604-df12-4647-aee8-aaec21b13c3e&format=json&language=en-us&trailers=1&directors=1&writers=1`)
        .then(response => response.json())
        .then(json => {
            if(json.data && json.data.movies && json.data.movies.length > 0 && json.data.movies[0].trailer.qualities.length > 0){
              const body = document.getElementById("body");

              const trailerContainer = document.createElement('iframe');
              trailerContainer.id = "trailer-container";
              trailerContainer.width="640";
              trailerContainer.height="360";
              trailerContainer.frameBorder="0";
              trailerContainer.allowFullscreen=true;
              trailerContainer.src = json.data.movies[0].trailer.qualities[0].videoURL;
              body.appendChild(trailerContainer);
              console.log(trailerContainer);
            }
            
        })
  }
}
