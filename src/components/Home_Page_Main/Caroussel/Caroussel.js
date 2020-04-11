import "./Caroussel.css";

export class Caroussel {
  constructor() {
    this.carousselSkeleton();
    this.slides = [];
    this.current = 0;
    this.next;
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
      "THIS IS WHY OUR USERS LOVE US!"
    );
    carousselTitleDiv.id = "carousselTitleDivID";
    carousselTitleDiv.classList.add("carousselTitleDivClass");

    const prev = document.createElement("div");
    const prevTop = document.createElement("div");
    const prevBot = document.createElement("div");
    prevTop.classList.add("arrow-top");
    prevBot.classList.add("arrow-bottom");
    prev.classList.add("prevBtn");
    prev.id = "prev";

    const next = document.createElement("div");
    const nextTop = document.createElement("div");
    const nextBot = document.createElement("div");
    nextTop.classList.add("arrow-top2");
    nextBot.classList.add("arrow-bottom2");
    next.classList.add("nextBtn");
    next.id = "next";

    const innerDiv1 = document.createElement("div");
    innerDiv1.id = "innerDivID1";
    innerDiv1.classList.add("innerDivClass");
    innerDiv1.classList.add("visible");
    innerDiv1.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv1.style.backgroundSize = "100%, 30%";
    innerDiv1.style.backgroundRepeat = "no-repeat";

    const icon1 = document.createElement("div");
    icon1.classList.add("userIcon");
    icon1.id = "icon1";
    const img1 = document.createElement("img");
    img1.classList.add("iconImg");
    img1.setAttribute("src", "../icons/avatar_photos/avatar1.png");
    icon1.appendChild(img1);

    const usDiv1 = document.createElement("div");
    usDiv1.id = "usDiv1";
    usDiv1.classList.add("usDiv");

    const username1 = document.createElement("p");
    username1.innerText = "Frida Kahlo";
    username1.classList.add("username");

    const usActivity1 = document.createElement("p");
    usActivity1.innerText = "Member since 2017";
    usActivity1.classList.add("activity");

    const p1 = document.createElement("p");
    p1.classList.add("review");
    p1.id = "p1";
    p1.innerText =
      "Before watching the films, I always go to MyIMDb to see the rating. On this platform, you can also read reviews from art lovers and critics. This resource can rightly be called number 1 in the world. The website is fun to use.";

    const innerDiv2 = document.createElement("div");
    innerDiv2.id = "innerDivID2";
    innerDiv2.classList.add("innerDivClass");
    innerDiv2.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv2.style.backgroundSize = "100%, 30px";
    innerDiv2.style.backgroundRepeat = "no-repeat";

    const icon2 = document.createElement("div");
    icon2.classList.add("userIcon");
    icon2.id = "icon2";
    const img2 = document.createElement("img");
    img2.classList.add("iconImg");
    img2.setAttribute("src", "../icons/avatar_photos/avatar2.png");
    icon2.appendChild(img2);

    const usDiv2 = document.createElement("div");
    usDiv2.id = "usDiv2";
    usDiv2.classList.add("usDiv");

    const username2 = document.createElement("p");
    username2.innerText = "Margaret Thatcher";
    username2.classList.add("username");

    const usActivity2 = document.createElement("p");
    usActivity2.innerText = "Member since 2019";
    usActivity2.classList.add("activity");

    const p2 = document.createElement("p");
    p2.classList.add("review");
    p2.id = "p2";
    p2.innerText =
      "Gives you lots of interesting information on movies and actors. If you have questions regarding any movie I would definitely go to MyIMDb. It is my one and only stop for every movie news. Simply amazing";

    const innerDiv3 = document.createElement("div");
    innerDiv3.id = "innerDivID3";
    innerDiv3.classList.add("innerDivClass");
    innerDiv3.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv3.style.backgroundSize = "100%, 30px";
    innerDiv3.style.backgroundRepeat = "no-repeat";

