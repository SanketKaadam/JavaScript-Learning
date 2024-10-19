// Primative DataType
let age = 30
let name = 'sanket'
let temp = null
let city;
let id = Symbol(123)
let acId  = Symbol("123")
let acNum = 12345678912365445n
let isLoggedIn = true

console.log(id === acId); // false, In JavaScript, each symbol created with Symbol() is guaranteed to be unique. Even if you provide the same description (or value) to Symbol(), the symbols will always be different.
console.log(typeof age);
console.log(typeof name);
console.log(typeof temp);
console.log(typeof city);
console.log(typeof id);
console.log(typeof acNum);
console.log(typeof acId);

// Referance or non-primitive

let days = ['Red', 'black', 'blue']

let person = {
    name : 'sanket',
    age : 25,
}

function greet(){
    console.log("Hello World..");
    
}

console.log(days);
console.log(person);
greet();

console.log(typeof days);
console.log(typeof person);
console.log(typeof greet);

//-------------------------- Notes ---------------------

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn1 = false
const outsideTemp = null
let userEmail;

const id1 = Symbol('123')
const anotherId = Symbol('123')

console.log(id1 === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


