const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

const boxes = [red, blue, green, yellow];

boxes.forEach((box)=>{
    if (box){
        box.addEventListener("click", ()=>{
        box.style.backgroundColor = box.id;
        });
    };
});

const greet = document.getElementById("mainText");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click",()=>{
    const name = input.value.trim();
    if (name !== ""){
        greet.textContent = `Hello! ${name}`;
    }else{
        greet.textContent = `Hello!`;

    };
});