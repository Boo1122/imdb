import "./Footer.css";
export class Footer {
  constructor() {
    this.createFooter();
  }

  createFooter() {
    const footerContainer = document.createElement("div");
    document.body.appendChild(footerContainer);

    footerContainer.style.width = "100%";

    footerContainer.style.backgroundImage = "url(./public/img/bck.jpg)";
    footerContainer.style.display = "flex";
    footerContainer.style.backgroundColor = "white";

    const MicroContainer1 = document.createElement("div");
    const MicroContainer2 = document.createElement("div");
    const MicroContainer3 = document.createElement("div");
    const MicroContainer4 = document.createElement("div");

    footerContainer.appendChild(MicroContainer1);
    footerContainer.appendChild(MicroContainer2);
    footerContainer.appendChild(MicroContainer3);
    footerContainer.appendChild(MicroContainer4);

    MicroContainer1.style.height = "100%";
    MicroContainer2.style.height = "100%";
    MicroContainer3.style.height = "100%";
    MicroContainer4.style.height = "100%";

    MicroContainer1.style.width = "25%";
    MicroContainer2.style.width = "25%";
    MicroContainer3.style.width = "25%";
    MicroContainer4.style.width = "25%";

    MicroContainer1.innerHTML = "COPYRIGHT @ HUNGRYTEAM";
    MicroContainer1.id = "Micro1";

    MicroContainer3.id = "Micro3";
    MicroContainer3.innerHTML = "FOLLOW US!";

    MicroContainer4.style.display = "flex";
    MicroContainer4.style.justifyContent = "space-around";

    const icon1 = document.createElement("a");
    MicroContainer4.appendChild(icon1);
    icon1.href = "https://www.facebook.com";
    icon1.classList = "fa fa-facebook";

    const icon2 = document.createElement("a");
    MicroContainer4.appendChild(icon2);
    icon2.href = "https://www.instagram.com";
    icon2.classList = "fa fa-instagram";

    const icon3 = document.createElement("a");
    MicroContainer4.appendChild(icon3);
    icon3.href = "https://www.twitter.com";
    icon3.classList = "fa fa-twitter";

    const icon4 = document.createElement("a");
    MicroContainer4.appendChild(icon4);
    icon4.href = "https://www.snapchat.com";
    icon4.classList = "fa fa-snapchat";
  }
}
