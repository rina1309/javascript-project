const modalTrigger = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal_close')
const footer = document.querySelector('.footer')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}

// DZ

hideModal = () => {
    openModal()
    window.removeEventListener("scroll", footerScroll);
}

footerScroll = () => {
    if (window.scrollY + window.innerHeight >= footer.offsetTop) {
        hideModal();
    }
}

window.addEventListener("scroll", footerScroll);

let modalOpened = false

const autoModal = () => {
    if (!modalOpened) {
        modalOpened = true;
        setTimeout(openModal, 10000);
    }
}

autoModal();

