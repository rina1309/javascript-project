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

//POST DATA

//preventDefault - для форм, для того чтобы при нажатии кнопки, страница не перегружалась и не теряла данные2w

const form = document.querySelector('form')

// const postData = (url, dataJson) => {
//     const response = fetch(url, {
//         method: "POST",
//         headers: {"Content-type" : "application/json"},
//         body: dataJson
//     })
//     return(response)
// }

const postData = async (url, dataJson) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dataJson,
        })
        return response
    } catch {
        console.error('Error')
    }
}
const bindPostData = (form) => {
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new formData(form)
        const obj = {}
        formData.forEach = ((item, i) => {
            obj[1] = item
        })
        const json = json.stringify(obj)
        postData('server.php', json)
    }
}
bindPostData(form)

