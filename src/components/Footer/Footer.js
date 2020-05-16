import "./Footer.css";
export class Footer {
  constructor() {
    this.createFooter();
  }

  createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.id = "footerContainer";
    document.body.appendChild(footerContainer);

    footerContainer.style.width = "100%";
    footerContainer.style.backgroundImage = "url(./public/img/bck.jpg)";
    footerContainer.style.display = "flex";
    footerContainer.style.backgroundColor = "white";
    footerContainer.style.borderTop = "5px solid salmon";
    const MicroContainer1 = document.createElement("div");
    const MicroContainer2 = document.createElement("div");
    const MicroContainer3 = document.createElement("div");
    const MicroContainer4 = document.createElement("div");

    MicroContainer2.innerHTML =
      "Ardius Maria  $   Ioana Costea   $   Gafenco Bogdan  $   Cerlinca Marian    $  Dan George Caila";
    MicroContainer2.style.color = "white";
    MicroContainer2.style.fontSize = "20px";

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

    MicroContainer1.innerHTML = "COPYRIGHT @ VENUS TEAM";
    MicroContainer1.id = "Micro1";

    MicroContainer3.id = "Micro3";
    MicroContainer3.innerHTML = "FOLLOW US!";

    MicroContainer4.style.display = "flex";
    MicroContainer4.style.justifyContent = "space-around";

    const facebookIcon = document.createElement("a");
    MicroContainer4.appendChild(facebookIcon);
    facebookIcon.href = "https://www.facebook.com";
    facebookIcon.classList = "fa fa-facebook";

    const instagramIcon = document.createElement("a");
    MicroContainer4.appendChild(instagramIcon);
    instagramIcon.href = "https://www.instagram.com";
    instagramIcon.classList = "fa fa-instagram";

    const twitterIcon = document.createElement("a");
    MicroContainer4.appendChild(twitterIcon);
    twitterIcon.href = "https://www.twitter.com";
    twitterIcon.classList = "fa fa-twitter";

    const snapchatIcon = document.createElement("a");
    MicroContainer4.appendChild(snapchatIcon);
    snapchatIcon.href = "https://www.snapchat.com";
    snapchatIcon.classList = "fa fa-snapchat";
  }
}