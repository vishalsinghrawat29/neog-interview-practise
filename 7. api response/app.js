var inputTxt = document.querySelector(".input-txt");
var getBtn = document.querySelector(".get-btn");
var welcomeBtn = document.querySelector(".welcome-btn");
var captialBtn = document.querySelector(".captial-text");
var outputBox = document.querySelector(".output-box");

var url  ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function getBtnEventHandler(){

 var textUrl = url + "?" + "text=" + inputTxt.value;
 fetch(textUrl)
 .then(response => response.json())
 .then(json => {
    var translatedText = json.contents.text;
    outputBox.innerText = translatedText;
});
}

function welcomeBtnEventHandler(){
    var textUrl = url + "?" + "text=" + inputTxt.value;
    fetch(textUrl)
    .then(response => response.json())
    .then(json => {
       var translatedText = json.contents.text;
       outputBox.innerText = "Welcome " + translatedText;
   });
    
}
// function captialBtnEventHandler(){
//     var textUrl = url + "?" + "text=" + inputTxt.value;
//     fetch(textUrl)
//     .then(response => response.json())
//     .then(json => {
//        var translatedText = json.contents.text;
//        outputBox.innerText = translatedText.toUpperCase();
//    });
// }
function captialBtnEventHandler(){
    var text = outputBox.innerText;
    outputBox.innerText = text.toUpperCase();
}



getBtn.addEventListener("click", getBtnEventHandler);
welcomeBtn.addEventListener("click", welcomeBtnEventHandler);
captialBtn.addEventListener("click", captialBtnEventHandler);