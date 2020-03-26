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

    const movBtn = document.createElement("div");
    movBtn.className = "movBtn";
    const movies = document.createElement("button");
    movies.classList.add("movies-btn", "btn");
    movies.id = "movies-button";
    movies.innerText = "Movies";

    const anchBtn = document.createElement("div");
    anchBtn.className = "anchBtn";
    const anchor = document.createElement("button");
    anchor.classList.add("active", "nav-link");
    anchor.setAttribute("data-target", "login");
    anchor.id = "login";
    anchor.innerHTML = "Login";

    header.appendChild(movBtn);
    movBtn.appendChild(movies);

    header.appendChild(anchBtn);
    anchBtn.appendChild(anchor);
  }
}
