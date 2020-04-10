import "./Caroussel.css";

export class Caroussel {
  constructor() {
    this.carousselSkeleton();
    this.slides = [];
    this.current = 0;
    this.next;
    //this.nextSlide();
    //this.prevSlide();
    this.carousel();
    this.leftButton();
    this.rightButton();
  }

  carousselSkeleton() {
    const body = document.getElementById("body");

    const carousselWrap = document.createElement("div");
    carousselWrap.id = "carousselWrapID";
    carousselWrap.classList.add("carousselWrapClass");

    const outsideCaroussel = document.createElement("div");
    outsideCaroussel.id = "outsideCarousselID";
    outsideCaroussel.classList.add("outsideCarousselClass");

    const reviewsContainer = document.createElement("div");
    reviewsContainer.id = "reviewsContainerID";
    reviewsContainer.classList.add("reviewsContainerClass");

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

    const innerDiv1 = document.createElement("div");
    innerDiv1.id = "innerDivID1";
    innerDiv1.classList.add("innerDivClass");
    innerDiv1.classList.add("visible");

    const icon1 = document.createElement("div");
    icon1.classList.add("userIcon");
    icon1.id = "icon1";

    const p1 = document.createElement("p");
    p1.classList.add("review");
    p1.id = "p1";
    p1.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    const innerDiv2 = document.createElement("div");
    innerDiv2.id = "innerDivID2";
    innerDiv2.classList.add("innerDivClass");

    const icon2 = document.createElement("div");
    icon2.classList.add("userIcon");
    icon2.id = "icon2";

    const p2 = document.createElement("p");
    p2.classList.add("review");
    p2.id = "p2";
    p2.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    const innerDiv3 = document.createElement("div");
    innerDiv3.id = "innerDivID3";
    innerDiv3.classList.add("innerDivClass");

    const icon3 = document.createElement("div");
    icon3.classList.add("userIcon");
    icon3.id = "icon3";

    const p3 = document.createElement("p");
    p3.classList.add("review");
    p3.id = "p3";
    p3.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    const innerDiv4 = document.createElement("div");
    innerDiv4.id = "innerDivID4";
    innerDiv4.classList.add("innerDivClass");

    const icon4 = document.createElement("div");
    icon4.classList.add("userIcon");
    icon4.id = "icon4";

    const p4 = document.createElement("p");
    p4.classList.add("review");
    p4.id = "p4";
    p4.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    const innerDiv5 = document.createElement("div");
    innerDiv5.id = "innerDivID5";
    innerDiv5.classList.add("innerDivClass");

    const icon5 = document.createElement("div");
    icon5.classList.add("userIcon");
    icon5.id = "icon5";

    const p5 = document.createElement("p");
    p5.classList.add("review");
    p5.id = "p5";
    p5.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    const innerDiv6 = document.createElement("div");
    innerDiv6.id = "innerDivID6";
    innerDiv6.classList.add("innerDivClass");

    const icon6 = document.createElement("div");
    icon6.classList.add("userIcon");
    icon6.id = "icon6";

    const p6 = document.createElement("p");
    p6.classList.add("review");
    p6.id = "p6";
    p6.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    const innerDiv7 = document.createElement("div");
    innerDiv7.id = "innerDivID7";
    innerDiv7.classList.add("innerDivClass");

    const icon7 = document.createElement("div");
    icon7.classList.add("userIcon");
    icon7.id = "icon7";

    const p7 = document.createElement("p");
    p7.classList.add("review");
    p7.id = "p7";
    p7.innerText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    outsideCaroussel.appendChild(prev);
    prev.appendChild(prevTop);
    prev.appendChild(prevBot);

    body.appendChild(carousselWrap);
    carousselWrap.appendChild(outsideCaroussel);
    carousselWrap.prepend(carousselTitleDiv);
    carousselTitleDiv.appendChild(carousselTitle);

    outsideCaroussel.appendChild(reviewsContainer);

    reviewsContainer.appendChild(innerDiv1);
    innerDiv1.appendChild(icon1);
    innerDiv1.appendChild(p1);
    reviewsContainer.appendChild(innerDiv2);
    innerDiv2.appendChild(icon2);
    innerDiv2.appendChild(p2);
    reviewsContainer.appendChild(innerDiv3);
    innerDiv3.appendChild(icon3);
    innerDiv3.appendChild(p3);
    reviewsContainer.appendChild(innerDiv4);
    innerDiv4.appendChild(icon4);
    innerDiv4.appendChild(p4);
    reviewsContainer.appendChild(innerDiv5);
    innerDiv5.appendChild(icon5);
    innerDiv5.appendChild(p5);
    reviewsContainer.appendChild(innerDiv6);
    innerDiv6.appendChild(icon6);
    innerDiv6.appendChild(p6);
    reviewsContainer.appendChild(innerDiv7);
    innerDiv7.appendChild(icon7);
    innerDiv7.appendChild(p7);

    outsideCaroussel.appendChild(next);
    next.appendChild(nextTop);
    next.appendChild(nextBot);
  }

  carousel(forward = true) {
    const slides = document.getElementsByClassName("visible");
    this.current = slides[0];
    if (forward) {
      this.next =
        this.current.nextElementSibling ||
        this.current.parentElement.firstElementChild;
    } else {
      this.next =
        this.current.previousElementSibling ||
        this.current.parentNode.lastElementChild;
    }
    this.current.classList.remove("visible");
    this.next.classList.add("visible");
  }

  leftButton() {
    const prev = document.getElementById("prev");
    prev.addEventListener("click", () => {
      this.carousel(null, false);
      console.log(this);
    });
  }
  rightButton() {
    const next = document.getElementById("next");
    next.addEventListener("click", () => {
      this.carousel();
    });
  }
}
