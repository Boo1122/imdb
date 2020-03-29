import "./Search_Button.css";

export class Search {
  constructor() {
    this.CreateImage();
    this.AddSearchInput();
    this.CreateInput();
  }
  CreateInput() {
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

  CreateImage() {
    let img = document.createElement("img");
    img.id = "img";
    img.src = "./src/components/Home_Page_Header/search.png";

    img.addEventListener("click", () => {
      console.log("clicked");
    });
    document.getElementById("body").appendChild(img);
  }

  AddSearchInput() {
    let showInput = false;

    img.addEventListener("click", () => {
      if (showInput) {
        document.getElementById("input").style.display = "none";
      } else {
        document.getElementById("input").style.display = "block";
        document.getElementById("img").style.display = "none";
      }
      showInput = !showInput;
    });
  }
}