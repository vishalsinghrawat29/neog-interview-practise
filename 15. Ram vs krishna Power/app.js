var checkBtn =document.querySelector(".check-btn");
var outputBox = document.querySelector(".output-box");

var ramObject = {
    name : "ram",
    age: 25,
    power: 2500
}

var krishnaObject ={
    name : "krishna",
    age: 31,
    power: 2325

}
function checkBtnEventHandler(){
    if(ramObject.power > krishnaObject.power){
        outputBox.innerText =  ramObject.name;
    }else{
        outputBox.innerText =  krishnaObject.name;
    }
}

checkBtn.addEventListener("click", checkBtnEventHandler);