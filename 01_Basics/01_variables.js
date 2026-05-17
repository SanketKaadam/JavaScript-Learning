const accountId = 123456
// we cant changes const variable value, if you change then it will throw exception.

var accountEmail = "sanket@gmail.com"
let accountPassword = "124578"
accountCity = "Mumbai" // we can declare variable like this but this is bad practice.
let accountState; 

//below i can re-assign value for var,let and undefine datatype, and it work
accountEmail = "sanket@gmail.com"
accountPassword = "124578"
accountCity = "Mumbai"


// by using console.table([]) to print all variable values in table.
console.table([accountId, accountEmail, accountPassword, accountState, accountCity]);



var x=10
console.log(x); // this print 10

// here i changed the value of x
x = 20;
console.log(x); // this print 20 without any exception

let y = 100;
console.log(y);// this print 100

// here i changed the value of y
y = 200;
console.log(y); // this print 200 without any exception

// So we can change the value of let and var they don't throw exception

let name = "Sanket";
//let name = "Akshay" // i can't use same variable if i use let, exception got.

var company = "HDFC";
var company = "ICICI"; // if i use var i can redeclare same variable with new value
console.log(company); // this printed ICICI

// that why we need to use let to declare variable not var

/*
Prefer not to use var
because of issue in block scope and functional scope
*/






// const dob; // initilization is must with const otherwise you will got exeption.
const dob = 30;

var z // no need to initilize -> undifined
//console.log(z);

let a; // no need to initilize -> undifined
//console.log(a);




// console.log(b); // exception, can't access b before initilization



/*

var, let, and const are called:

Variables declaration keywords

They are used to create variables in JavaScript.

*/

// check chatGPT Notes, link saved in NotePade
