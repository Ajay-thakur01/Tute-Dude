const productContainer = document.querySelector(".prduct-list");

let logo = document.getElementById("logo");
let colors = [
    document.getElementById("red"),
    document.getElementById("blue"),
    document.getElementById("green"),
];
let hide = document.getElementById("hide");

logo.addEventListener("click", (event)=>{
    event.preventDefault();
    logo.textContent="Ajay";
});

colors.forEach((btn) => {
    btn.addEventListener("click", () => {
        // btn.classList.add("active");
        btn.classList.toggle("active");
        hide.classList.toggle("show");
    });
});


// zsccdfghbdvsadergv 
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let counter1 = document.getElementById("counter+");
let counter2 = document.getElementById("counter-");

let count1 = 0;
let count2 = 0;
let size = 32;
let increaseSize = 32;
let DecreaseSize = 32;

increase.addEventListener("click", () =>{
    increaseSize +=2;
    count1 ++;
    increase.style.fontSize = `${increaseSize}px`;
    counter1.textContent = count1;
});

decrease.addEventListener("click", () =>{
    if (DecreaseSize>0) {    
        DecreaseSize -= 2;
        count2 --;
        decrease.style.fontSize = `${DecreaseSize}px`;
        counter2.textContent = count2;

    }
    if (DecreaseSize === 0 ){
        decrease.style.display = "none";
    }
});

reset.addEventListener("click", () =>{
     count1 = 0;
    count2 = 0;

    increaseSize = size;
    decreaseSize = size;

    // Reset display
    increase.style.fontSize = `${increaseSize}px`;
    decrease.style.fontSize = `${decreaseSize}px`;

    counter1.textContent = count1;
    counter2.textContent = count2;


    decrease.style.display = "inline-block";
})

let text = document.getElementById("text");
let count = document.getElementById("count");

text.addEventListener("input", () =>{
    let characters = text.value.length;
    let words = text.value.trim() === "" ? 0 : text.value.trim().split(/\s+/).length;

    count.textContent = `Character: ${characters} | Words: ${words}`;
});