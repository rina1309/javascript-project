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

//move block

const childBlock = document.querySelector(".child_block")

let positionLeft = 0
let positionRight = 0
let positionBottomRight = 0
let positionBottomLeft = 0

const moveBlock = () => {
    if (positionLeft === 0) {
        positionLeft++
        childBlock.style.right = positionLeft + "px"
        setTimeout(moveBlock, 1500)
    } else if (positionRight === 0 && positionBottomRight === 0) {
        positionRight++
        childBlock.style.bottom = positionRight + "px"
        setTimeout(moveBlock, 1500)
    } else if (positionBottomRight === 0 && positionBottomLeft < 448) {
        positionBottomRight++
        childBlock.style.left = positionBottomRight + "px"
        setTimeout(moveBlock, 1500)
    } else if (positionBottomLeft === 0 && positionLeft < 448) {
        positionBottomLeft++
        childBlock.style.top = positionBottomLeft + "px"
        setTimeout(moveBlock, 1500)
    }
}
moveBlock()

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



