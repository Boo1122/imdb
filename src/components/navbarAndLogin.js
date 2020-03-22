export class Navbar {
    constructor() {
        this.nav();
    }

    nav() {
      let body = document.getElementById('body')
      let containerDiv = document.createElement('div')
        
      body.appendChild(containerDiv)

      let navbar = document.createElement('nav');
      navbar.classList.add('navbar', 'navbar-light', 'justify-content-end');
      containerDiv.appendChild(navbar)

      let anchor = document.createElement('a');
      anchor.classList.add('navbar-brand');
      anchor.href = '#'
      anchor.innerHTML = 'Login'
      anchor.style.color = 'black';
      

    //   let p = document.createElement('p')
    //     p.innerHTML = 'Nav'
       

    //     anchor.appendChild(p)

      

      navbar.appendChild(anchor);

   
    }







}

const newNevbar = new Navbar();


