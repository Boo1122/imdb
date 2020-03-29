export const navigate = {
    pages: [],
    show: new Event('show'),

    init: () => {
        navigate.pages = document.querySelectorAll('.page');
        navigate.pages.forEach((pg)=>{
            pg.addEventListener("show", navigate.pageShown);
        })
  
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener("click", navigate.nav);
  
        }) 
  
         history.replaceState({}, 'Home', '');
         window.addEventListener('popstate', navigate.poppin)
    },

    nav:  ev => {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`)
        document.getElementById(currentPage).dispatchEvent(navigate.show);
  
    },
  
    pageShown: ev => {
        console.log('page', ev.target.id, 'just shown' );
        
  
    },
    poppin: ev => {
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#', '')
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(navigate.show);
  
    }
  }
  
   


