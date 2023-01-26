const modalApp = {};

modalApp.modalOpen = document.querySelector('.overlay')
modalApp.closeModalButton = document.getElementById('closeModalButton');
modalApp.modalForm = document.querySelector('.modalForm');

modalApp.openModal = () => {
    modalApp.modalOpen.classList.add('modalOpen');
}

modalApp.closeModal = () => {
    modalApp.modalOpen.classList.remove('modalOpen');
    modalApp.modalOpen.classList.add('modalClose');
}

modalApp.clickClose = () => {
    modalApp.closeModalButton.addEventListener('click', modalApp.closeModal);
}

modalApp.enterEmail = () => {
    modalApp.modalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        modalApp.closeModal();
        modalApp.modalForm.reset();
    });
}

modalApp.loadModal = () => {
    // setTimeout(modalApp.openModal(), 2000);
    modalApp.openModal();
    modalApp.clickClose();
    modalApp.enterEmail();
}

modalApp.init = () => {
    modalApp.loadModal();
}

modalApp.init();
