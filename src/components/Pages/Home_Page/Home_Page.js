import "./Home_Page.css";

export class HomePage {
  constructor() {
    this.generateUrl();
    this.getMovies();
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
      this.HomeContent(movie);
    }
  }

  HomeContent(movie) {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page-container";

    const posters = document.createElement("div");
    posters.id = "posters";

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(img);
    posters.appendChild(p);
  }
}
