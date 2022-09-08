var getBtn404 = document.querySelector(".get-btn-404");
var getBtn401 = document.querySelector(".get-btn-401");
var outputBox = document.querySelector(".output-box");


// function errorHandler(error){
//     outputBox.innerText = "error occured: " + error;
// }
var url_403 = "https://www.googleapis.com/youtube/v3/search";
var url_404  ="https://jsonplaceholder.typicode.com/users/32";

function getBtn404EventHandler(){
 fetch(url_404)
  .then((res) => {
    if (res.status === 404) {
        outputBox.innerText = "page not found";
    }
  });
}

function getBtn401EventHandler(){
    fetch(url_403)
    .then((res) => {
      if (res.status === 403) {
          outputBox.innerText = "this user is not allowed";
      }
    });
}

getBtn404.addEventListener("click", getBtn404EventHandler);
getBtn401.addEventListener("click", getBtn401EventHandler);