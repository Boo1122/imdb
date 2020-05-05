import "./Search_Button.css";
import {
  AdvancedSearch
} from "../Advanced_Search/Advanced_Search";

export class Search {
  constructor() {
    this.createImage();
    this.createInput();
    this.advancedSearch();
    this.hideAdvancedSearch();
  }

  createInput() {
    let inputDiv = document.createElement("div");
    inputDiv.className = "input";
    inputDiv.id = "input-div";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = "input";
    input.style.display = "block";
    input.placeholder = "Type to search";

    header.appendChild(inputDiv);
    inputDiv.appendChild(input);
    header.appendChild(img);
  }

  createImage() {
    let img = document.createElement("img");
    img.id = "img";
    img.src = "./src/components/Home_Page_Header/search-9-16.png";

    document.getElementById("body").appendChild(img);
  }

  advancedSearch() {
    const searchInput = document.getElementById("input");

    searchInput.addEventListener("click", () => {
      let x = document.getElementById("advancedBox");
      if ((x.style.display = "none")) {
        x.style.display = "block";
      }
    });
  }

  hideAdvancedSearch() {
    const img = document.getElementById("img");

    img.addEventListener("click", () => {
      document.getElementById("advancedBox").style.display = "none";
    });
  }

  addSearchInput() {
    let showInput = false;

    img.addEventListener("click", () => {
      if (showInput) {
        document.getElementById("advancedBox").style.display = "none";
      } else {
        document.getElementById("advancedBox").style.display = "block";
      }
      showInput = !showInput;
    });
  }
}