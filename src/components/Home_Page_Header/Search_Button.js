export class Search {
    constructor() {
        this.CreateImage();
        this.CreateInput();
        this.AddSearchInput();
       
    }
    CreateInput() {
        let inputDiv = document.createElement("div");
        inputDiv.className = "input";
        inputDiv.id = "input-div";

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.id = "input";
        input.placeholder = "search";
       
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
        document.getElementById('body').appendChild(img)

    }


    AddSearchInput() {

        let showInput = false;

        img.addEventListener('click', () => {

        if(showInput) {
            document.getElementById('input').style.display = 'none'
        } else {
            document.getElementById('input').style.display = 'block'
        }
        showInput =!showInput
       });
    }

       

       
}


      
        