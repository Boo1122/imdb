import "./User_Options.css";
import Cookie from "js-cookie";
import {
  addMovieToAPI
} from "./User_Utils";

export class UserOptions {
  constructor() {
    // this.addMovie();
    this.token = Cookie.get("token");
  }

  addMovie() {
    const body = document.getElementById("body");

    const newMovieWrapper = document.createElement("div");
    newMovieWrapper.id = "newMovieContainer";
    newMovieWrapper.classList.add("page");
    newMovieWrapper.classList.add("newMovieWrapper-class");
    newMovieWrapper.style.backgroundImage = "url(./public/img/batman_bk2.jpeg)";

    const movieBox = document.createElement("div");
    movieBox.id = "movieBox";
    movieBox.classList.add("movieBox-class");

    body.appendChild(newMovieWrapper);
    newMovieWrapper.appendChild(movieBox);

    const titleContainer = document.createElement("span");
    titleContainer.classList.add("title-container");
    titleContainer.innerText = "Add New Movie";

    const spanTitle = document.createElement("span");
    spanTitle.classList.add("spanTitle");
    spanTitle.innerText = "Movie Title";
    const movieTitle = document.createElement("input");
    movieTitle.classList.add("movie-Title-class");
    movieTitle.id = "movie-Title-id";

    movieBox.appendChild(titleContainer);
    movieBox.appendChild(spanTitle);
    movieBox.appendChild(movieTitle);

    const spanYear = document.createElement("span");
    spanYear.classList.add("spanTitle");
    spanYear.innerText = "Movie Year";
    const movieYear = document.createElement("input");
    movieYear.classList.add("movieYear");
    movieYear.id = "movieYear-id";

    movieBox.appendChild(spanYear);
    movieBox.appendChild(movieYear);

    const spanImdbID = document.createElement("span");
    spanImdbID.classList.add("span-ImdbID-class");
    spanImdbID.innerText = "Movie ImdbID";
    const movieImdbID = document.createElement("input");
    movieImdbID.classList.add("movie-ImdbID-class");
    movieImdbID.id = "movie-ImdbID-id";

    movieBox.appendChild(spanImdbID);
    movieBox.appendChild(movieImdbID);

    const typeMovieContainer = document.createElement("div");
    typeMovieContainer.id = "typeMovieContainer";
    typeMovieContainer.classList.add("type-movie-container");

    const typeMovie = document.createElement("div");
    typeMovie.id = "typeMovie";
    typeMovie.classList.add("type-of-movie");
    const spanType = document.createElement("span");
    spanType.classList.add("span-movie-Type-class");
    spanType.innerText = "Movie";
    const movieType = document.createElement("button");
    movieType.classList.add("movie-Type-class");
    movieType.setAttribute("type", "radio");
    movieType.setAttribute("name", "select");
    movieType.id = "movie-Type-id";

    const typeSeries = document.createElement("div");
    typeSeries.id = "typeSeries";
    typeSeries.classList.add("type-of-movie");
    const spanTvSeries = document.createElement("span");
    spanTvSeries.classList.add("span-tv-Type-class");
    spanTvSeries.innerText = "Tv Series";
    const tvSeriesType = document.createElement("button");
    tvSeriesType.classList.add("th-series-Type-class");
    tvSeriesType.setAttribute("type", "radio");
    tvSeriesType.setAttribute("name", "select");
    tvSeriesType.id = "th-series-Type-id";

    movieBox.appendChild(typeMovieContainer);
    typeMovieContainer.appendChild(typeMovie);
    typeMovieContainer.appendChild(typeSeries);

    typeMovie.appendChild(spanType);
    typeMovie.appendChild(movieType);
    typeSeries.appendChild(spanTvSeries);
    typeSeries.appendChild(tvSeriesType);

    const spanPoster = document.createElement("span");
    spanPoster.classList.add("span-Poster-class");
    spanPoster.innerText = "Movie Poster";

    const moviePoster = document.createElement("div");
    moviePoster.id = "moviePoster";
    moviePoster.classList.add("movie-poster");

    const moviePosterInput = document.createElement("input");
    moviePosterInput.classList.add("movie-Poster-class");
    moviePosterInput.placeholder = "Image URL";

    const uploadPosterButton = document.createElement("button");
    uploadPosterButton.id = "uploadPosterButton";
    uploadPosterButton.innerText = "Upload Image";

    movieBox.appendChild(spanPoster);
    movieBox.appendChild(moviePoster);

    moviePoster.appendChild(moviePosterInput);
    moviePoster.appendChild(uploadPosterButton);

    const addMovieButton = document.createElement("button");
    addMovieButton.id = "addMovieButton";
    addMovieButton.innerText = "Create Movie";

    movieBox.appendChild(addMovieButton);

    addMovieToAPI();
  }
}