//BLOG/NEWSLETTER SUBSCRIPTION POP UP

//INITIAL PSEUDOCODE:

//user comes to page and popup is there
//user has to either input email or hit the x to make the popup disappear 
//include something to ensure if user is inputing an email that it is in the correct format for an email

//grab the things:

const modalOpen = document.querySelector('.overlay')
// console.log(modalOpen)

const closeModalButton = document.getElementById('close-modal-button');
// console.log(closeModalButton)

const modalForm = document.querySelector('.modalForm');
//console.log(modalForm)

//function to open modal a couple seconds after page load
function openModal() {
    modalOpen.classList.add('modal-open');
}

//function to close modal
function closeModal() {
    modalOpen.classList.remove('modal-open');
    modalOpen.classList.add('modal-close');
}

//user arrives at page, modal pops up after 2 seconds (class of modal-open added to overlay)
setTimeout(openModal(), 2000);


//user clicks close-modal-button, add class modal-close to overlay
closeModalButton.addEventListener('click', function () {
    closeModal();
})

//user inputs email address and hits submit to close modal
modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    closeModal();
    modalForm.reset();
});