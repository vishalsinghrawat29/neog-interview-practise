var increaseSizeBtn = document.querySelector(".increase-size");
var decreaseSizeBtn = document.querySelector(".decrease-size");
var inputTxt = document.querySelector("#text-input");
var outputBox = document.querySelector(".output-box");
var printBtn = document.querySelector(".print-text");
increaseSizeBtn.style.display = 'none';
decreaseSizeBtn.style.display = 'none';

function printEventHandler(){
    outputBox.innerText = inputTxt.value;
    increaseSizeBtn.style.display = 'block';
    decreaseSizeBtn.style.display = 'block';
}
function increaseEventHandler(){
    var currentfontsize = outputBox.style.fontSize;
    currentfontsize = currentfontsize.split('px');
    var newfontsize = Number(currentfontsize[0]) + 2;
    newfontsize = newfontsize + 'px';
    outputBox.style.fontSize = newfontsize;
}

function decreaseEventHandler(){
    var currentfontsize = outputBox.style.fontSize
    currentfontsize = currentfontsize.split('px');
    var newfontsize = Number(currentfontsize[0]) - 2;
    newfontsize = newfontsize + 'px';
    outputBox.style.fontSize = newfontsize;
}

printBtn.addEventListener("click" , printEventHandler);
increaseSizeBtn.addEventListener("click" , increaseEventHandler);
decreaseSizeBtn.addEventListener("click" , decreaseEventHandler);