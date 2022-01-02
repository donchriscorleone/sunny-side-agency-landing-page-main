var nav = document.getElementById('nav');
var burger = document.getElementById('burger');
var isNavOpen = false;

burger.addEventListener('click', (e) => {
    if (isNavOpen) {
        nav.style.visibility = 'hidden';
    }
    else {
        nav.style.visibility = 'visible';
    }
    isNavOpen = !isNavOpen;
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 850) {
        nav.style.visibility = 'visible'
    } else {
        nav.style.visibility = 'hidden'
    }
    
})