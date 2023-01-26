const burgApp = {};

burgApp.hamburgerButton = document.getElementById('toggleBurg');
burgApp.navMenu = document.querySelector('.menu');

burgApp.toggleBurg = () => {
    burgApp.navMenu.classList.toggle('showMenu');
}

burgApp.toggleEvent = () => {
    burgApp.hamburgerButton.addEventListener('click', burgApp.toggleBurg);
}

burgApp.init = () => {
    burgApp.toggleEvent();
}

burgApp.init();