var loadBtn  = document.querySelector(".loaded-btn");
var loadTxt  = document.querySelector(".load-text");

function loadBtnEventHandler(){
    loadTxt.style.display = "none";
}

loadBtn.addEventListener("click", loadBtnEventHandler);