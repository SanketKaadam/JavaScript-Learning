"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser, this work on browser not in node.

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;
let temp = null;

// ECMA  is organigazion which help to provide standardization of javascript, 
// priviously all browsers use there own rules to run javascript which create problem
// to solve this ECMA is formed.


// JavaScript has 7 primitive types:
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value eg let temp = null; → primitive value representing intentional absence of value
// undefined => value not assign eg let state;
// symbol => unique


// object (non-primitive datatype)
/*
In JavaScript, non-primitive types are mainly:

Object
Arrays
Functions

But technically, Arrays and Functions are also Objects.

So JavaScript has only one real non-primitive type → Object.

Interview-Friendly Answer
JavaScript has only one non-primitive type called Object.
Arrays, functions, dates, maps, sets, etc. are all special kinds of objects.
Non-primitives are mutable and stored by reference.
*/

console.log(typeof undefined); // undefined
console.log(typeof null); // object 


/*
null is a primitive type in JavaScript.

This is a historical bug in JavaScript from the early days.
Even though typeof null returns "object", null is still considered a primitive 
value, not an object.



*/