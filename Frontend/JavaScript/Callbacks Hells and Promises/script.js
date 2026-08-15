// console.log("First");
// console.log("Second");
// console.log("Three");

// setTimeout (function (){
//     console.log("This will bw executed after 3s:");
    
// },3000)

// function getCandies (callback1){
//     setTimeout(() =>{
//         const candies = " 🍬🍭";
//         console.log("In our getCandies method",candies);
//         callback1(candies)
//     },3000);
// }
// getCandies ((candies) => {
//     console.log("herer is our candy", candies);
    
// })


// Promises in JavaScript

// const ticket = new Promise(function(resolve, reject){
//     const isBoarded =true;
//     if(isBoarded){
//         resolve("You are ok to onboard");
//     }else{
//         reject ("You are not eligible to onboard");
//     }
// })

// ticket.then((data) => {
//     console.log("oh yes!", data);
    
// }).catch((data) => {
//     console.log("oh noo!", data);
    
// }).finally(()=>{
//     console.log("this will be executed all the time");
    
// })


//  function getCandies (){
//     return new Promise((resolve, reject) => {
//         // resolve("Success");
//         // reject("Denied");
//         setTimeout(() =>{
//             const candies = " 🍬🍭";
//             resolve(candies)
//         },3000);
//     })
// }

// console.log(getCandies());

// function handOverKeys(candies){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const Keys = candies+" 🔑";
//             resolve(Keys)
//             reject ("Key not Found")
//         },3000);
//     })
// }

// function onBoarding(keys){
//             return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const onBoarded = keys+"🏠";
//             resolve(onBoarded)
//         },3000);
//     })
// }

// getCandies()
// .then((candies)=>{
//     console.log("Here is the candy",candies);    
//     return handOverKeys(candies)
// })
// .then((Keys) => {
//     console.log("Here is the key",Keys);    
//     return handOverKeys(Keys)
// })
// .then((onBoarded)=>{
//     console.log("Welcomr to to the Restaurant",onBoarded);    
// })
// .catch((err)=>{
//     console.log("Error Ocured :-(",err);
    
// })
// .finally(()=>{
//     console.log("Happy to assist you");
    
// })
// console.log();


// Async function

// async function onboardCLient(){
//     try{
//     const candies= await getCandies();
//     console.log("Here is the candy", candies);
    
//     const Keys= await handOverKeys();
//     console.log("Here is the keys", Keys);

//     const onBoarded= await onBoarding();
//     console.log("Welcome to the restaurnt", onBoarded);
//     }
//     catch(err){
//         console.log("Error Ocured",err); 
//     }   
//     console.log("Happy to Assist you:");
    
// }

// onboardCLient()