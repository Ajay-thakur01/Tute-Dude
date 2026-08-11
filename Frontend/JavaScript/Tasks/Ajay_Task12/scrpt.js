// A = amount
// P = principle
// r = rate of Intrest 
// n = number of times is compounded per year
// t = time (in years)

// Amount
let P = 115400;
let r = 0.09; // 9%
let n = 1;
let t = 2;

let A = P * (1 + r / n) ** (n * t);

console.log("Amount:", A);

// this is for intrest rate

A = 146224;
P = 115400;
n = 1;
t = 2;
r = n * ((A / P) ** (1 / (n * t)) - 1);

console.log("Rate:", r * 100 + "%");
