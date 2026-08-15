const Calc = (a, b) =>{
return new Promise((resolve,reject)=>{
    if (b === 0){
        console.log("Divisior can not be Zero");
    }else{
        resolve ( a/b );
    }
})
}

Calc(10,2)
.then(result => console.log(result))
.catch(error => console.log(error));

Calc(220,2)
.then(result => console.log(result))
.catch(error => console.log(error));

Calc(9,7)
.then(result => console.log(result))
.catch(error => console.log(error));

Calc(69,0)
.then(result => console.log(result))
.catch(error => console.log(error));

Calc(2,10)
.then(result => console.log(result))
.catch(error => console.log(error));

Calc(10,9)
.then(result => console.log(result))
.catch(error => console.log(error));

Calc(77,47)
.then(result => console.log(result))
.catch(error => console.log(error));

