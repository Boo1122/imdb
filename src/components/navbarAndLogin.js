import {navigate} from '../components/navigation/navigateHistory'

export class Navbar {
    constructor() {
        this.Nav();
    }

    Nav() {
        let body = document.getElementById('body')
      
        let header = document.createElement('div');
        header.classList.add('header');
        body.appendChild(header)

        let anchor = document.createElement('a');
        anchor.classList.add('active', 'nav-link');
        anchor.setAttribute('data-target', 'login')
        anchor.href = '#'
        anchor.id = 'login'
        anchor.innerHTML = 'Login'
        anchor.style.color = 'black';
        

        header.appendChild(anchor);
    }







}

const newNevbar = new Navbar();