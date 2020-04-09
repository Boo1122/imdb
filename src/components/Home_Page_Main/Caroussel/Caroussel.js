import "./Caroussel.css";

export class Caroussel {
  constructor() {
    this.carousselSkeleton();
    this.current = 1;
    this.leftButton();
    this.rightButton();
    this.nextSlide();
    this.prevSlide();
    this.slides = document.querySelectorAll(
      "#outsideCarousselID, .innerDivClass"
    );
  }

  carousselSkeleton() {
    const body = document.getElementById("body");

    const carousselWrap = document.createElement("div");
    carousselWrap.id = "carousselWrapID";
    carousselWrap.classList.add("carousselWrapClass");

    const outsideCaroussel = document.createElement("div");
    outsideCaroussel.id = "outsideCarousselID";
    outsideCaroussel.classList.add("outsideCarousselClass");

    const carousselTitleDiv = document.createElement("h1");
    const carousselTitle = document.createTextNode(
      "This is why our users love us!"
    );
    carousselTitleDiv.id = "carousselTitleDivID";
    carousselTitleDiv.classList.add("carousselTitleDivClass");

    const prev = document.createElement("div");
    const prevTop = document.createElement("div");
    const prevBot = document.createElement("div");
    prevTop.classList.add("arrow-top");
    prevBot.classList.add("arrow-bottom");
    prev.classList.add("prev");
    prev.id = "prev";

    const next = document.createElement("div");
    const nextTop = document.createElement("div");
    const nextBot = document.createElement("div");
    nextTop.classList.add("arrow-top2");
    nextBot.classList.add("arrow-bottom2");
    next.classList.add("next");
    next.id = "next";
    /*
    for (let i = 0; i < 7; i++) {
      const innerDiv = document.createElement("div");
      innerDiv.id = "innerDivID";
      innerDiv.classList.add("innerDivClass");
      innerDiv.innerText = i;
      outsideCaroussel.appendChild(innerDiv);
    } */

    const innerDiv1 = document.createElement("div");
    innerDiv1.id = "innerDivID1";

    innerDiv1.innerText = 1;

    const innerDiv2 = document.createElement("div");
    innerDiv2.id = "innerDivID2";

    innerDiv2.innerText = 2;

    const innerDiv3 = document.createElement("div");
    innerDiv3.id = "innerDivID3";

    innerDiv3.innerText = 3;

    const innerDiv4 = document.createElement("div");
    innerDiv4.id = "innerDivID4";

    innerDiv4.innerText = 4;

    const innerDiv5 = document.createElement("div");
    innerDiv5.id = "innerDivID5";

    innerDiv5.innerText = 5;

    const innerDiv6 = document.createElement("div");
    innerDiv6.id = "innerDivID6";

    innerDiv6.innerText = 6;

    const innerDiv7 = document.createElement("div");
    innerDiv7.id = "innerDivID7";

    innerDiv7.innerText = 7;

    carousselWrap.appendChild(prev);
    prev.appendChild(prevTop);
    prev.appendChild(prevBot);

    body.appendChild(carousselWrap);
    carousselWrap.appendChild(outsideCaroussel);
    outsideCaroussel.appendChild(carousselTitleDiv);
    carousselTitleDiv.appendChild(carousselTitle);

    outsideCaroussel.appendChild(innerDiv1);
    outsideCaroussel.appendChild(innerDiv2);
    outsideCaroussel.appendChild(innerDiv3);
    outsideCaroussel.appendChild(innerDiv4);
    outsideCaroussel.appendChild(innerDiv5);
    outsideCaroussel.appendChild(innerDiv6);
    outsideCaroussel.appendChild(innerDiv7);

    carousselWrap.appendChild(next);
    next.appendChild(nextTop);
    next.appendChild(nextBot);
  }

  leftButton() {
    let prev = document.getElementById("prev");
    prev.addEventListener("click", () => {
      this.prevSlide();
    });
  }

  rightButton() {
    let next = document.getElementById("next");
    next.addEventListener("click", () => {
      this.nextSlide();
    });
  }

  nextSlide() {
    this.slides[this.current].className = "innerDivClass";
    this.current = (this.current + 1) % this.slides.length;
    this.slides[this.current].className = "visible";
  }

  prevSlide() {
    this.slides[this.current].className = "innerDivClass";
    this.current = (this.current - 1) % this.slides.length;

    if (this.current == -1) {
      this.current === this.slides.length - 1;
    }
    this.slides[this.current].className = "visible";
  }
}
