import "./Home_Page.css";

export class HomePage {
  constructor() {
    this.HomeContent();
    this.container = document.getElementById("home-page-container");
    this.ContainerDetails();
  }

  HomeContent() {
    const body = document.getElementById("body");

    const container = document.createElement("div");
    container.id = "home-page-container";

    body.appendChild(container);
  }

  ContainerDetails() {
    console.log(this.container);
  }
}
