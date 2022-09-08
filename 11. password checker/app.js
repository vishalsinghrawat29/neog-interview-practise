var inputTxt = document.querySelector(".input-txt");
var submitBtn = document.querySelector(".submit-btn");
var outputBox = document.querySelector(".output-box");

function submitBtnEventHandler(){
    var inputValue = inputTxt.value;
    if((inputValue.split("").length) < 10){
        outputBox.innerText = "error";
        inputTxt.style.backgroundColor = "red";
    }else{
        outputBox.innerText = "success";
        submitBtn.disabled = true;
        inputTxt.style.backgroundColor = "green";
    }
}

submitBtn.addEventListener("click", submitBtnEventHandler);