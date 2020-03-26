import { moviesClicked } from "./Button_Clicked";

export class MoviesCategoryFilter {
  constructor(text) {
    this.cat = text;
    this.Name(text);
  }

  Name(text) {
    const movieBtn = document.getElementById("movBtn");
   
    const div = document.createElement("div");
    div.id = `${text}-div`;
    div.classList.add("allMovieButtons");
    const p = document.createElement("p");
    p.classList.add("filter-p");
    p.innerText = `${text}`;

    movieBtn.appendChild(div);
    div.appendChild(p);
  
  }
}
