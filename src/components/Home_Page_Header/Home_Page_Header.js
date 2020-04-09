import "./Home_Page_Header.css";
import "../Pages/Movies_Page/Movie_Button.css";
import "./Login_Button.css";
import { Search } from "../Home_Page_Header/Search_Button";
import { navigate } from "../Navigate_History/Navigate_History";

export class Header {
  constructor() {
    this.header();
    this.homeButton();
    this.moviesButton();
    this.loginButton();
    this.registerButton();
  }

  header() {
    const body = document.getElementById("body");
    //body.style.backgroundImage = "url(./public/img/Dark_Knight_back1.jpg)";

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";
    body.appendChild(header);
  }

  homeButton() {
    new Search();
    const homeButton = document.createElement("div");
    homeButton.id = "home";

    const homeLogo = document.createElement("img");
    homeLogo.id = "home";
    homeLogo.classList.add("nav-link", "home");
    homeLogo.setAttribute("data-target", "home-page");
    homeLogo.src = "./src/components/Home_Page_Header/logoFINAL.png";

    homeButton.appendChild(homeLogo);
    header.appendChild(homeButton);
  }

  moviesButton() {
    const header = document.getElementById("header");

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "movBtn";
    buttonDiv.className = "dropdown";

    const movies = document.createElement("button");
    movies.classList.add("nav-link", "movies", "movies-btn", "btn");
    movies.setAttribute("data-target", "movie-page");
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

  loginButton() {
    const header = document.getElementById("header");

    const loginDiv = document.createElement("div");
    loginDiv.id = "loginBtn";

    const loginButton = document.createElement("button");
    loginButton.classList.add("nav-link", "login");
    loginButton.setAttribute("data-target", "login-page");
    loginButton.innerHTML = "Login";

    header.appendChild(loginDiv);
    loginDiv.appendChild(loginButton);
  }

  registerButton() {
    const header = document.getElementById("header");

    const registerDiv = document.createElement("div");
    registerDiv.id = "registerBtn";

    const registerButton = document.createElement("button");
    registerButton.classList.add("nav-link", "register");
    registerButton.setAttribute("data-target", "register-page");
    registerButton.innerHTML = "Register";

    header.appendChild(registerDiv);
    registerDiv.appendChild(registerButton);
  }
}
