import "./Caroussel.css";

export class Caroussel {
  constructor() {
    this.carousselSkeleton();
  }

  carousselSkeleton() {
    const body = document.getElementById("body");

    const carousselWrap = document.createElement("div");
    carousselWrap.id = "carousselWrapID";
    carousselWrap.classList.add("carousselWrapClass");

    const outsideCaroussel = document.createElement("div");
    outsideCaroussel.id = "outsideCarousselID";
    outsideCaroussel.classList.add("outsideCarousselClass");

    const carousselTitle = document.createElement("h1");
    carousselTitle.id = "carousselTitleID";
    carousselTitle.classList.add("carousselTitleClass");

    body.appendChild(carousselWrap);

    carousselWrap.appendChild(outsideCaroussel);
    outsideCaroussel.appendChild(carousselTitle);
  }
}
