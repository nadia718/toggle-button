const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const servives1 = document.querySelector(".servives1");
const servives2 = document.querySelector(".servives2");
let currentService = localStorage.getItem("service") || "1";
inputEl.checked = JSON.parse(localStorage.getItem("mode"));


updateBody();
updateService();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }
}


function updateService(){
    if(currentService === "1"){
        servives1.style.display ="flex";
        servives2.style.display ="none";

    } else {
        servives1.style.display = "none";
        servives2.style.display = "flex";
    }
    
}

inputEl.addEventListener("input", () => {
    updateBody();
    currentService = currentService === "1" ? "2" : "1";
    updateService();
    updateLocalStorage();
    
})


function updateLocalStorage(){
    localStorage.setItem("mode" , JSON.stringify(inputEl.checked));
    localStorage.setItem("service", currentService);
}