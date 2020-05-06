import "./Single_Page.css";
import Cookie from "js-cookie";
import {
  getVotes,
  hightLightLoveButton,
  updateVotesOnUI,
  loveButtonLoadingState,
  loveButtonInitialState,
  updateVotesOnServer,
} from "./SingleUtils";
import { Loader } from "../../Loader/Loader";

export class SinglePage {
  constructor() {
    this.homeContainerBox();
  }

  mainContent(movie) {
    const main = document.getElementById("single-movie-page");
    main.style.backgroundImage =
      "url(./public/img/batman_background_single.jpg)";

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

    const movieYear = document.createElement("span");
    movieYear.classList.add("single-movie-year-cls");
    movieYear.innerText = `(${movie.Year})`;

    //Here are the movie properties
    const facts = document.createElement("div");
    facts.className = "movie-facts";

    const genres = document.createElement("span");
    genres.className = "movie-genres";
    genres.innerText = `Genre: ${movie.Genre}`;

    const posterInfo = document.createElement("div");
    posterInfo.className = "poster-info";
    const movieInfo = document.createElement("p");
    movieInfo.innerText = `Year:  ${movie.Year}  | Country:  ${movie.Country}   | Language:  ${movie.Language}   | Runtime:  ${movie.Runtime}`;

    //Here are the ratings
    const ratingContainer = document.createElement("div");
    ratingContainer.className = "rating-container";
    const bubblesDiv = document.createElement("div");
    bubblesDiv.className = "bubbles-div";
    const imdbLogo = document.createElement("img");
    imdbLogo.className = "imdb-logo";
    imdbLogo.src = "./public/imdb_logo2.png";
    const imdbStar = document.createElement("img");
    imdbStar.className = "imdb-star";
    imdbStar.src = "./public/star.png";
    const imdbRating = document.createElement("p");
    imdbRating.innerText = `${movie.imdbRating} /10`;
    const imdbHeart = document.createElement("img");
    imdbHeart.className = "imdb-heart-votes";
    imdbHeart.src = "./public/imdb_heart.png";
    const imdbVotes = document.createElement("p");
    imdbVotes.id = "imdb-votes";
    imdbVotes.innerText = `Votes: ${movie.imdbVotes}`;

    //Here are the rating buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-div";
    const loveButton = document.createElement("button");
    loveButton.id = "love-button-id";
    loveButton.className = "love-button";
    const loveParagraph = document.createElement("p");
    loveParagraph.innerText = "Love";
    const loveImage = document.createElement("img");
    loveImage.id = "love-image-id";
    loveImage.className = "love-image";
    loveImage.src = "./public/heart_button.png";

    const likeButton = document.createElement("button");
    likeButton.id = "like-button-id";
    likeButton.className = "like-button";
    const likeParagraph = document.createElement("p");
    likeParagraph.innerText = "Like";
    const likeImage = document.createElement("img");
    likeImage.className = "like-image";
    likeImage.src = "./public/like_button.png";

    const dislikeButton = document.createElement("button");
    dislikeButton.id = "dislike-button-id";
    dislikeButton.className = "dislike-button";
    const dislikeParagraph = document.createElement("p");
    dislikeParagraph.innerText = "Dislike";
    const dislikeImage = document.createElement("img");
    dislikeImage.className = "dislike-image";
    dislikeImage.src = "./public/dislike_button.png";

    //appendings
    main.appendChild(contentDiv);
    contentDiv.appendChild(movieContent);
    movieContent.appendChild(poster);
    poster.appendChild(img);
    movieContent.appendChild(movieDetails);
    movieDetails.appendChild(titleDiv);
    titleDiv.appendChild(movieTitle);

    titleDiv.appendChild(movieYear);

    titleDiv.appendChild(facts);
    facts.appendChild(genres);
    titleDiv.appendChild(posterInfo);
    posterInfo.appendChild(movieInfo);

    posterInfo.appendChild(ratingContainer);
    ratingContainer.appendChild(buttonsDiv);
    ratingContainer.appendChild(bubblesDiv);

    bubblesDiv.appendChild(imdbLogo);
    bubblesDiv.appendChild(imdbStar);
    bubblesDiv.appendChild(imdbRating);
    bubblesDiv.appendChild(imdbHeart);
    bubblesDiv.appendChild(imdbVotes);

    buttonsDiv.appendChild(loveButton);
    loveButton.appendChild(loveParagraph);
    loveButton.appendChild(loveImage);

    buttonsDiv.appendChild(likeButton);
    likeButton.appendChild(likeParagraph);
    likeButton.appendChild(likeImage);
    buttonsDiv.appendChild(dislikeButton);
    dislikeButton.appendChild(dislikeParagraph);
    dislikeButton.appendChild(dislikeImage);

    this.ratingButtonsOnClick(movie._id);
  }

