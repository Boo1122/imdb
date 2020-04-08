export class MoviePage {
  constructor() {
    this.moviePage();
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");

    body.appendChild(container);
  }
}
