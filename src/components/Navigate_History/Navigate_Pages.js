import { navigate } from "./Navigate_History";

export class Pages {
  constructor() {
    this.pages();
  }

  pages() {
    let body = document.getElementById("body");

    let home = document.createElement("div");
    home.id = "home";
    home.classList.add("active", "page", "show-page");

    let movies = document.createElement("div");
    movies.id = "movies";
    movies.classList.add('active',"page", "hide-page");

    let login = document.createElement("div");
    login.id = "login";
    login.classList.add("page", "hide-page");

    body.appendChild(home);
    body.appendChild(movies);
    body.appendChild(login);
  }
}
