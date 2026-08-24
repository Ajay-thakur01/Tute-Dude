// console.log(document.body);

const bodyBg = document.body;
bodyBg.style.backgroundColor = 'Green';

const box4 = document.getElementById("box4");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

box1.innerHTML = "<b>AJAY</b> <h1>Thakur</h1>"
box4.innerText = "<b>THAKUR</b>"
box1.style.backgroundColor = "yellow"
box1.style.borderRadius = "10px"
box1.style.display = "flex"
box1.style.flexDirection = "column"


// --- Event Handling ---

function onClickFunc(){
    box2.style.backgroundColor = "red";
}

