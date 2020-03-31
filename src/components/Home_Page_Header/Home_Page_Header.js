import "./Home_Page_Header.css";
import "../Pages/Movies_Page/Movie_Button.css";
import "./Login_Button.css";
import { Search } from "../Home_Page_Header/Search_Button";
import { navigate } from "../Navigate_History/Navigate_History";
import { Pages } from "../Navigate_History/Navigate_Pages";
// import {Switch} from "../Pages/Login_Form/Switch_Login_Register"

export class Header {
  constructor() {
    this.Header();
    this.MovBtn();
    this.LoginBtn();
    navigate.init();
  }

  Header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";
    body.appendChild(header);

    new Search();
    new Pages();
    // new Switch()

    const logoBtn = document.createElement("div");
    logoBtn.id = "home";

    const imgLogo = document.createElement("img");
    imgLogo.id = "home";
    imgLogo.classList.add("nav-link", "home");
    imgLogo.setAttribute("data-target", "home");
    imgLogo.src = "./src/components/Home_Page_Header/logoFINAL.png";

    logoBtn.appendChild(imgLogo);
    header.appendChild(logoBtn);
  }

  LoginBtn() {
    const header = document.getElementById("header");

    const loginDiv = document.createElement("div");
    loginDiv.id = "loginBtn";
    loginDiv.className = "dropdown";

    const login = document.createElement("button");
    login.classList.add("nav-link", "login");
    login.setAttribute("data-target", "login");
    login.innerHTML = "Login";

    const loginBody = document.createElement("div");
    loginBody.classList.add("dropdown-content");

    const loginP = document.createElement("p");
    loginP.id = "log-button";
    loginP.innerText = "Login";

    const registerP = document.createElement("p");
    registerP.id = "reg-button";
    registerP.innerText = "Register";

    header.appendChild(loginDiv);
    loginDiv.appendChild(login);
    loginDiv.appendChild(loginBody);

    loginBody.appendChild(loginP);
    loginBody.appendChild(registerP);
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
