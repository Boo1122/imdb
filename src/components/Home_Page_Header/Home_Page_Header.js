import { createFilters } from "../Pages/Movies_Page/Create_Filters";
import {Search} from "../Home_Page_Header/Search_Button";

export class Header {
  constructor() {
    this.Header();
    this.MoviesButton();
  }

  Header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";
    body.appendChild(header);

    const anchBtn = document.createElement("div");
    anchBtn.id = "anchBtn";
    const anchor = document.createElement("button");
    anchor.classList.add("active", "nav-link");
    anchor.setAttribute("data-target", "login");
    anchor.id = "login";
    anchor.innerHTML = "Login";

  
    let search = new Search();

    const logoBtn = document.createElement("div");
    logoBtn.id = "logoBtnID";
    logoBtn.class = "logoBtnClass";

    const imgLogo = document.createElement("img");
    imgLogo.id = "logoID";
    imgLogo.src = "./src/components/Home_Page_Header/logoFINAL.png";

  
    imgLogo.addEventListener("click", () => {
      location.href = "index.html";
    });



    logoBtn.appendChild(imgLogo);
    header.prepend(logoBtn);

    header.appendChild(anchBtn);
    anchBtn.appendChild(anchor);
  }

  MoviesButton() {
    const header = document.getElementById("header");

    const moviesButtonWrapper = document.createElement("div");
    moviesButtonWrapper.id = "movies-btn-wrapper";

    const movies = document.createElement("button");
    movies.id = "movBtn";
    movies.classList.add("movies-btn", "btn");
    movies.innerText = "Movies";

    moviesButtonWrapper.appendChild(movies);

    createFilters().forEach(_ => moviesButtonWrapper.appendChild(_));

    header.appendChild(moviesButtonWrapper);
  }
}
