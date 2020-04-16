import "./Movie_Page.css";
import {
  navigate
} from "../../Navigate_History/Navigate_History";

export class MoviePage {
  constructor() {
    this.moviePage();
    this.generateUrl();
    this.getMovies();
    this.moviesPagination();
    this.numberPages();
    this.deleteMovie();
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");
    container.style.backgroundImage = "url(./public/img/star_wars_sword.jpg)";

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";

    body.appendChild(container);
    container.appendChild(movieListContainer);
  }

  generateUrl(skip) {
    return `https://movies-api-siit.herokuapp.com/movies?take=10${
      skip ? "&skip=" + skip : ""
    }`;
  }

  getMovies(skip) {
    const url = this.generateUrl(skip);

    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
        this.movieData = movieData;
        this.renderMovieList();
        console.log(this.movieData.pagination);
      });
  }

  renderMovieList() {
    const body = document.getElementById("movie-list-container");
    body.innerHTML = null;
    for (const movie of this.movieData.results) {
      this.moviesContent(movie, body);
    }
  }

  moviesContent(movie, body) {
    const container = document.createElement("div");
    container.setAttribute("data-target", "single-movie-page");
    container.addEventListener("click", navigate.nav);

    container.id = movie._id;
    container.classList.add("movie-page-container");

    const posters = document.createElement("div");

    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const deleteMov = document.createElement("span");
    deleteMov.classList.add("delete-single-movie");
    deleteMov.setAttribute("title", "Delete Movie");
    deleteMov.innerText = "X";
    deleteMov.style.display = "none";

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(deleteMov);
    posters.appendChild(img);
  }

  moviesPagination() {
    const body = document.getElementById("body");
    const paginationMovie = document.getElementById("movie-page");

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";
    paginationDiv.id = "pagDiv";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.classList.add("nav-link");
    previous.className = "previous";
    previous.innerText = `< Previous`;

    previous.addEventListener("click", () => {
      this.getMovies(this.movieData.pagination.currentPage * 10 - 20);
    });

    const next = document.createElement("button");
    next.id = "next-movie";
    next.classList.add("nav-link");
    next.className = "next";
    next.innerText = `Next >`;
    next.addEventListener("click", () => {
      this.getMovies(this.movieData.pagination.currentPage * 10);
    });

    let store = [];
    const pagesContainer = document.createElement("div");
    pagesContainer.id = "pages-container";

    body.appendChild(paginationMovie);
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(pagesContainer);
    pagesContainer.appendChild(previous);

    for (let i = 1; i <= 10; i++) {
      const page = document.createElement("p");
      page.classList.add("nr-of-pages");
      page.innerText = `${i}`;
      store.push(page[i]);

      pagesContainer.appendChild(page);
    }

    pagesContainer.appendChild(next);
  }

  numberPages() {
    const pages = document.getElementsByClassName("nr-of-pages");

    for (const page of pages) {
      page.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        this.getMovies((event.target.innerText - 1) * 10);
      });
    }
  }

  deleteMovie() {
    const allMovies = document.getElementsByClassName("delete-single-movie");

    for (const movie of allMovies) {
      movie.addEventListener("click", (event) => {
        console.log(event.target);
      });
    }
  }
}