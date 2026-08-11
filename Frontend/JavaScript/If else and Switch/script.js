console.log("First Line");
const cAge = 21 ; // cAge = Candidate Age

if(cAge >= 60) { 
    console.log("Senior Allowed to Vote");
}
else if (cAge >=18) {
    console.log("Candidate is Allowed to vote :-)");   
}
else {
    console.log("Candidate is not Allowed to vote :-(");
}

console.log("Second Line");


// Ternary Operator

cAge >=20 ? console.log("EIGIBLE TO VOTE") : console.log("Not Eligible");


// Switche In Js

const x = 119 ; 
switch (x) {
    case x>=90:
        console.log("A+");
        break;
        case x>=80 : 
        console.log("A");
        break;
        case x>=70:
        console.log("B");
        break;
        case x>=60:
            console.log("C"); 
        break;
        case x>100:
            console.log("Undefined Value");
        break;           
    default:
        console.log("Need to improve");
        break;
}

