var inputTxt = document.querySelector(".input-txt");
var submitBtn = document.querySelector(".submit-btn");
var outputBox = document.querySelector(".output-box");


function submitBtnEventHandler(){
    var inputValue = inputTxt.value;
    if((inputValue.length) < 10){
        submitBtn.disabled = true;
        outputBox.innerText = "error";
        inputTxt.style.backgroundColor = "red";
    }else{
        submitBtn.disabled = false;
        outputBox.innerText = "success";
        inputTxt.style.backgroundColor = "green";       
    }
}

function submitBtnInputEventHandler(){
    var inputValue = inputTxt.value;
    if((inputValue.length) < 10){
        submitBtn.disabled = true;
        inputTxt.style.border = " 0.1rem solid red ";
    }else{
        submitBtn.disabled = false;
        inputTxt.style.border = " 0.1rem solid green ";
    }
}

submitBtn.addEventListener("click", submitBtnEventHandler);
inputTxt.addEventListener("input", submitBtnInputEventHandler);