    const icon3 = document.createElement("div");
    icon3.classList.add("userIcon");
    icon3.id = "icon3";
    const img3 = document.createElement("img");
    img3.classList.add("iconImg");
    img3.setAttribute("src", "../icons/avatar_photos/avatar3.png");
    icon3.appendChild(img3);

    const usDiv3 = document.createElement("div");
    usDiv3.id = "usDiv3";
    usDiv3.classList.add("usDiv");

    const username3 = document.createElement("p");
    username3.innerText = "Martin Luther King";
    username3.classList.add("username");

    const usActivity3 = document.createElement("p");
    usActivity3.innerText = "VIP since 2018";
    usActivity3.classList.add("activity");

    const p3 = document.createElement("p");
    p3.classList.add("review");
    p3.id = "p3";
    p3.innerText =
      "I always check the ratings of a movie or box set here before deciding whether to watch it or not, and given the huge number of voters the ratings are very reliable. I love how you can filter by release date and genre! ";

    const innerDiv4 = document.createElement("div");
    innerDiv4.id = "innerDivID4";
    innerDiv4.classList.add("innerDivClass");
    innerDiv4.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv4.style.backgroundSize = "100%, 20px";
    innerDiv4.style.backgroundRepeat = "no-repeat";

    const icon4 = document.createElement("div");
    icon4.classList.add("userIcon");
    icon4.id = "icon4";
    const img4 = document.createElement("img");
    img4.classList.add("iconImg");
    img4.setAttribute("src", "../icons/avatar_photos/avatar4.png");
    icon4.appendChild(img4);

    const usDiv4 = document.createElement("div");
    usDiv4.id = "usDiv4";
    usDiv4.classList.add("usDiv");

    const username4 = document.createElement("p");
    username4.innerText = "Friedrich Nietzsche";
    username4.classList.add("username");

    const usActivity4 = document.createElement("p");
    usActivity4.innerText = "Member since 2016";
    usActivity4.classList.add("activity");

    const p4 = document.createElement("p");
    p4.classList.add("review");
    p4.id = "p4";
    p4.innerText =
      "When my friend says to watch this movie, because it's cool. I don't believe him. I trust only Imdb. If rating is low, I would never watch it, even if my friend tied me to a chair in front of a screen. I can easily navigate in this website!";

    const innerDiv5 = document.createElement("div");
    innerDiv5.id = "innerDivID5";
    innerDiv5.classList.add("innerDivClass");
    innerDiv5.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv5.style.backgroundSize = "100%, 20px";
    innerDiv5.style.backgroundRepeat = "no-repeat";

    const icon5 = document.createElement("div");
    icon5.classList.add("userIcon");
    icon5.id = "icon5";
    const img5 = document.createElement("img");
    img5.classList.add("iconImg");
    img5.setAttribute("src", "../icons/avatar_photos/avatar5.png");
    icon5.appendChild(img5);

    const usDiv5 = document.createElement("div");
    usDiv5.id = "usDiv5";
    usDiv5.classList.add("usDiv");

    const username5 = document.createElement("p");
    username5.innerText = "Nadia Comaneci";
    username5.classList.add("username");

    const usActivity5 = document.createElement("p");
    usActivity5.innerText = "VIP since 2020";
    usActivity5.classList.add("activity");

    const p5 = document.createElement("p");
    p5.classList.add("review");
    p5.id = "p5";
    p5.innerText =
      "I love the fact that MyIMDb has a feature for us, the users, to select, add and delete movies in our won list!! Can you believe this?? It's like having our own library of movies, which is a-m-a-z-i-n-g. The sheer amount of content on their site is awesome.";

    const innerDiv6 = document.createElement("div");
    innerDiv6.id = "innerDivID6";
    innerDiv6.classList.add("innerDivClass");
    innerDiv6.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv6.style.backgroundSize = "100%, 20px";
    innerDiv6.style.backgroundRepeat = "no-repeat";

    const icon6 = document.createElement("div");
    icon6.classList.add("userIcon");
    icon6.id = "icon6";
    const img6 = document.createElement("img");
    img6.classList.add("iconImg");
    img6.setAttribute("src", "../icons/avatar_photos/avatar6.png");
    icon6.appendChild(img6);

