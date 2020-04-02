import "./Single_Page.css";

export class SinglePage {
  constructor() {
    this.mainContent();
  }

  mainContent() {
    const main = document.getElementById("body");
    const contentDiv = document.createElement("div");
    contentDiv.id = "main-div";

    const movieContent = document.createElement("div");
    movieContent.id = "movie-content";

    const poster = document.createElement("div");
    poster.id = "single-movie-poster";
    const img = document.createElement("img");
    img.setAttribute("src", "./src/components/Photos/terminator-photo.jpg");
    img.className = "single-poster-img";

    const movieDetails = document.createElement("section");
    movieDetails.id = "poster-wrapper";
    const titleDiv = document.createElement("div");
    titleDiv.className = "title-div";
    const movieTitle = document.createElement("h1");
    movieTitle.className = "single-movie-title";
    movieTitle.innerText = "Terminator Genesys";

    const facts = document.createElement("div");
    facts.className = "movie-facts";
    const genres = document.createElement("span");
    genres.className = "movie-genres";
    genres.innerText = "Genres: Science Fiction, Action, Adventure";

    const posterInfo = document.createElement("div");
    posterInfo.className = "poster-info";
    const tagline = document.createElement("h3");
    tagline.className = "tagline";
    tagline.innerText = "Reset the future";

    const overviewDiv = document.createElement("div");
    overviewDiv.classList.add("overview-div");
    const textForOverview = document.createElement("p");
    textForOverview.innerText = `"The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever."`;

    const castList = document.createElement("ol");
    castList.classList.add("cast-list", "actors", "director");
    const firstLi = document.createElement("li");
    firstLi.className = "profile";
    const director = document.createElement("p");
    director.innerText = "James Cameron";
    const characters = document.createElement("p");
    characters.innerText = "Characters by James Cameron";

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
    posterInfo.appendChild(tagline);

    titleDiv.appendChild(overviewDiv);
    overviewDiv.appendChild(posterInfo);
    posterInfo.appendChild(textForOverview);

    overviewDiv.appendChild(castList);
    castList.appendChild(firstLi);
    firstLi.appendChild(director);
    firstLi.appendChild(characters);
  }
}
