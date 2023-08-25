// PHONE CHECKER
//\d{3} - три любые цифры
//^ $ - ограниечение, ставится в начале и в конце, чтобы он не искал ничего перед и после

const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2} - \d{2} - \d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentTab = 0

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

const slideCards = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
};

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i) => {
            if(event.target === item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}
setInterval(slideCards, 3000);

//converter

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener('input',() => {
//     const request = new XMLHttpRequest
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })

const converter = (element, target, exchangeRate) => {
    element.addEventListener('input', () => {
        const inputValue = parseFloat(element.value);
        target.value = (inputValue * exchangeRate).toFixed(2) || ''
    })
}

const request = new XMLHttpRequest()
request.open("GET", "../data/converter.json")
request.setRequestHeader("Content-type", "application/json")
request.send();

request.onload = () => {
    const exchangeRates = JSON.parse(request.response)
    converter(som, usd, 1 / exchangeRates.usd)
    converter(som, eur, 1 / exchangeRates.eur)
    converter(usd, som, exchangeRates.usd)
    converter(usd, eur, exchangeRates.usd / exchangeRates.eur)
    converter(eur, som, exchangeRates.eur)
    converter(eur, usd, exchangeRates.eur / exchangeRates.usd)
};



//0, '', null, Nan, false, undefined = false