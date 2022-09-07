var number1 = document.querySelector("#number-1");
var number2 = document.querySelector("#number-2");
var addBtn = document.querySelector(".add");
var subtractBtn = document.querySelector(".subtract");
var multiplyBtn = document.querySelector(".multiply");
var divideBtn = document.querySelector(".divide");
var outputBox = document.querySelector(".output-box");


function addEventHandler(){
    outputBox.innerText = Number(number1.value) + Number(number2.value);
}
function subtractEventHandler(){
    outputBox.innerText =  Number(number1.value) - Number(number2.value);

}
function multiplyEventHandler(){
    outputBox.innerText = Number(number1.value) * Number(number2.value);
}
function divideEventHandler(){
    outputBox.innerText = Number(number1.value) / Number(number2.value);
}


addBtn.addEventListener("click", addEventHandler);
subtractBtn.addEventListener("click", subtractEventHandler);
multiplyBtn.addEventListener("click", multiplyEventHandler);
divideBtn.addEventListener("click", divideEventHandler);
