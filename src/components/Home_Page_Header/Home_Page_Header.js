// import {navigate} from './components/Navigate_History/Navigate_History';

export class Header {
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



