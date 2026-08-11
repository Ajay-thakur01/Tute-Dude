// Dummy Array
let arr = [12, 7, 25, 18, 9, 31, 4];
console.log("Array:", arr);

// 1. Find Maximum Number

console.log ("Array length is :",arr.length);


// 2. Anonymous Function - Calculate Sum
const findSum = function (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
};
console.log("Sum of Elements:", findSum(arr));

// 3. Regular Function - Count Odd Numbers
function countOdd(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
}
console.log("Number of Odd Elements:", countOdd(arr));

