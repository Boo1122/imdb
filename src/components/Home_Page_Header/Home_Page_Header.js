import "./Home_Page_Header.css";
import "../Pages/Movie_Page/Movie_Button.css";
import { Search } from "../Home_Page_Header/Search_Button";
import "../Pages/LogOut_Page/LogOut_Page.css";
import "./Edit_Movies.css";

export class Header {
  constructor() {
    this.header();
    this.homeButton();
    this.addMovies();
    this.moviesButton();
    this.loginButton();
    this.logOutButton();
    this.registerButton();
  }

  header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";

    body.appendChild(header);
  }

  homeButton() {
    new Search();
    const homeDiv = document.createElement("div");
    homeDiv.id = "home-div";

    const homeLogo = document.createElement("img");
    homeLogo.classList.add("nav-link", "home-img");
    homeLogo.setAttribute("data-target", "home-page");
    homeLogo.src = "./public/logoFINAL.png";

    homeDiv.appendChild(homeLogo);
    header.appendChild(homeDiv);
  }

  moviesButton() {
    const header = document.getElementById("header");

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "movie-div";

    const movies = document.createElement("button");
    movies.classList.add("nav-link", "movies-button");
    movies.setAttribute("data-target", "movie-page");
    movies.innerText = "Movies";

    header.appendChild(buttonDiv);
    buttonDiv.appendChild(movies);
  }

  addMovies() {
    const header = document.getElementById("header");

    const addMovieDiv = document.createElement("div");
    addMovieDiv.id = "add-movie-div";

    const addMovieButton = document.createElement("button");
    addMovieButton.classList.add("nav-link", "movies-button");
    addMovieButton.setAttribute("data-target", "add-movie-page");
    addMovieButton.innerHTML = "Add Movie";

    header.appendChild(addMovieDiv);
    addMovieDiv.appendChild(addMovieButton);
  }

  loginButton() {
    const header = document.getElementById("header");

    const loginDiv = document.createElement("div");
    loginDiv.id = "login-div";

    const loginButton = document.createElement("button");
    loginButton.classList.add("nav-link", "login-button");
    loginButton.setAttribute("data-target", "login-page");
    loginButton.innerHTML = "Login";

    header.appendChild(loginDiv);
    loginDiv.appendChild(loginButton);
  }

  logOutButton() {
    const header = document.getElementById("header");

    const logOutDiv = document.createElement("div");
    logOutDiv.id = "logOut-div";

    const logOutButton = document.createElement("button");
    logOutButton.classList.add("nav-link", "logout-button");
    logOutButton.setAttribute("data-target", "logout-page");
    logOutButton.innerHTML = "LogOut";

    header.appendChild(logOutDiv);
    logOutDiv.appendChild(logOutButton);
  }

  registerButton() {
    const header = document.getElementById("header");

    const registerDiv = document.createElement("div");
    registerDiv.id = "register-div";

    const registerButton = document.createElement("button");
    registerButton.classList.add("nav-link", "register-button");
    registerButton.setAttribute("data-target", "register-page");
    registerButton.innerHTML = "Register";

    header.appendChild(registerDiv);
    registerDiv.appendChild(registerButton);
  }
}
