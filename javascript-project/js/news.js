const newsBlock = document.querySelector('.news__wrapper')
const news = []

const displayNews = (data) => {
    data.forEach((newsCard) => {
        const cardNews = document.createElement('div')
        cardNews.classList.add('cardNews')
        cardNews.innerHTML = `
            <img src="../img/news.png" alt="">
            <h3>${newsCard.title}</h3>
            <p>${newsCard.body}</p>
            
            
        `
        newsBlock.appendChild(cardNews)
    })
}
const request = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
        const data = await response.json()
        displayNews(data)
    }
    catch {
        console.error('Error!')
    }
}
request()
  
