//Check gmail

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^\w+@\w+\.[a-zA-Z]{2,4}$/;

gmailButton.onclick = () => {
    const email = gmailInput.value;
  
    if (regExp.test(email)) {
      gmailResult.textContent = "Спасибо, все правильно";
    } else {
      gmailResult.textContent = "Неправильно введена почта";
    }
};

//move clock

const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')


let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX+=2
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX >= 449 && positionY < 449) {
        positionY+=2
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    } else if (positionX > 0 && positionY > 0) {
        positionX-=2
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX === 0 && positionY > 0) {
        positionY-=2
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    }
}

move()

const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

for(let s = 0; s < 60; s++){
    let mSpikeEl = document.createElement('i');
    let sSpikeEl = document.createElement('i');
    mSpikeEl.className = 'spike'
    sSpikeEl.className = 'spike'
    mSpikeEl.style = `--rotate:${6 * s}deg`;
    sSpikeEl.style = `--rotate:${6 * s}deg`;
    mSpikeEl.setAttribute('data-i', s);
    sSpikeEl.setAttribute('data-i', s);

    seconds.append(sSpikeEl);
    minutes.append(mSpikeEl);
}

const getTime = () => {
    let date = new Date(),
        s  = date.getSeconds() ,
        m  = date.getMinutes();

    hour.textContent = date.getHours();
    minute.textContent = m;
    minutes.style = `--dRotate:${6 * m}deg`;

    if(s === 0){
        seconds.classList.add('stop-anim')
    } else{
        seconds.classList.remove('stop-anim')
    }
    if(m === 0){
        minutes.classList.add('stop-anim')
    } else{
        minutes.classList.remove('stop-anim')
    }

    seconds.style = `--dRotate:${6 * s}deg`;
}

setInterval(getTime, 1000);
getTime();

//Stop Watch

const timer = document.querySelector('#seconds')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const resumeButton = document.querySelector('#resume')

let num = 0
let resetTimer = null

const updateTimer = () => {
    num++
    timer.innerText = num
}
startButton.onclick = () => {
    if (!resetTimer) {
        resetTimer = setInterval(updateTimer, 1000)
    }
}
resetButton.onclick = () => {
    clearInterval(resetTimer)
    resetTimer = null
    num = 0
    timer.innerText = num
}
stopButton.onclick = () => {
    clearInterval(resetTimer)
    resetTimer = null
}
resumeButton.onclick = () => {
    if (!resetTimer) {
        resetTimer = setInterval(updateTimer, 1000)
    }
}



