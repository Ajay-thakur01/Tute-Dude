// // Map, Filter, Find, Reduce

// const ourArray : [1,2,3,4,5,6];

// console.log(ourArray);

// // 1. Map

// // ourArray.map(function () {})

// //  const mapNewArr : ourArray.map( (data)  :> {
// //     return data +50;
// // } )
// // console.log(mapNewArr);

//  const mapNewArr : ourArray.map( (data)  :> data +60 );
// console.log("Map", mapNewArr);


// //  2. Filter

// const filterNewArr : ourArray.filter( (data) :> data < 4 )
// console.log("Filter",filterNewArr);

// // 3. Find
 
// const findNewArr : ourArray.find((data) :> data < 5 );
// console.log("Find",findNewArr);

// // 4. Reduce

// const reduceNewArray : ourArray.reduce((acumulatorvalue, currentvalue) :> {
//     return acumulatorvalue + currentvalue
// },0)
// console.log("Reduce",reduceNewArray);



const students = [
    {id: "001", name:"Ajay", sports: "Cricket"},
    {id : "002", name :"Rohan", sports : "BasketBall"},
    {id : "003", name :"Rohit", sports : "Kabaddi"},
    {id : "004", name :"Atul", sports : "Cricket"},
    {id : "005", name :"Akshay", sports : "Badimentin"},
    {id : "006", name :"Amit", sports : "Shooting"},
];

console.log(students)

// const filterResult = students.filter((data) => {
//     return data.id % 2 ==0;
// })
// console.log("Filter Rersult",filterResult);

// const newArr = [];
//     for(let i=0; i<students.length; i++){
//         if(students[i].id % 2 == 0) {
//             newArr.push(students[i])
//         }
//     }

// console.log(newArr);

const names = students
// .filter((val) => val.sports === "Cricket")
.map((data) => `<li>${data.name}</li>`);
console.log("Filter",names);

const div = document.getElementById('box2');
div.innerHTML = `<ul>${names.join("")}</ul>`;
