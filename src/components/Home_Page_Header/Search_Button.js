import "./Search_Button.css";
import {
  AdvancedSearch
} from "../Advanced_Search/Advanced_Search";

export class Search {
  constructor() {
    this.createImage();
    this.createInput();
    this.addAdvancedSearch();

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
    img.src = "./src/components/Home_Page_Header/search-9-24.png";

    document.getElementById("body").appendChild(img);
  }


  addAdvancedSearch() {

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