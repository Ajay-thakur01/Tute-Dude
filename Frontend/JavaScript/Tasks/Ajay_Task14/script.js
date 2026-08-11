// Variable
let n = 5;     

// 1. Sum of first n natural numbers
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first", n, "numbers =", sum);

// 2. Print table of n

console.log("table of",n);
for (let i = 1; i <= 10; i++) {
    console.log(n,'x',i,"=",n*i);
}

// 3. Checking Prime Number

let num = 15;
count = 0;
for (let i=0 ; i<=num; i++){
    if(num % i === 0){
        count++;
    }
}
if (count==2){
    console.log(num,"is a Prime NUmber");
}else{
    console.log(num,"is not a Prime NUmber");
}

// printing factors

let x = 0;
for(let i = 2;i <=num; i++) {
    if (num % i === 0) {   
        console.log(i); 
        num/=i;
        i--;    
    }
}

// Sum of Digits

num = 9999;
let sum1 = 0;

while (num > 0) {
    sum1 = sum1 + (num % 10);
    num = Math.floor(num / 10);
}

console.log("Sum of digits =", sum1);

// Checking Armstrong number


num=10;
temp = num;
let armstrongSum = 0;
let digits = num.toString().length;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** digits;
    temp = Math.floor(temp / 10);
}

if (armstrongSum === num) {
    console.log(`\n${num} is an Armstrong Number`);
} else {
    console.log(`\n${num} is not an Armstrong Number`);
}

