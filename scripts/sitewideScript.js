const app = {};

app.hamburgerButton = document.getElementById('toggleBurg');
app.navMenu = document.querySelector('.menu');

app.toggleBurg = () => {
    app.navMenu.classList.toggle('showMenu');
}

app.toggleEvent = () => {
    app.hamburgerButton.addEventListener('click', app.toggleBurg);
}

app.init = () => {
    app.toggleEvent();
}

app.init();