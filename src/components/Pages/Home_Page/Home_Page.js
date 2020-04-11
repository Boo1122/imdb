import "./Home_Page.css";

export class HomePage {
  constructor() {
    this.generateUrl();
    this.getMovies();
    this.homeContainerBox();
  }

  generateUrl(par) {
    return `https://movies-api-siit.herokuapp.com/movies${par}`;
  }

  getMovies() {
    const url = this.generateUrl("?take=10");

    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
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
    const body = document.getElementById("home-page");

    const container = document.createElement("div");
    container.id = "home-page-container";

    const posters = document.createElement("div");
    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);
    img.classList.add("nav-link", "poster");
    img.setAttribute("data-target", "single-movie-page");

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(img);
  }

  homeContainerBox() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page";
    container.classList.add("page", "active");
    container.style.backgroundImage = "url(./public/img/joker_2019.jpg)";

    body.appendChild(container);
  }
}
