import {
  createFilters
} from "../Pages/Movies_Page/Create_Filters";
import {
  Search
} from "../Home_Page_Header/Search_Button";

import {navigate} from "../Navigate_History/Navigate_History"
import {Pages} from "../Navigate_History/Navigate_Pages"

export class Header {
  constructor() {
    this.Header();
    this.MoviesButton();
    navigate.init();
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
    anchorLogin.classList.add("nav-link");
    anchorLogin.setAttribute("data-target", "login");
    anchorLogin.id = "login";
    anchorLogin.innerHTML = "Login";


    let search = new Search();

    const logoBtn = document.createElement("div");
    logoBtn.id = "home";
    logoBtn.classList.add("logoBtnClass");

    const imgLogo = document.createElement("img");
    imgLogo.id = "logoID";
    imgLogo.classList.add("nav-link");
    imgLogo.setAttribute("data-target", "home");
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
    movies.classList.add("nav-link","movies-btn", "btn");
    movies.setAttribute("data-target", "movies")
    movies.innerText = "Movies";

    moviesButtonWrapper.appendChild(movies);

    createFilters().forEach(_ => moviesButtonWrapper.appendChild(_));

    header.appendChild(moviesButtonWrapper);
    let pages = new Pages();
  }
}