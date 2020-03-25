// import {navigate} from './components/Navigate_History/Navigate_History';

export class Header {
  constructor() {
    this.Header();
  }

  Header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    body.appendChild(header);

    const movies = document.createElement("button");
    movies.classList.add("movies-btn", "btn");
    movies.innerText = "Movies";

    const anchor = document.createElement("a");
    anchor.classList.add("active", "nav-link");
    anchor.setAttribute("data-target", "login");
    anchor.id = "login";
    anchor.innerHTML = "Login";

    header.appendChild(movies);
    header.appendChild(anchor);
  }
}
