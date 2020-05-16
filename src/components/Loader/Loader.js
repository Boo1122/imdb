export class Loader {
  constructor(parent) {
    this.parent = parent;
    // this.renderLoader();
  }

  renderLoader() {
    const img = document.createElement("img");
    img.classList.add("loader");
    img.setAttribute("src", "./public/loading.gif");
    img.style.display = "none";

    this.domElement = img;
    this.parent.appendChild(img);
  }

  show() {
    this.domElement.style.display = "block";
  }

  hide() {
    this.domElement.style.display = "none";
  }
}