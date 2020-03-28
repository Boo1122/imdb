export class Search {
    constructor() {
        this.CreateImage();
        this.CreateInput();
        this.RemoveSearchInput();
    }
    CreateInput() {
        let inputDiv = document.createElement("div");
        inputDiv.className = "input";
        inputDiv.id = "input-div";

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.id = "input";
        input.placeholder = "search";

        inputDiv.appendChild(img);
        inputDiv.appendChild(input);
        header.appendChild(inputDiv);


    }

    CreateImage() {

        let img = document.createElement("img");
        img.id = "img";
        img.src = "./src/components/Home_Page_Header/search.png";

        img.addEventListener("click", () => {
            console.log("clicked");
          

        });
        document.getElementById('body').appendChild(img)

    }

  

    RemoveSearchInput() {

        
    
    }


}