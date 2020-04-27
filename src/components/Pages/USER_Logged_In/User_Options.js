import "./User_Options.css";
import Cookie from "js-cookie";

export class UserOptions {
  constructor() {
    this.token = Cookie.get("token");
    this.checkForTokenFirst();
  }

  checkForTokenFirst() {
    const edit = document.getElementById("addMovie");

    edit.addEventListener("click", () => {
      const token = this.token;
      console.log(token);
      if (token) {
        this.addMovie();
      }
    });
  }

  addMovie() {
    const body = document.getElementById("body");

    const newMovieWrapper = document.createElement("div");
    newMovieWrapper.id = "newMovieContainer";
    newMovieWrapper.classList.add("newMovieWrapper-class");
    newMovieWrapper.classList.add("page");
    newMovieWrapper.style.backgroundImage =
      "url(./public/img/the_dark_knight_dark.jpg)";

    const movieBox = document.createElement("div");
    movieBox.id = "movieBox";
    movieBox.classList.add("movieBox-class");

    body.appendChild(newMovieWrapper);
    newMovieWrapper.appendChild(movieBox);

    const spanTitle = document.createElement("span");
    spanTitle.classList.add("spanTitle");
    spanTitle.innerText = "Movie title:";
    const movieTitle = document.createElement("input");
    movieTitle.classList.add("movie-Title-class");

    movieBox.appendChild(spanTitle);
    movieBox.appendChild(movieTitle);

    const spanYear = document.createElement("span");
    spanYear.classList.add("spanTitle");
    spanYear.innerText = "Movie year:";
    const movieYear = document.createElement("input");
    movieYear.classList.add("movieYear");

    movieBox.appendChild(spanYear);
    movieBox.appendChild(movieYear);

    const spanImdbID = document.createElement("span");
    spanImdbID.classList.add("span-ImdbID-class");
    spanImdbID.innerText = "Movie ImdbID:";
    const movieImdbID = document.createElement("input");
    movieImdbID.classList.add("movie-ImdbID-class");

    movieBox.appendChild(spanImdbID);
    movieBox.appendChild(movieImdbID);

    const spanType = document.createElement("span");
    spanType.classList.add("span-movie-Type-class");
    spanType.innerText = "Movie";
    const movieType = document.createElement("button");
    movieType.classList.add("movie-Type-class");
    movieType.setAttribute("type", "radio");
    movieType.setAttribute("name", "select");

    const spanTvSeries = document.createElement("span");
    spanTvSeries.classList.add("span-tv-Type-class");
    spanTvSeries.innerText = "Tv Series";
    const tvSeriesType = document.createElement("button");
    tvSeriesType.classList.add("th-series-Type-class");
    tvSeriesType.setAttribute("type", "radio");
    tvSeriesType.setAttribute("name", "select");

    movieBox.appendChild(spanType);
    movieBox.appendChild(movieType);
    movieBox.appendChild(spanTvSeries);
    movieBox.appendChild(tvSeriesType);

    const spanPoster = document.createElement("span");
    spanPoster.classList.add("span-Poster-class");
    spanPoster.innerText = "Movie Poster";
    const moviePoster = document.createElement("input");
    moviePoster.classList.add("movie-Poster-class");

    movieBox.appendChild(spanPoster);
    movieBox.appendChild(moviePoster);

    const addMovieButton = document.createElement("button");
    addMovieButton.id = "addMovieButton";
    addMovieButton.innerText = "Add Movie";

    movieBox.appendChild(addMovieButton);
  }
}