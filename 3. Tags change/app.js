var inputTxt =  document.querySelector(".input-txt");
var heading1Btn = document.querySelector(".heading-1");
var heading2Btn = document.querySelector(".heading-2");
var heading3Btn = document.querySelector(".heading-3");
var outputBox = document.querySelector(".output-box");

function heading1EventHandler(){
    outputBox.innerHTML = "<h1>" + inputTxt.value + "</h1>";
}
function heading2EventHandler(){
    outputBox.innerHTML = "<h2>" + inputTxt.value + "</h2>";
}
function heading3EventHandler(){
    outputBox.innerHTML = "<h3>" + inputTxt.value + "</h3>";
}
function showEventHandler(){
    outputBox.innerText = inputTxt.value;
}

inputTxt.addEventListener("change" , showEventHandler);
heading1Btn.addEventListener("click", heading1EventHandler);
heading2Btn.addEventListener("click", heading2EventHandler);
heading3Btn.addEventListener("click", heading3EventHandler);