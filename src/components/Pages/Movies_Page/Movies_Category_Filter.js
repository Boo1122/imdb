export class MoviesCategoryFilter {
  constructor(text) {
    this.cat = text;
    this.Title(text);
  }

  Title(text) {
    const movieBtn = document.getElementById("movBtn");

    const div = document.createElement("div");
    div.id = `${text}-div`;
    const p = document.createElement("p");
    p.innerText = `${text}`;

    movieBtn.appendChild(div);
    div.appendChild(p);
  }
}
