import "./Movie_Page.css";
import {
  navigate
} from "../../Navigate_History/Navigate_History";
import Cookie from "js-cookie";
import {
  deleteMovieFromApi
} from "../LoggedInUserFunctionality/LoggedInDelete_Movie";
import {
  EditMoviePage
} from "../Edit_Movie_Page/Edit_Movie_Page";
import {
  editMovieToAPI
} from "../Edit_Movie_Page/Edit_Utils";
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
    const mainContainer = document.createElement("div");
    mainContainer.id = "movie-page";
    mainContainer.classList.add("page");
    mainContainer.style.backgroundColor = "black";

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";

    body.appendChild(mainContainer);
    mainContainer.appendChild(movieListContainer);
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

    let previous = document.getElementById("previous-movie");
    if (this.currentPage === 1) {
      previous.disabled = true;
      previous.style.opacity = 0.5;
    } else {
      previous.disabled = false;
      previous.style.opacity = 1.0;
    }

    let next = document.getElementById("next-movie");

    if (this.currentPage === 10) {
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

      const deleteMovieDiv = document.createElement("div");
      body.appendChild(deleteMovieDiv);

      const deleteMovieBox = document.createElement("div");
      deleteMovieBox.classList.add("deleteMovie");
      deleteMovieDiv.appendChild(deleteMovieBox);

      const editMovieBox = document.createElement("div");
      editMovieBox.classList.add("editMovieBox");
      deleteMovieDiv.appendChild(editMovieBox);
      deleteMovieBox.addEventListener("click", () => {
        if (confirm("Are you sure you want to DELETE this movie?")) {
          deleteMovieFromApi(movie._id, this.getMovies.bind(this));
          console.log("You pressed OK!");
        } else {
          console.log("You pressed Cancel!");
        }
      });
      const token = Cookie.get("token");

      if (token) {
        const deleteMovieImage = document.createElement("img");
        deleteMovieImage.src = "./public/delete_button.png";
        deleteMovieImage.classList.add("delete-single-movie");
        deleteMovieImage.setAttribute("title", "Delete Movie");

        deleteMovieBox.appendChild(deleteMovieImage);

        const x = (id) => () => {
          editMovieToAPI(id);
          let Title = document.querySelector("#edit-movie-title");
          Title.value = movie.Title;
          let Year = document.querySelector("#edit-movie-year");
          Year.value = movie.Year;
          let Country = document.querySelector("#edit-movie-country");
          Country.value = movie.Country;
          let Language = document.querySelector("#edit-movie-language");
          Language.value = movie.Language;
          let Type = document.querySelector("#edit-movie-type");
          Type.value = movie.Type;
          let ImdbID = document.querySelector("#edit-movie-ImdbID");
          ImdbID.value = movie.imdbID;
          let Poster = document.querySelector("#edit-movie-poster");
          Poster.value = movie.Poster;
          let genre = document.querySelector("#edit-movie-genre");
          genre.value = movie.Genre;
          let runtime = document.querySelector("#edit-movie-runtime");
          runtime.value = movie.Runtime;
        };

        const editMovieButton = document.createElement("img");
        editMovieButton.src = "./public/edit_button.png";
        editMovieButton.classList.add("edit-movie-button-cls");
        editMovieButton.classList.add("nav-link", "movie");
        editMovieButton.setAttribute("title", "Edit Movie");
        editMovieButton.setAttribute("data-target", "edit-movie-page");
        editMovieButton.addEventListener("click", x(movie._id));
        editMovieBox.appendChild(editMovieButton);
        let editMovieID = movie._id;

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
    const singleMovieContainer = document.createElement("div");
    singleMovieContainer.setAttribute("data-target", "single-movie-page");
    singleMovieContainer.addEventListener("click", navigate.nav);

    singleMovieContainer.id = movie._id;
    singleMovieContainer.classList.add("movie-page-container");

    const posters = document.createElement("div");

    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    body.appendChild(singleMovieContainer);
    singleMovieContainer.appendChild(posters);
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

    let storePages = [];
    const pagesContainer = document.createElement("div");
    pagesContainer.id = "pages-container";

    body.appendChild(paginationMovie);
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(pagesContainer);
    paginationDiv.appendChild(previous);

    for (let i = 1; i <= 10; i++) {
      const page = document.createElement("button");
      page.id = `${i}_pageButton`;
      page.classList.add("nr-of-pages");

      page.innerText = `${i}`;
      storePages.push(page[i]);

      pagesContainer.appendChild(page);
    }

    paginationDiv.appendChild(next);
  }

  restMoviePage() {
    const movieDiv = document.getElementById("movie-div");
    movieDiv.addEventListener("click", () => this.getMovies());
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