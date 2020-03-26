export class MoviesCategoryFilter {
  constructor(text) {
    this.cat = text;
    this.Name(text);
  }

  Name(text) {
    const movieBtn = document.getElementById("movBtn");

    const div = document.createElement("div");
    div.id = `${text}-div`;
    const p = document.createElement("p");
    p.classList.add("allMovieButtons");
    p.innerText = `${text}`;

    movieBtn.appendChild(div);
    div.appendChild(p);

  }
}


export function moviesClicked() {

  

  
  const movieBtn = document.getElementById("movBtn");

  movieBtn.addEventListener("click", event => {
   
    
    let title = new MoviesCategoryFilter('Title');
    let year = new MoviesCategoryFilter('Year');
    return title , year;
  });
}
