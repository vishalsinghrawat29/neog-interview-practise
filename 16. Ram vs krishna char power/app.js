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
function charPower(ramObject, krishnaObject){
    var ramTotalPower = ramObject.power + ramObject.name.length*35;
    var krishnaTotalPower = ramObject.power + krishnaObject.name.length*35;
    if(ramTotalPower > krishnaTotalPower){
        outputBox.innerText =  ramObject.name;
    }else{
        outputBox.innerText =  krishnaObject.name;
    }
}

checkBtn.addEventListener("click", function checkBtnEventHandler(){
    charPower(ramObject, krishnaObject);
});