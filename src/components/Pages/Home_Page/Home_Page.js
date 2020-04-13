import "./Home_Page.css";

export class HomePage {
  constructor() {

    this.homeContainerBox();
  }

  
  homeContainerBox() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page";
    container.classList.add("page", "active");
    container.style.backgroundImage = "url(./public/img/joker_2019.jpg)";
    container.style.opacity = '0.2'

    body.appendChild(container);
  }
}