  homeContainerBox() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "single-movie-page";
    container.classList.add("page");

    body.appendChild(container);
  }

  ratingButtonsOnClick(movieId) {
    const loveButton = document.getElementById("love-button-id");
    const loader = new Loader(loveButton);

    const likeButton = document.getElementById("like-button-id");
    const dislikeButton = document.getElementById("dislike-button-id");

    loveButton.addEventListener("click", (movie) => {
      const token = Cookie.get("token");
      if (token) {
        console.log("current token", token);
        const votes = getVotes();
        const newVotes = votes + 1;
        console.log("new votes", newVotes);

        loveButtonLoadingState(loveButton, loader);
        updateVotesOnServer(newVotes, movieId).then(({ message }) => {
          if (
            message !==
            "You need to be authenticated to be able to update a movie"
          ) {
            loveButtonInitialState(loveButton, loader);
            updateVotesOnUI(newVotes);
          }
        });

        hightLightLoveButton(loveButton, likeButton, dislikeButton);
      }
    });

    likeButton.addEventListener("click", () => {
      likeButton.style.backgroundColor = "#f4bd01";
      loveButton.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
      dislikeButton.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
    });

    dislikeButton.addEventListener("click", () => {
      dislikeButton.style.backgroundColor = "gray";
      loveButton.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
      likeButton.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
    });
  }

  renderMovie(movieId) {
    if (movieId) {
      fetch(`https://movies-app-siit.herokuapp.com/movies/${movieId}`)
        .then((response) => response.json())
        .then((json) => {
          this.mainContent(json);
          this.renderMovieTrailer(json.imdbID);
        });
    }
  }

  renderMovieTrailer(searchString) {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.myapifilms.com/imdb/idIMDB?idIMDB=${searchString}&token=3ebec604-df12-4647-aee8-aaec21b13c3e&format=json&language=en-us&trailers=1&directors=1&writers=1`
    )
      .then((response) => response.json())
      .then((json) => {
        if (
          json.data &&
          json.data.movies &&
          json.data.movies.length > 0 &&
          json.data.movies[0].trailer.qualities.length > 0
        ) {
          const targetContainer = document.getElementsByClassName("title-div");

          const trailerWrapper = document.createElement("div");
          trailerWrapper.id = "trailer-wrapper";

          const trailerContainer = document.createElement("div");
          trailerContainer.id = "trailer-div";

          const trailerIframe = document.createElement("iframe");
          trailerIframe.id = "trailer-container";
          
          trailerIframe.autoplay = false;
          trailerIframe.width = "560";
          trailerIframe.height = "280";
          trailerIframe.frameBorder = "0";
          trailerIframe.allowFullscreen = true;
          trailerIframe.src = json.data.movies[0].trailer.qualities.slice(
            -1
          )[0].videoURL;

          const trailerBackground = document.createElement("div");
          trailerBackground.id = "trailer-background-div";

          const trailerBackgroundImage = document.createElement("img");
          trailerBackgroundImage.id = "trailer-background-image";
          trailerBackgroundImage.src = "./public/play.png";

          trailerBackgroundImage.addEventListener("click", () => {
            console.log("click play");
            trailerIframe.autoplay = true;
            trailerBackgroundImage.style.display = "none";
          });

          trailerWrapper.appendChild(trailerContainer);
          trailerWrapper.appendChild(trailerBackground);
          trailerBackground.appendChild(trailerBackgroundImage);
          trailerContainer.appendChild(trailerIframe);
          targetContainer[0].appendChild(trailerWrapper);
        }
      });
  }
}
