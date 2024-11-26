// Get the hamburger menu and the side menu
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');

// Add an event listener to the hamburger to toggle the side menu
hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});
