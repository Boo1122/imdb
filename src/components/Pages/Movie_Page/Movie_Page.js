import "./Movie_Page.css";
import {
  navigate
} from "../../Navigate_History/Navigate_History";
import Cookie from "js-cookie";
import {
  deleteMovieFromApi
} from "../USER_Logged_In/Delete_Movie";
import {
  EditMoviePage
} from "../Edit_Movie_Page/Edit_Movie_Page";

export class MoviePage {
  constructor() {
    this.number = 10;
    this.moviePage();
    this.generateUrl();
    this.getMovies();
    this.moviesPagination();
    this.numberPages();
    this.restMoviePage();

    this.fetchMoviesByUrl = this.fetchMoviesByUrl.bind(this);
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");
    container.style.backgroundColor = 'black';

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";

    body.appendChild(container);
    container.appendChild(movieListContainer);
  }

  generateUrl(skip) {
    return `https://movies-app-siit.herokuapp.com/movies?take=10${
      skip ? "&skip=" + skip : ""
    }`;
  }

  getMovies(skip) {
    const url = this.generateUrl(skip);
    this.fetchMoviesByUrl(url);
  }

  fetchMoviesByUrl(url) {
    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
        this.movieData = movieData;
        this.renderMovieList();
        this.currentPage = this.movieData.pagination.currentPage;
        this.setCurrentPage();
        console.log(movieData);
      });
  }

  setCurrentPage() {
    const allPageButtons = document.getElementsByClassName("nr-of-pages");
    for (const pageButton of allPageButtons) {
      pageButton.classList.remove("actives");
    }

    const id = `${this.currentPage}_pageButton`;
    document.getElementById(id).classList.add("actives");

    let prev = document.getElementById("previous-movie");
    if (this.currentPage === 1) {
      prev.disabled = true;
      prev.style.opacity = 0.5;
    } else {
      prev.disabled = false;
      prev.style.opacity = 1.0;
    }

    let next = document.getElementById("next-movie");

    if (this.currentPage === 15) {
      next.disabled = true;
      next.style.opacity = 0.5;
    } else {
      next.disabled = false;
      next.style.opacity = 1.0;
    }
  }

  renderMovieList(movie) {
    const body = document.getElementById("movie-list-container");
    body.innerHTML = null;

    this.movieData.results.forEach((movie) => {
      this.moviesContent(movie, body);

      const anotherBox = document.createElement("div");
      body.appendChild(anotherBox);

      const deleteMovieBox = document.createElement("div");
      deleteMovieBox.classList.add("deleteMovie");
      anotherBox.appendChild(deleteMovieBox);

      const editMovieBox = document.createElement("div");
      editMovieBox.classList.add("editMovieBox");
      anotherBox.appendChild(editMovieBox);

      deleteMovieBox.addEventListener("click", () => {
        deleteMovieFromApi(movie._id, this.getMovies.bind(this));
      });

      const token = Cookie.get("token");

      if (token) {
        const deleteMov = document.createElement("span");
        deleteMov.classList.add("delete-single-movie");
        deleteMov.setAttribute("title", "Delete Movie");
        deleteMov.innerText = "X";
        deleteMovieBox.appendChild(deleteMov);

        const x = (id) => () => {
          console.log(id);
        };

        const editMovieButton = document.createElement("button");
        editMovieButton.classList.add("edit-movie-button-cls");
        editMovieButton.classList.add("nav-link", "movie");
        editMovieButton.setAttribute("title", "Edit Movie");
        editMovieButton.setAttribute("data-target", "editMovieContainer");
        editMovieButton.innerText = "E";
        editMovieButton.addEventListener("click", x(movie._id));
        editMovieBox.appendChild(editMovieButton);
        let editMovieID = movie._id;
        console.log(editMovieID);

        editMovieButton.addEventListener("click", navigate.nav);

      }

      if (token === "undefined") {
        const deleteX = document.getElementsByClassName("delete-single-movie");
        for (const x of deleteX) {
          x.style.display = "none";
        }
      }
    });
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

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);

    posters.appendChild(img);
  }

  moviesPagination() {
    const body = document.getElementById("body");
    const paginationMovie = document.getElementById("movie-page");
    paginationMovie.classList.add("actives");

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";
    paginationDiv.id = "pagDiv";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.className = "previous";
    previous.innerText = `< Previous`;

    previous.addEventListener("click", () => {
      this.getMovies((this.movieData.pagination.currentPage - 2) * 10);
    });

    const next = document.createElement("button");
    next.id = "next-movie";
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
    paginationDiv.appendChild(previous);

    for (let i = 1; i <= 15; i++) {
      const page = document.createElement("button");
      page.id = `${i}_pageButton`;
      page.classList.add("nr-of-pages");

      page.innerText = `${i}`;
      store.push(page[i]);

      pagesContainer.appendChild(page);
    }

    paginationDiv.appendChild(next);
  }

  restMoviePage() {
    const movieButton = document.getElementById("movBtn");
    movieButton.addEventListener("click", () => this.getMovies());
  }

  numberPages() {
    const pages = document.getElementsByClassName("nr-of-pages");

    for (let i = 0; i < pages.length; i++) {
      pages[i].addEventListener("click", (event) => {
        this.getMovies((event.target.innerText - 1) * 10);
      });
    }
  }
}