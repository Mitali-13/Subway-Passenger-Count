
let countEl = document.getElementById("count-el")

let count = 0
function increment(){
    count = count + 1
    countEl.innerText = count
}

let saveEl  = document.getElementById("save-el") //bringing the "element" of save-el element in variable

function save(){
    let entry = count + " - " //string + number = string
    saveEl.textContent += entry 
    count = 0
    countEl.innerText = count
}

// function reset(){
//     count = 0
//     countEl.innerText = count
// }