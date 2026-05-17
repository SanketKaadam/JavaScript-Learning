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


// Below are the primitive datatype
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value eg let temp = null;
// undefined => value not assign eg let state;
// symbol => unique


// object (non-primitive datatype)

console.log(typeof undefined); // undefined
console.log(typeof null); // object , null is object in JS