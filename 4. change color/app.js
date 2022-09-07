var inputTxt = document.querySelector(".input-txt");
var redBtn = document.querySelector(".red-btn");
var greenBtn = document.querySelector(".green-btn");
var blueBtn = document.querySelector(".blue-btn");
var outputBox = document.querySelector(".output-box");

function redEventListner(){
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "red";
}


function greenEventListner(){
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "green";
}


function blueEventListner(){
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "red";
}

redBtn.addEventListener("click" , redEventListner);
greenBtn.addEventListener("click" , greenEventListner);
blueBtn.addEventListener("click" , blueEventListner);