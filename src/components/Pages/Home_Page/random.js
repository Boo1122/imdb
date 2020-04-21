import "./random.css";

export class Random {
  constructor() {
    let self = this;
    self.container();

    setInterval(() => {
      let words = ["Movies", "Series", "DC Comics", "Batman"];
      let word = words[Math.floor(Math.random() * words.length)];
      document.getElementById("randomDiv").innerHTML = word;
    }, 1000);
  }

  container() {
    let words = ["Movies", "Series", "DC Comics", "Batman"];
    let word = words[Math.floor(Math.random() * words.length)];
    let text = document.createTextNode(word);

    let divWrap = document.createElement("div");
    divWrap.id = "divWrap";

    let divRandom = document.createElement("div");
    divRandom.id = "randomDiv";

    let divText = document.createElement("div");
    divText.id = "divText";

    let text1 = document.createElement("p");
    text1.innerText = "Track what you watch.";
    text1.style.margin = "0px 0px 0px 0px";

    let text2 = document.createElement("p");
    text2.innerText = "Discover new shows and movies.";
    text2.style.margin = "0px 0px 0px 0px";

    let text3 = document.createElement("p");
    text3.innerText = "Create your account now!";
    text3.style.margin = "0px 0px 0px 0px";

    let container = document.getElementById("home-page");
    container.appendChild(divWrap);
    divWrap.appendChild(divRandom);
    divWrap.appendChild(divText);
    divRandom.appendChild(text);

    divText.appendChild(text1);
    divText.appendChild(text2);
    divText.appendChild(text3);

    console.log(word);
  }
}
