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

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

const moveRight = (position) => {
    if (position >= 90) {
        moveLeft(90);
        return;
    }

    childBlock.style.left = position + "%";

    setTimeout(() => {
        moveRight(position + 1);
    }, 10);
}
const moveLeft = (position) => {
    if (position <= 0) {
        return;
    }

    childBlock.style.left = position + "%";

    setTimeout(() => {
        moveLeft(position - 1);
    }, 10);
}
const moveBlock = () => {
    if (!childBlock.style.left || childBlock.style.left === "0%") {
        moveRight(0);
    } else if (childBlock.style.left === "90%") {
        moveLeft(90);
    }
}
moveBlock();