    const usDiv6 = document.createElement("div");
    usDiv6.id = "usDiv6";
    usDiv6.classList.add("usDiv");

    const username6 = document.createElement("p");
    username6.innerText = "George Enescu";
    username6.classList.add("username");

    const usActivity6 = document.createElement("p");
    usActivity6.innerText = "VIP since 2019";
    usActivity6.classList.add("activity");

    const p6 = document.createElement("p");
    p6.classList.add("review");
    p6.id = "p6";
    p6.innerText =
      "gr8 website i cannot wait 'til i add more moviez in my list, i need to devour them haha #movieaddict #goodlife #myIMDb. ";

    const innerDiv7 = document.createElement("div");
    innerDiv7.id = "innerDivID7";
    innerDiv7.classList.add("innerDivClass");
    innerDiv7.style.backgroundImage = "url('../icons/reviewBkgr/film.jpg')";
    innerDiv7.style.backgroundSize = "100%, 20px";
    innerDiv7.style.backgroundRepeat = "no-repeat";

    const icon7 = document.createElement("div");
    icon7.classList.add("userIcon");
    icon7.id = "icon7";
    const img7 = document.createElement("img");
    img7.classList.add("iconImg");
    img7.setAttribute("src", "../icons/avatar_photos/avatar7.png");
    icon7.appendChild(img7);

    const usDiv7 = document.createElement("div");
    usDiv7.id = "usDiv7";
    usDiv7.classList.add("usDiv");

    const username7 = document.createElement("p");
    username7.innerText = "Stephen Hawking";
    username7.classList.add("username");

    const usActivity7 = document.createElement("p");
    usActivity7.innerText = "Member since 2017";
    usActivity7.classList.add("activity");

    const p7 = document.createElement("p");
    p7.classList.add("review");
    p7.id = "p7";
    p7.innerText =
      "I am a super movie fan. I watch 5or6 movies per week. When I finish one movie,I usually go to MyIMDB to see the review every single time. For me, these reviews can give me some details I didn't notice. It looks like I will enjoy the movie twice! For me, MyIMDB is the best website for movie lovers. ";

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
    innerDiv1.appendChild(usDiv1);
    usDiv1.appendChild(username1);
    usDiv1.appendChild(usActivity1);
    innerDiv1.appendChild(p1);

    reviewsContainer.appendChild(innerDiv2);
    innerDiv2.appendChild(icon2);
    innerDiv2.appendChild(usDiv2);
    usDiv2.appendChild(username2);
    usDiv2.appendChild(usActivity2);
    innerDiv2.appendChild(p2);

    reviewsContainer.appendChild(innerDiv3);
    innerDiv3.appendChild(icon3);
    innerDiv3.appendChild(usDiv3);
    usDiv3.appendChild(username3);
    usDiv3.appendChild(usActivity3);
    innerDiv3.appendChild(p3);

    reviewsContainer.appendChild(innerDiv4);
    innerDiv4.appendChild(icon4);
    innerDiv4.appendChild(usDiv4);
    usDiv4.appendChild(username4);
    usDiv4.appendChild(usActivity4);
    innerDiv4.appendChild(p4);

    reviewsContainer.appendChild(innerDiv5);
    innerDiv5.appendChild(icon5);
    innerDiv5.appendChild(usDiv5);
    usDiv5.appendChild(username5);
    usDiv5.appendChild(usActivity5);
    innerDiv5.appendChild(p5);

    reviewsContainer.appendChild(innerDiv6);
    innerDiv6.appendChild(icon6);
    innerDiv6.appendChild(usDiv6);
    usDiv6.appendChild(username6);
    usDiv6.appendChild(usActivity6);
    innerDiv6.appendChild(p6);

    reviewsContainer.appendChild(innerDiv7);
    innerDiv7.appendChild(icon7);
    innerDiv7.appendChild(usDiv7);
    usDiv7.appendChild(username7);
    usDiv7.appendChild(usActivity7);
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
