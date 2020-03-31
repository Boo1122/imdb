import "./Home_Page_Header.css";

import { Search } from "../Home_Page_Header/Search_Button";
import { navigate } from "../Navigate_History/Navigate_History";
import { Pages } from "../Navigate_History/Navigate_Pages";
import { RegisterForm } from "../Pages/Register_Form/Register_Form";
import { LoginForm } from "../Pages/Login_Form/Login_Form";

export class Header {
  constructor() {
    this.Header();
    this.MovBtn();
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
    let pages = new Pages();
    let register = new RegisterForm();

    const logoBtn = document.createElement("div");
    logoBtn.id = "home";

    const imgLogo = document.createElement("img");
    imgLogo.id = "home";
    imgLogo.classList.add("nav-link", "home");
    imgLogo.setAttribute("data-target", "home");
    imgLogo.src = "./src/components/Home_Page_Header/logoFINAL.png";

    logoBtn.appendChild(imgLogo);
    header.appendChild(logoBtn);
    login.appendChild(anchorLogin);
    header.appendChild(login);
  }

  MovBtn() {
    const header = document.getElementById("header");

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "movBtn";
    buttonDiv.className = "dropdown";

    const movies = document.createElement("button");
    movies.setAttribute("data-target", "movies");
    movies.classList.add("nav-link", "movies-btn", "btn");
    movies.innerText = "Movies";

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
    buttonDiv.appendChild(movies);
    buttonDiv.appendChild(buttonBody);
    buttonBody.appendChild(title);
    buttonBody.appendChild(year);
    buttonBody.appendChild(genre);
  }
}
