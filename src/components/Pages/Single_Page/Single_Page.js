import "./Single_Page.css";

export class SinglePage {
  constructor() {
    this.homeContainerBox();
  }

  mainContent(movie) {
    const main = document.getElementById("single-movie-page");
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
    const country = document.createElement("p");
    country.className = "country";
    country.innerText = `Country: ${movie.Country}`;

    const language = document.createElement("p");
    language.innerText = `Language: ${movie.Language}`;
    const runtime = document.createElement("p");
    runtime.innerText = `Runtime: ${movie.Runtime}`;
    const year = document.createElement("p");
    year.innerText = `Year: ${movie.Year}`;
    const imdbRating = document.createElement("p");
    imdbRating.innerText = `IMDb Rating: ${movie.imdbRating}`;
    const imdbVotes = document.createElement("p");
    imdbVotes.innerText = `IMDb Votes: ${movie.imdbVotes}`;

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
    posterInfo.appendChild(year);

    posterInfo.appendChild(imdbRating);
    posterInfo.appendChild(imdbVotes);

    posterInfo.appendChild(language);
    posterInfo.appendChild(country);
    posterInfo.appendChild(runtime);
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
      console.log(movieId);
      fetch(`https://movies-api-siit.herokuapp.com/movies/${movieId}`)
        .then((response) => response.json())
        .then((json) => {
          this.mainContent(json);
        });
    }
  }
}
