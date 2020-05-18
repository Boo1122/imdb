import "./Home_Page.css";
import { Random } from "./random";
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

    body.appendChild(container);
    new Random(Random);
    new Caroussel(Caroussel);
  }
}
