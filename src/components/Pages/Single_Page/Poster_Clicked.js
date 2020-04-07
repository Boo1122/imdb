export class PosterClicked {
  constructor() {
    this.clickedPoster();
  }

  clickedPoster() {
    const posters = document.getElementsByClassName("detail-posters");
    console.log(posters);

    for (const poster of posters) {
      poster.addEventListener("click", () => {
        console.log("click");
      });
    }
  }
}
