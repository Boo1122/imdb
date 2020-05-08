import "./Edit_Movie_Page.css";
import Cookie from "js-cookie";
import { navigate } from "../../Navigate_History/Navigate_History";
import { editMovieToAPI } from "./Edit_Utils";

export class EditMoviePage {
  constructor() {
    this.editMovie();
    this.token = Cookie.get("token");
  }

  editMovie() {
    const body = document.getElementById("body");

    const editMovieWrapper = document.createElement("div");
    editMovieWrapper.id = "editMovieContainer";
    editMovieWrapper.classList.add("page");
    editMovieWrapper.classList.add("editMovieWrapper-class");

    const editMovieBox = document.createElement("div");
    editMovieBox.id = "editMovieBox";
    editMovieBox.classList.add("editMovieBox-class");

    body.appendChild(editMovieWrapper);
    editMovieWrapper.appendChild(editMovieBox);

    const titleContainer = document.createElement("span");
    titleContainer.classList.add("title-container");
    titleContainer.innerText = "Edit Movie Details";

    const spanTitle = document.createElement("span");
    spanTitle.innerText = "Edit Movie Title";
    const movieTitle = document.createElement("input");
    movieTitle.id = "edit-movie-title";

    editMovieBox.appendChild(titleContainer);
    editMovieBox.appendChild(spanTitle);
    editMovieBox.appendChild(movieTitle);

    const spanYear = document.createElement("span");
    spanYear.innerText = "Edit Year";
    const movieYear = document.createElement("input");
    movieYear.id = "edit-movie-year";

    editMovieBox.appendChild(spanYear);
    editMovieBox.appendChild(movieYear);

    const spanImdbID = document.createElement("span");
    spanImdbID.innerText = "Edit Movie Imdb-ID";
    const movieImdbID = document.createElement("input");
    movieImdbID.id = "edit-movie-ImdbID";

    editMovieBox.appendChild(spanImdbID);
    editMovieBox.appendChild(movieImdbID);

    const spanType = document.createElement("span");
    spanType.innerText = "Edit Type";
    const movieType = document.createElement("input");
    movieType.id = "edit-movie-type";

    editMovieBox.appendChild(spanType);
    editMovieBox.appendChild(movieType);

    const spanPoster = document.createElement("span");
    spanPoster.innerText = "Change Movie Poster";

    const moviePosterInput = document.createElement("input");
    moviePosterInput.id = "edit-movie-poster";

    editMovieBox.appendChild(spanPoster);
    editMovieBox.appendChild(moviePosterInput);

    const editMovieDetailsButton = document.createElement("button");
    editMovieDetailsButton.id = "editMovieDetailsButton";
    editMovieDetailsButton.innerText = "Edit Movie";

    editMovieBox.appendChild(editMovieDetailsButton);
  }
  // editMovieToAPI()
}
