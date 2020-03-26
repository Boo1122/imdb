// import {navigate} from './components/Navigate_History/Navigate_History';
import { MoviesCategoryFilter } from "../Pages/Movies_Page/Movies_Category_Filter";

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
    movBtn.id = "movBtn";

    const movies = document.createElement("button");
    movies.classList.add("movies-btn", "btn");
    movies.innerText = "Movies";

    const anchBtn = document.createElement("div");
    anchBtn.id = "anchBtn";

    const anchor = document.createElement("button");
    anchor.classList.add("active", "nav-link");
    anchor.setAttribute("data-target", "login");
    anchor.id = "login";
    anchor.innerHTML = "Login";

    let inputDiv = document.createElement("div");
    inputDiv.className = "input";
    inputDiv.id = "input-div";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = "input";
    input.placeholder = "search";

    let img = document.createElement("img");
    img.id = "img";
    img.src = "./src/components/Home_Page_Header/search.png";

    img.addEventListener("click", () => {
      console.log("clicked");
    });

    inputDiv.appendChild(img);
    inputDiv.appendChild(input);
    header.appendChild(inputDiv);

    header.appendChild(movBtn);
    movBtn.appendChild(movies);

    header.appendChild(anchBtn);
    anchBtn.appendChild(anchor);
  }
}
