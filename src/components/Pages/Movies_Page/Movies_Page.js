import "./Movies_Page.css";

export class MoviesPage {
  constructor() {
    this.generateUrl();
    this.getMovies();
    this.moviesPagination();
  }

  generateUrl(par) {
    return `https://movies-api-siit.herokuapp.com/movies${par}`;
  }

  getMovies() {
    const url = this.generateUrl("?take=10&skip=10");

    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
        this.movieData = movieData;
        this.renderMovieList();
      });
  }

  renderMovieList() {
    for (const movie of this.movieData.results) {
      this.moviesContent(movie);
    }
  }

  moviesContent(movie) {
    const body = document.getElementById("movie-page");

    const container = document.createElement("div");
    container.id = "movie-page-container";

    const posters = document.createElement("div");
    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);
    img.classList.add("nav-link");
    img.setAttribute("data-target", "single-movie-page");

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(img);
  }

  moviesPagination() {
    const body = document.getElementById("body");

    const paginationDiv = document.createElement("div");
    paginationDiv.id = "pagination-div";

    const previous = document.createElement("p");
    previous.id = "previous-movie";
    previous.className = "previous";
    previous.innerText = `<= Previous`;

    const next = document.createElement("p");
    next.id = "next-movie";
    next.className = "next";
    next.innerText = `Next =>`;

    body.appendChild(paginationDiv);
    paginationDiv.appendChild(previous);
    paginationDiv.appendChild(next);
  }
}
