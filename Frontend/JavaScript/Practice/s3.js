const display = document.getElementById("countDisplay");
const button1 = document.getElementById("addBtn");
const button2 = document.getElementById("subBtn")
const button3 = document.getElementById("reset")
let count = 0;

button1.addEventListener("click", ()=>{
    count += 1;
    display.textContent = count;
});
button2.addEventListener("click", ()=>{
    if(count != 0){
        count -= 1;
        display.textContent = count;
    }
});
button3.addEventListener("click", ()=>{
    count = 0;
    display.textContent = count;
});