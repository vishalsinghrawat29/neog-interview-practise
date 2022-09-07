var inputTxt = document.querySelector(".input-txt");
var increaseBtn = document.querySelector(".increase");
var decreaseBtn = document.querySelector(".decrease");
var outputBox = document.querySelector(".output-box");

var txtSize = 16;


function increaseEventHandler(){
    txtSize += 2;
    outputBox.style.fontSize = txtSize + "px";
    outputBox.innerText = inputTxt.value;
}
function decreaseEventHandler(){
    txtSize -= 2;
    outputBox.style.fontSize = txtSize + "px";
    outputBox.innerText = inputTxt.value;
}


increaseBtn.addEventListener("click", increaseEventHandler);
decreaseBtn.addEventListener("click", decreaseEventHandler);