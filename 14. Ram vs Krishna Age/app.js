var checkBtn =document.querySelector(".check-btn");
var outputBox = document.querySelector(".output-box");

var ramObject = {
    name : "ram",
    age: 25,
    yuga: "Treta"
}

var krishnaObject ={
    name : "krishna",
    age: 31,
    yuga: "Dwapar"

}
function checkBtnEventHandler(){
    if(ramObject.age > krishnaObject.age){
        outputBox.innerText =  ramObject.name;
    }else{
        outputBox.innerText =  krishnaObject.name;
    }
}

checkBtn.addEventListener("click", checkBtnEventHandler);