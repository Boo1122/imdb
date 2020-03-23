import {navigate} from '../components/navigation/navigateHistory'

export class Navbar {
    constructor() {
        this.nav();
    }

    nav() {
        let body = document.getElementById('body')
        let containerDiv = document.createElement('div')
        containerDiv.classList.add('container-fluid', 'px-0')

        body.appendChild(containerDiv)

        let navbar = document.createElement('nav');
        navbar.classList.add('navbar', 'navbar-light', 'justify-content-end');
        containerDiv.appendChild(navbar)

        let anchor = document.createElement('a');
        anchor.classList.add('navbar-brand', 'active', 'nav-link');
        anchor.setAttribute('data-target', 'login')
        anchor.href = '#'
        anchor.id = 'login'
        anchor.innerHTML = 'Login'
        anchor.style.color = 'black';
        

        navbar.appendChild(anchor);
    }







}

const newNevbar = new Navbar();