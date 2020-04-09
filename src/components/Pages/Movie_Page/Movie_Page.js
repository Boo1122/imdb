import "./Movie_Page.css";
import { navigate } from "../../Navigate_History/Navigate_History";

export class MoviePage {
  constructor() {
    this.moviePage();
    this.generateUrl();
    this.getMovies();
    this.moviesPagination();
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";
    container.appendChild(movieListContainer);

    body.appendChild(container);
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
    const body = document.getElementById("movie-list-container");

    const container = document.createElement("div");
    container.setAttribute("data-target", "single-movie-page");
    container.addEventListener("click", navigate.nav);

    container.id = movie._id;
    container.classList.add("movie-page-container");

    const posters = document.createElement("div");

    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(img);
  }

  moviesPagination() {
    this.paginationFetch();

    const body = document.getElementById("body");
    const paginationMovie = document.getElementById("movie-page");

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";
    paginationDiv.id = "pagDiv";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.classList.add("nav-link");
    previous.className = "previous";
    previous.innerText = `Previous`;

    const next = document.createElement("button");
    next.id = "next-movie";
    next.classList.add("nav-link");
    next.className = "next";
    next.innerText = `Next`;

    const page1 = document.createElement("p");
    page1.innerText = "1";
    page1.classList.add("nav-link", "page1");
    page1.setAttribute("data-target", ""); //"movie-page1" intre ghilimele

    const page2 = document.createElement("p");
    page2.innerText = "2";
    page2.classList.add("nav-link", "page2");

    const page3 = document.createElement("p");
    page3.innerText = "3";
    page3.classList.add("nav-link", "page3");

    const page4 = document.createElement("p");
    page4.innerText = "4";
    page4.classList.add("nav-link", "page4");

    const page5 = document.createElement("p");
    page5.innerText = "5";
    page5.classList.add("nav-link", "page5");

    const page6 = document.createElement("p");
    page6.innerText = "6";
    page6.classList.add("nav-link", "page6");

    const page7 = document.createElement("p");
    page7.innerText = "7";
    page7.classList.add("nav-link", "page7");

    const page8 = document.createElement("p");
    page8.innerText = "8";
    page8.classList.add("nav-link", "page8");

    const page9 = document.createElement("p");
    page9.innerText = "9";
    page9.classList.add("nav-link", "page9");

    const page10 = document.createElement("p");
    page10.innerText = "10";
    page10.classList.add("nav-link", "page10");

    body.appendChild(paginationMovie);
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(previous);

    paginationDiv.appendChild(page1);
    paginationDiv.appendChild(page2);
    paginationDiv.appendChild(page3);
    paginationDiv.appendChild(page4);
    paginationDiv.appendChild(page5);
    paginationDiv.appendChild(page6);
    paginationDiv.appendChild(page7);
    paginationDiv.appendChild(page8);
    paginationDiv.appendChild(page9);
    paginationDiv.appendChild(page10);

    paginationDiv.appendChild(next);
  }

  paginationFetch() {
    fetch(`https://movies-api-siit.herokuapp.com/movies`)
      .then((response) => response.json())
      .then((movies) => {
        this.movies = movies;
        console.log(movies.pagination);
      });
  }
}
