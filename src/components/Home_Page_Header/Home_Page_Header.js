// import {navigate} from './components/Navigate_History/Navigate_History';

export class Header {
<<<<<<< HEAD
    constructor() {
        this.Header();
    }

    Header() {
        let body = document.getElementById('body')
      
        let header = document.createElement('div');
        header.classList.add('header');
        body.appendChild(header)

        let anchor = document.createElement('a');
        anchor.classList.add('active', 'nav-link');
        anchor.setAttribute('data-target', 'login')
        anchor.id = 'login'
        anchor.innerHTML = 'Login'
        
        
        header.appendChild(anchor);
    }


}



=======
  constructor() {
    this.Header();
  }

  Header() {
    const body = document.getElementById("body");

    const header = document.createElement("div");
    header.classList.add("header");
    body.appendChild(header);

    const movBtn = document.createElement("div");
    movBtn.className = "movBtn";
    const movies = document.createElement("button");
    movies.classList.add("movies-btn", "btn");
    movies.innerText = "Movies";

    const anchBtn = document.createElement("div");
    anchBtn.className = "anchBtn";
    const anchor = document.createElement("button");
    anchor.classList.add("active", "nav-link");
    anchor.setAttribute("data-target", "login");
    anchor.id = "login";
    anchor.innerHTML = "Login";

    header.appendChild(movBtn);
    movBtn.appendChild(movies);

    header.appendChild(anchBtn);
    anchBtn.appendChild(anchor);
  }
}
>>>>>>> Pre-Production-2.0
