import "./Home_Page_Header.css";
import { createFilters } from "../Pages/Movies_Page/Create_Filters";
import { Search } from "../Home_Page_Header/Search_Button";

import { navigate } from "../Navigate_History/Navigate_History";

export class Header {
  constructor() {
    this.Header();
    this.MovBtn();
  }

  Header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";
    body.appendChild(header);

    const login = document.createElement("div");
    login.id = "anchBtn";
    const anchorLogin = document.createElement("button");
    anchorLogin.classList.add("nav-link", "page", "active");
    anchorLogin.setAttribute("data-target", "login");
    anchorLogin.id = "login";
    anchorLogin.innerHTML = "Login";

    let search = new Search();

    const logoBtn = document.createElement("div");
    logoBtn.id = "home";
    logoBtn.classList.add("logoBtnClass");

    const imgLogo = document.createElement("img");
    imgLogo.id = "logoID";
    imgLogo.classList.add("nav-link", "page", "active");
    imgLogo.setAttribute("data-target", "logo");
    imgLogo.src = "./src/components/Home_Page_Header/logoFINAL.png";

    // imgLogo.addEventListener("click", () => {
    //   location.href = "index.html";
    // });

    logoBtn.appendChild(imgLogo);
    header.prepend(logoBtn);
    login.appendChild(anchorLogin);
    header.appendChild(login);
  }

  MoviesButton() {
    const header = document.getElementById("header");

    const moviesButtonWrapper = document.createElement("div");
    moviesButtonWrapper.id = "movies-btn-wrapper";

    const movies = document.createElement("button");
    movies.id = "movBtn";
    movies.classList.add("nav-link", "page", "active", "movies-btn", "btn");
    movies.setAttribute("data-target", "movies");
    movies.innerText = "Movies";

    moviesButtonWrapper.appendChild(movies);

    createFilters().forEach(_ => moviesButtonWrapper.appendChild(_));

    header.appendChild(moviesButtonWrapper);
  }

  MovBtn() {
    const header = document.getElementById("header");

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "movBtn";
    buttonDiv.classList.add("nav-link", "page", "active", "movies-btn", "btn");
    buttonDiv.className = "dropdown";

    const button = document.createElement("p");
    button.setAttribute("data-target", "movies");
    button.classList.add("dropbtn");
    button.innerText = "Movies";

    const buttonBody = document.createElement("div");
    buttonBody.classList.add("dropdown-content");

    const title = document.createElement("p");
    title.id = "mov-button-title";
    title.innerText = "Title";

    const year = document.createElement("p");
    year.id = "mov-button-year";
    year.innerText = "Year";

    const genre = document.createElement("p");
    genre.id = "mov-button-genre";
    genre.innerText = "Genre";

    header.appendChild(buttonDiv);
    buttonDiv.appendChild(button);
    buttonDiv.appendChild(buttonBody);
    buttonBody.appendChild(title);
    buttonBody.appendChild(year);
    buttonBody.appendChild(genre);
  }
}
