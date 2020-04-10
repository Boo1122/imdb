import "./Caroussel.css";

export class Caroussel {
  constructor() {
    this.carousselSkeleton();
    this.slides = [];
    this.current = 0;
    this.next;
    //this.nextSlide();
    //this.prevSlide();
    this.rightButton();
    this.leftButton();
    this.carousel();
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
    innerDiv1.classList.add("innerDivClass");
    innerDiv1.classList.add("visible");
    innerDiv1.innerText = "1";

    const innerDiv2 = document.createElement("div");
    innerDiv2.id = "innerDivID2";
    innerDiv2.classList.add("innerDivClass");
    innerDiv2.innerText = "2";

    const innerDiv3 = document.createElement("div");
    innerDiv3.id = "innerDivID3";
    innerDiv3.classList.add("innerDivClass");
    innerDiv3.innerText = "3";

    const innerDiv4 = document.createElement("div");
    innerDiv4.id = "innerDivID4";
    innerDiv4.classList.add("innerDivClass");
    innerDiv4.innerText = "4";

    const innerDiv5 = document.createElement("div");
    innerDiv5.id = "innerDivID5";
    innerDiv5.classList.add("innerDivClass");
    innerDiv5.innerText = "5";

    const innerDiv6 = document.createElement("div");
    innerDiv6.id = "innerDivID6";
    innerDiv6.classList.add("innerDivClass");
    innerDiv6.innerText = "6";

    const innerDiv7 = document.createElement("div");
    innerDiv7.id = "innerDivID7";
    innerDiv7.classList.add("innerDivClass");
    innerDiv7.innerText = "7";

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
  /*
  //VARIANTA UNU
  nextSlide() {
    const slides = document.querySelectorAll(
      "#outsideCaroussel, .innerDivClass"
    );
    for (let i = 0; i < slides.length; i++) {
      for (const slide of slides) {
        if ((slides.className = "visible")) {
          slide[i].classList.remove("visible");
          slide[i].classList.add("innerDivClass");
        } else {
          slide[i].classList.add("visible");
          slide[i].classList.remove("innerDivClass");
        }
        this.current++;
        console.log(slide);
        console.log(this.current);
      }
    }
  } */

  carousel(forward = true) {
    const slides = document.querySelectorAll("#outsideCaroussel, .visible");
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
    console.log(this.current);
    console.log(slides);
  }

  leftButton() {
    let prev = document.getElementById("prev");
    prev.addEventListener("click", () => {
      this.carousel.bind(null, false);
    });
  }
  rightButton() {
    let next = document.getElementById("next");
    next.addEventListener("click", () => {
      this.carousel();
    });
  }

  /* VARIANTA DOI
  rightButton() {
    let current = 0;
    let next = document.getElementById("next");
    const slides = document.querySelectorAll(
      "#outsideCaroussel, .innerDivClass"
    );
    next.addEventListener("click", () => {
      current--;
      slides.style.left = current * 300 + "px";
      if (current < 0) {
        next.style.display = "block";
      }
      if (current <= -2) {
        next.style.display = "none";
      }
      console.log(this.current);
      console.log(slides);
    });
  }

  leftButton() {
    let current = 0;
    let prev = document.getElementById("prev");
    const slides = document.querySelectorAll(
      "#outsideCaroussel, .innerDivClass"
    );
    prev.addEventListener("click", () => {
      current++;
      slides.style.left = current * 300 + "px";
      if (current > -2) {
        prev.style.display = "block";
      }
      if (current >= 0) {
        prev.style.display = "none";
      }
    });
  }
} 

VARIANTA DOI

VARIANTA TREI
  prevSlide() {
    const slides = document.getElementsByClassName("innerDivClass");
    slides[this.current].className = "visible";
    this.current = (this.current - 1) % slides.length;

    if (this.current == -1) {
      this.current === slides.length - 1;
    }
    slides[this.current].className = "innerDivClass";
  }

VARIANTA PATRU
nextSlide() {
    this.current++;
    console.log(this.current);
    const slides = document.getElementsByClassName("comments");
    console.log(slides);
    if (this.current <= slides.length) {
      for (const slide of slides) {
        slide.classList.remove("visible");
        slide.classList.add("innerDivClass");
      }
    }
  }

  prevSlide() {
    let slides = document.querySelectorAll(
      "#outsideCarousselID, .innerDivClass"
    );
  } */
}
