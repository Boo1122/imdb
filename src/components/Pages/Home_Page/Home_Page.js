import "./Home_Page.css";

export class HomePage {
  constructor() {
    this.HomeContent();
    this.generateUrl();
    this.getMovies();
  }

  generateUrl() {
    return `https://movies-api-siit.herokuapp.com/movies`;
  }

  getMovies(movieData) {
    const url = this.generateUrl();

    fetch(url)
      .then(response => response.json())
      .then(movieData => movieData);
  }

  HomeContent(movieData) {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page-container";

    const posters = document.createElement("div");
    posters.id = "posters";

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", this.movieData.results[0].Poster);

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(img);
  }
}
