var inputTxt = document.querySelector(".input-txt");
var getBtn = document.querySelector(".get-btn");
var outputBox = document.querySelector(".output-box");


function errorHandler(error){
    outputBox.innerText = "error occured: " + error;
}

var url  ="https://unitube-server.herokuapp.com/playlists";
function getBtnEventHandler(){

 var textUrl = url + "?" + "text=" + inputTxt.value;
 fetch(textUrl)
 .then(response => response.json())
 .then(json => {
    var translatedText = json.contents.text;
    outputBox.innerText = translatedText;
    })
.catch(errorHandler);
}

getBtn.addEventListener("click", getBtnEventHandler);