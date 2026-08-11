// Array is an object that store multiple values
// It is also a container

// let varName = 123;

// let arrName = [123, 456, 789]

// let stud1 = ["abc", 18, "xyz", "lkg"]

// console.log(stud1);
// console.log(stud1[0]);
// console.log(stud1[1]);
// console.log(stud1[2]);
// console.log(stud1[3]);
// console.log(stud1.length);

// stud1[0]= "Ajay"
// console.log(stud1);

// stud1.push("laptop")
// stud1.unshift("Mobile")
// console.log(stud1);

// stud1.pop();
// console.log(stud1);
// stud1.shift();
// console.log(stud1);

// let marks = [ 85, 65, 78, 96, 55, 90];
// console.log(marks);

// marks.sort();
// console.log(marks);

// // Functions

// function addition(i,j) {
//     const result = i + j ;
//     console.log("result:", result);
//     return result;
// }

// addition(10,45);

// let x = 9;
// let y = 6;
// addition(x,y);

// // anonymous function

// let sub = function (i, j) {
//     const res = i-j;
//     console.log(res);
//     return res;
// }

// let a = 56;
// let b = 89;
// sub(a,b);

// // Nested function in JavaScript

// function square2 (i,j){

//     const a = square(x);
//     const b = square(y);

//     function square(num){
//         return num*num;
//     }
//     return a+b;
    
// }
// console.log(square2 (5,4));

// div(9,3)



// >> Advanced Functions in JavaScript;

// --- Arrow function ---

let greet = () => {
    console.log("Hey everyone!");
}

greet()

const greet1 = (count) => {
    console.log("Hello world!",count);   
}
greet1(7)

const square = (num) => num*num

console.log(square(3));

// --- Callback Function ---

const calculate = (a,b,operation) => {
    return operation(a,b);
}
calculate (2,3, function(n1, n2){
    return n1+n2;
})
// console.log(calculate (2,3, function(n1, n2){
//     return n1+n2;
// }));

const x = calculate (2,3, function(n1, n2){
    return n1+n2;
})
console.log(x);





