// to save from global population we use IIFE

// Immediately Invoked Function Expressions (IIFE)

/*
IIFE stands for Immediately Invoked Function Expression.

It is a function that:
is created
and runs immediately after creation.

*/


(function chai(){
    // named IIFE means we crated IIFE fuctions using function name
    console.log(`DB CONNECTED`);
})(); // if you don't put ; here then it will give error, we need to tell JS that this IIFE fuction end here.
// 1st () wraped function inside () and 2nd () we use to when we want to call any fuction
// () -> wrapped fucntion in in this, mean this function name, now to call this we do ()()


// With Arrow Function
( (name) => {
    // unnamed IIFE means we crated IIFE fuctions without using function name
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // here in 2nd () we can pass argumnent for function.

/*
Why use IIFE?
Before let and const, JavaScript had scope problems with var.
IIFE was used to create a private scope.

Example:

(function () {
    var message = "secret";
    console.log(message);
})();

console.log(message); // Error

message exists only inside the IIFE.

Interview Definition
IIFE is a JavaScript function that executes immediately after it is defined.

Real-world Use
Used for:
avoiding global variable pollution
creating private scope
executing setup code immediately
*/