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