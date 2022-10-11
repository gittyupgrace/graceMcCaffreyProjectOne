//SLIDE OUT MENU??
    //INITIAL PSEUDOCODE:

    //user clicks on hamburger menu (add event listener for click)
    //entire menu/nav slides out onto the page on click
    //user can click the x in the corner to close the menu(another event listener - on this click the menu closes)
    //on any other link click, menu also closes

    //i think maybe, when user clicks ham menu, listen for click and find 'open' class which makes menu visible

    //then when user hits x, find close class connected to visibility of menu being hidden


const hamburgerButton = document.getElementById('toggleBurg');

const navMenu = document.querySelector('.menu');

// function hamburgerToggle() {
//     navMenu.classList.toggle('show');
// }

hamburgerButton.addEventListener('click', function(e) {
    console.log("clicked!");
    navMenu.classList.toggle('showMenu');
});
