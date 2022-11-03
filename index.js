let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let returnedEl =document.getElementById("returned-el") 
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    returnedEl.textContent = "";
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
   returnedCount();
}

function returnedCount(){
returnedEl.textContent = "No one returned..."
}
