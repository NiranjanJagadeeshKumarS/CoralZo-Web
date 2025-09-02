const hamburger = document.querySelector('.hamburger');
const nav_pages = document.querySelector('.nav-pages');
let menuOpen = false;

hamburger.addEventListener('click',() =>{

    if (menuOpen == false){
        nav_pages.style.display = "block";
        menuOpen= true;
    }

    else if (menuOpen == true){
        nav_pages.style.display = "none";
        menuOpen=false;
    }


})