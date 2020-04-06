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

    const next = document.createElement("div");
    const nextTop = document.createElement("div");
    const nextBot = document.createElement("div");
    nextTop.classList.add("arrow-top2");
    nextBot.classList.add("arrow-bottom2");
    next.classList.add("next");
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
    innerDiv1.classList.add("innerDivClass");
    innerDiv1.innerText = 1;

    const innerDiv2 = document.createElement("div");
    innerDiv2.id = "innerDivID2";
    innerDiv2.classList.add("innerDivClass");
    innerDiv2.innerText = 2;

    const innerDiv3 = document.createElement("div");
    innerDiv3.id = "innerDivID3";
    innerDiv3.classList.add("innerDivClass");
    innerDiv3.innerText = 3;

    const innerDiv4 = document.createElement("div");
    innerDiv4.id = "innerDivID4";
    innerDiv4.classList.add("innerDivClass");
    innerDiv4.innerText = 4;

    const innerDiv5 = document.createElement("div");
    innerDiv5.id = "innerDivID5";
    innerDiv5.classList.add("innerDivClass");
    innerDiv5.innerText = 5;

    const innerDiv6 = document.createElement("div");
    innerDiv6.id = "innerDivID6";
    innerDiv6.classList.add("innerDivClass");
    innerDiv6.innerText = 6;

    const innerDiv7 = document.createElement("div");
    innerDiv7.id = "innerDivID7";
    innerDiv7.classList.add("innerDivClass");
    innerDiv7.innerText = 7;

    body.appendChild(carousselWrap);
    carousselWrap.appendChild(outsideCaroussel);
    outsideCaroussel.appendChild(carousselTitleDiv);
    carousselTitleDiv.appendChild(carousselTitle);

    outsideCaroussel.appendChild(prev);
    prev.appendChild(prevTop);
    prev.appendChild(prevBot);

    outsideCaroussel.appendChild(innerDiv1);
    outsideCaroussel.appendChild(innerDiv2);
    outsideCaroussel.appendChild(innerDiv3);
    outsideCaroussel.appendChild(innerDiv4);
    outsideCaroussel.appendChild(innerDiv5);
    outsideCaroussel.appendChild(innerDiv6);
    outsideCaroussel.appendChild(innerDiv7);

    outsideCaroussel.appendChild(next);
    next.appendChild(nextTop);
    next.appendChild(nextBot);
  }
}
