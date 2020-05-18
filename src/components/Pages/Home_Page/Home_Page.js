import "./Home_Page.css";
import { Random } from "./RandomWordsHomePage";
import { Caroussel } from "./Caroussel";

export class HomePage {
  constructor() {
    this.homeContainerBox();
  }

  homeContainerBox() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page";
    container.classList.add("page", "active");
    container.style.background = "black";

    const countdown = document.createElement("img");
    countdown.src = "./public/cinema.gif";

    body.appendChild(container);
    container.appendChild(countdown);
    new Random(Random);
    new Caroussel(Caroussel);
  }
}
