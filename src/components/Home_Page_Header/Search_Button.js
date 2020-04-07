import "./Search_Button.css";

export class Search {
  constructor() {
    this.createImage();
    this.addSearchInput();
    this.createInput();
  }

  createInput() {
    let inputDiv = document.createElement("div");
    inputDiv.className = "input";
    inputDiv.id = "input-div";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = "input";
    input.placeholder = "Type to search";

    header.appendChild(inputDiv);
    inputDiv.appendChild(input);
    header.appendChild(img);
  }

  createImage() {
    let img = document.createElement("img");
    img.id = "img";
    img.src = "./src/components/Home_Page_Header/search.png";

    document.getElementById("body").appendChild(img);
  }

  addSearchInput() {
    let showInput = false;

    img.addEventListener("click", () => {
      if (showInput) {
        document.getElementById("input").style.display = "none";
      } else {
        document.getElementById("input").style.display = "block";
      }
      showInput = !showInput;
    });
  }
}
