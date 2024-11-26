
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');


hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});
