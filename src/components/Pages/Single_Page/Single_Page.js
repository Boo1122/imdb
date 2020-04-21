import "./Single_Page.css";

export class SinglePage {
  constructor() {
    this.homeContainerBox();
  }

  mainContent(movie) {
    console.log(movie);
    const main = document.getElementById("single-movie-page");
    main.style.backgroundImage =
      "url(./public/img/batman_wallpaper_movie_pg.jpg)";

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

    //Here are the movie properties
    const facts = document.createElement("div");
    facts.className = "movie-facts";

    const genres = document.createElement("span");
    genres.className = "movie-genres";
    genres.innerText = `Genre: ${movie.Genre}`;

    const posterInfo = document.createElement("div");
    posterInfo.className = "poster-info";
    const movieInfo = document.createElement("p");
    movieInfo.innerText = `Realised in: ${movie.Released}   |   ${movie.Country}   |   ${movie.Language}   |   ${movie.Runtime}`;

    //Here is the short description
    const plotDiv = document.createElement("div");
    plotDiv.className = "plot-container";
    const plot = document.createElement("p");
    plot.innerText = `${movie.Plot}`;

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
    imdbVotes.innerText = `Votes: ${movie.imdbVotes}`;

    //Here are the rating buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-div";
    const loveButton = document.createElement("button");
    loveButton.className = "love-button";
    const loveParagraph = document.createElement("p");
    loveParagraph.innerText = "Love";
    const loveImage = document.createElement("img");
    loveImage.className = "love-image";
    loveImage.src = "./public/heart_button.png";

    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    const likeParagraph = document.createElement("p");
    likeParagraph.innerText = "Like";
    const likeImage = document.createElement("img");
    likeImage.className = "like-image";
    likeImage.src = "./public/like_button.png";

    const dislikeButton = document.createElement("button");
    dislikeButton.className = "dislike-button";
    const dislikeParagraph = document.createElement("p");
    dislikeParagraph.innerText = "Dislike";
    const dislikeImage = document.createElement("img");
    dislikeImage.className = "dislike-image";
    dislikeImage.src = "./public/dislike_button.png";

    //Here you have the extra info
    const extraInfo = document.createElement("div");
    extraInfo.className = "extra-info";
    const awards = document.createElement("p");
    awards.innerText = `AWARDS: ${movie.Awards}`;
    /*const director = document.createElement("p");
    director.innerText = `Director: ${movie.Director}`;
    const writer = document.createElement("p");
    writer.innerText = `Writer: ${movie.Writer}`;
    const actors = document.createElement("p");
    actors.innerText = `Actors: ${movie.Actors}`;*/

    //appendings
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
    posterInfo.appendChild(movieInfo);

    posterInfo.appendChild(plotDiv);
    plotDiv.appendChild(plot);

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

    posterInfo.appendChild(extraInfo);
    extraInfo.appendChild(awards);
    /*extraInfo.appendChild(director);
    extraInfo.appendChild(writer);
    extraInfo.appendChild(actors);*/
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
      fetch(`https://movies-api-siit.herokuapp.com/movies/${movieId}`)
        .then(response => response.json())
        .then(json => {
          this.mainContent(json);
          this.renderMovieTrailer(json.imdbID);
        });
    }
  }

  renderMovieTrailer(searchString) {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.myapifilms.com/imdb/idIMDB?idIMDB=${searchString}&token=3ebec604-df12-4647-aee8-aaec21b13c3e&format=json&language=en-us&trailers=1&directors=1&writers=1`
    )
      .then(response => response.json())
      .then(json => {
        if (
          json.data &&
          json.data.movies &&
          json.data.movies.length > 0 &&
          json.data.movies[0].trailer.qualities.length > 0
        ) {
          const targetContainer = document.getElementsByClassName("title-div");

          const trailerContainer = document.createElement("div");

          const trailerIframe = document.createElement("iframe");
          trailerIframe.id = "trailer-container";
          /*trailerIframe.style.backgroundImage =
            "url(./public/play_button_trailer)";
          trailerIframe.style.backgroundSize = "20px 20px";*/

          trailerIframe.width = "560";
          trailerIframe.height = "280";
          trailerIframe.frameBorder = "0";
          trailerIframe.allowFullscreen = true;
          trailerIframe.src = json.data.movies[0].trailer.qualities.slice(
            -1
          )[0].videoURL;

          trailerContainer.appendChild(trailerIframe);
          targetContainer[0].appendChild(trailerContainer);
        }
      });
  }
}
