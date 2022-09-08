var inputTxt = document.querySelector(".input-txt");
var getBtn = document.querySelector(".get-btn");
var outputBox = document.querySelector(".output-box");


// function errorHandler(error){
//     outputBox.innerText = "error occured: " + error;
// }

var url  ="https://jsonplaceholder.typicode.com/users/32";
function getBtnEventHandler(){

 var textUrl = url + "?" + "text=" + inputTxt.value;
 fetch(textUrl)
 .then(response => {
    if(response.status === 404){
        console.log("page not found");
     }
 })
 
}

getBtn.addEventListener("click", getBtnEventHandler);