// let C = 25; //temperature in Celcious

// let F = C*(9/5)+32; // Formula to convert Temp. into Faranheit

// console.log(`${C}°C is ${C *(9/5) + 32}°F`);/

//  >>> Odd number
// let x = 39;
// if (x % 2 === 0) {
//     console.log(`${x} is an Even number`);  
// }else{
//     console.log(`${x} is an Odd number`);  
// }

// >>> Sum of N number LOOP

// let n = 5;
// let sum = 0;
// for (let i  = 0; i <= n; i++) {
//     sum+=i ;
// }
// console.log(`The Sum of numbers from 1 to ${n} is : ${sum}`);


//  >>> Find the Largest number

let arr = [3, 4, 6, 7, 1];

const findmax = (arr)=>{
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}
console.log(findmax(arr));

const findMin = (x)=>{
    if (x.length === 0){
        console.log("Array is Empty");     
    }
    
    let min = x[0];
    for(let i = 0; i< x.length; i++){
        if (x[i]<min){
        min= x[i];
    }
    }
    return min;
}
console.log(findMin(arr));
