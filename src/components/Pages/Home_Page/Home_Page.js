import "./Home_Page.css";

export class HomePage {
  constructor() {
    this.generateUrl();
    this.getMovies();
    this.homeContainerBox();
  }

  generateUrl() {
    return `https://movies-api-siit.herokuapp.com/movies`;
  }

  getMovies() {
    const url = this.generateUrl();

    fetch(url)
      .then(response => response.json())
      .then(movieData => {
        this.movieData = movieData;
        this.renderMovieList();
      });
  }
  renderMovieList() {
    for (const movie of this.movieData.results) {
      this.homeContent(movie);
    }
  }

  homeContent(movie) {
    const body = document.getElementById("home-page-details");

    const container = document.createElement("div");
    container.id = "home-page-container";

    const posters = document.createElement("div");
    posters.id = "posters";

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

  homeContainerBox() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page-details";

    body.appendChild(container);
  }
}
