export class Pages {
  constructor() {
    this.Pages();
  }

  Pages() {
    let header = document.getElementById("header");

    let home = document.createElement("div");
    home.id = "home";
    home.classList.add("active", "page", "show-page");

    let movies = document.createElement("div");
    movies.id = "movies";
    movies.classList.add("page", "hide-page");

    let login = document.createElement("div");
    login.id = "login";
    login.classList.add("page", "hide-page");

    header.appendChild(home);
    header.appendChild(movies);
    header.appendChild(login);
  }
}
