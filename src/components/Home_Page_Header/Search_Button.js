import "./Search_Button.css";
import {
  AdvancedSearch
} from "../Advanced_Search/Advanced_Search";

export class Search {
  constructor() {
    this.createImage();
    this.createInput();
    document.addEventListener("click", this.addAdvanced);
  }

  createInput() {
    let inputDiv = document.createElement("div");
    inputDiv.className = "input";
    inputDiv.id = "input-div";

    header.appendChild(inputDiv);
    header.appendChild(img);
  }

  createImage() {
    let img = document.createElement("img");
    img.id = "img";
    img.classList.add("imageSearch");
    img.src = "./public/search-9-24.png";

    document.getElementById("body").appendChild(img);
  }

  addAdvanced(event) {
    let container = document.getElementById("advancedBox");

    if (event.target.classList.contains("imageSearch")) {
      container.classList.toggle("showDropdown");
    } else if (
      !event.target.classList.contains("search-title-input") &&
      !event.target.classList.contains("search-imdbRating-input")
    ) {
      container.classList.add("showDropdown");
      // console.log("dsadasdads");
    }
  }
}