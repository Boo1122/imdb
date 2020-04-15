import "./LogOut_Page.css";
//import { HomePage } from "../Home_Page/Home_Page";

export class LogOutPage {
  constructor() {
    this.logout();
    this.logOutClicked();
  }

  logout() {
    const body = document.getElementById("body");
    const containerForm = document.createElement("div");
    containerForm.id = "logout-page";
    containerForm.classList.add("page", "active");

    body.appendChild(containerForm);
    // new HomePage();
  }

  logOutClicked() {
    document.getElementById("logOutBtn").addEventListener("click", (event) => {
      const token = document.cookie
        .split(";")
        .find((element) => {
          if (element.includes("token")) return true;
        })
        .split("=")[1];
      console.log(token);

      fetch("https://movies-api-siit.herokuapp.com/auth/logout", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "X-Auth-Token": token,
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

          document.cookie = `token=${json.accessToken} '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        });
    });
  }
}
