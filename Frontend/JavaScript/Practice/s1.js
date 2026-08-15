const body = document.body;
const button = document.getElementById("colorBtn");

// button.addEventListener("click",()=>{
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);
//     const randomColor = `rgb(${r},${g},${b})`;
//     body.style.backgroundColor = randomColor;
// });

button.addEventListener("click",()=>{
let x = "0123456789ABCDEF";
let randomColor = "#";

for (let i = 0; i<4;i++) {
    const randomIndex = Math.floor(Math.random()*17);
    randomColor += x[randomIndex];
    body.style.backgroundColor = randomColor;
}
})
