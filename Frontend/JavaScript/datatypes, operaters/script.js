   // // let, cont, var
   //      let name = "Ajay" ;
   //      let age = "22" ;
   //      let x = 69 ;
   //      let isEligibleToVote =true ;
   //      // console.log("My Name is "+name)
   //      console.log("My Name is",name) ;
   //      console.log("My age is",age);
   //      console.log(isEligibleToVote) ;

   //      let a = 10;
   //      let b = 5;
   //      let sum = a+b;
   //      // console.log(a+b);
   //      console.log(sum) ;
   //      console.log(sum-a) ;

   //      let varName = "Rohan" ;
   //      console.log(varName) ;
   //      varName = 'Intro to JS' ;
   //      console.log(varName) ;
   //      varName = 9 ;
   //      console.log(varName) ;

   //      const pet = "Jadu" ;
   //      // pet = 'abc'
   //      console.log(pet) 

   //    //   global variable and let is a local variable

   //      var college = "Arni University" ;
   //      college = "811"
   //      console.log(college) ;


   // Data Types

   // let a = 123 ;
   // console.log(a) ;
   // console.log("type of a is",typeof(a)) ;

   // a = "123" ;
   // console.log(a) ;
   // console.log("type of a is",typeof(a)) ;

   // a = 'Ajay'
   // console.log(a) ;
   // console.log("type of a is",typeof(a)) ;

   // a = true ;
   // console.log(a) ;
   // console.log("type of a is",typeof(a)) ;

   // let b;
   // console.log(b)
   // console.log("type of a is",typeof(b))

   // let x=5;
   // let y= "6";  
   // let sum=null;
   // sum=x+y;
   // console.log(sum)
   // console.log(typeof(sum))

   // // String(x);
   // result = String(x);
   // console.log(typeof(x))
   // console.log(typeof(result))


   // Operaters in JavaScript


   // const a=5;  // here = is a assignment operator
   // const b=3;

   // const sum = a+b ;
   // console.log(a+b); // here + is a arithmatic operator
   // console.log(sum)

   // console.log(a-b); 
   // console.log(a*b); 
   // console.log(a/b); 
   // console.log(a%b); 

   // let x = 69 ;
   // x++;                  // here ++ is an increment operator
   // console.log(x);

   // let y = 69 ;
   // console.log(y--);
   // console.log(y);
   // console.log(y, x);
   // console.log(--y, ++x);


   // // Exponentiation 
   // let q= 1;
   // let w= 2;
   // const result = q**w
   // console.log(result);

   // // Short hand operator
   // r = a+b;
   // console.log(r);
   // r+=b;
   // console.log(r);

   // >> Equals (==)
   // >>Strict Equals (===)
   // let b = 5 ;
   // let a = 5 ;
   // console.log("Equals:",a==b);
   // console.log("Strict Equals:",a===b);
   

   // Logical AND (&&)

   // let a = true ;
   // let b = true ;
   // const result = a && b ;
   // console.log(result);

   // a = false ;
   // console.log(result);
   

   // Export Import logic

   // import { addition as add, multiply as mult } from "./utility.js";
   import * as utility from "./utility.js";

   // const result  = add (1, 2, 3);

   // console.log(result);

   // const multiply = mult (1,2,3);
   // console.log(multiply);

   const result  = utility.addition (1, 2, 3);

   console.log(result);

   const multiply = utility.multiply (1,2,3);
   console.log(multiply);
   

   
   
   
   




