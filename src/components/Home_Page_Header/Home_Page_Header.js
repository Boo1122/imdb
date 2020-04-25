import "./Home_Page_Header.css";
import "../Pages/Movie_Page/Movie_Button.css";
import "./Login_Button.css";
import { Search } from "../Home_Page_Header/Search_Button";
import "../Pages/LogOut_Page/LogOut_Page.css";
import "./Edit_Movies.css";

export class Header {
  constructor() {
    this.header();
    this.homeButton();
    this.moviesButton();
    this.loginButton();
    this.logOutButton();
    this.editMovies();
    this.registerButton();
  }

  header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";
    body.appendChild(header);
    header.style.backgroundImage = "url(./public/img/55376.jpg)";
    header.style.borderBottom = "5px solid salmon";
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
    header.style.backgroundImage = "url(./public/img/55376.jpg)";
    const buttonDiv = document.createElement("div");
    buttonDiv.id = "movBtn";
    buttonDiv.className = "dropdown";

    const movies = document.createElement("button");
    movies.classList.add("nav-link", "movies", "movies-btn", "btn");
    movies.setAttribute("data-target", "movie-page");
    movies.innerText = "Movies";

    const buttonBody = document.createElement("div");
    buttonBody.classList.add("dropdown-content");

    header.appendChild(buttonDiv);
    buttonDiv.appendChild(movies);
    buttonDiv.appendChild(buttonBody);
  }


  editMovies() {
    const header = document.getElementById("header");

    const editDiv = document.createElement("div");
    editDiv.id = "editButton";

    let token = document.cookie;
    if (token) {
    editDiv.style.display = "block";
    } else {
      editDiv.style.display = "none";
    }

    const editButton = document.createElement("button");
    editButton.classList.add("nav-link", "edit");
    editButton.setAttribute("data-target", "edit");
    editButton.innerHTML = "Edit";

    header.appendChild(editDiv);
    editDiv.appendChild(editButton);
  }

  loginButton() {
    const header = document.getElementById("header");

    const loginDiv = document.createElement("div");
    loginDiv.id = "loginBtn";
    let token = document.cookie;
    if (token === '') {
      loginDiv.style.display = "block";
    } else {
      loginDiv.style.display = "none";
    }

    const loginButton = document.createElement("button");
    loginButton.classList.add("nav-link", "login");
    loginButton.setAttribute("data-target", "login-page");
    loginButton.innerHTML = "Login";

    header.appendChild(loginDiv);
    loginDiv.appendChild(loginButton);
  }

  logOutButton() {
    const header = document.getElementById("header");

    const logOutDiv = document.createElement("div");
    logOutDiv.id = "logOutBtn";

    let token = document.cookie;
    if (token) {
      logOutDiv.style.display = "block";
    } else {
      logOutDiv.style.display = "none";
    }


    const logOutButton = document.createElement("button");
    logOutButton.classList.add("nav-link", "logout");
    logOutButton.setAttribute("data-target", "logout-page");
    logOutButton.innerHTML = "LogOut";

    header.appendChild(logOutDiv);
    logOutDiv.appendChild(logOutButton);
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
