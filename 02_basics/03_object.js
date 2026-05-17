/*

Interview Answer

Main ways to create objects in JavaScript:
1. Object Literal { }
2. new Object()
3. Constructor Function
4. ES6 Class
5. Object.create()

Most commonly used:
{}
(Object Literal)


1️⃣ Object Literal (Most Common)
const user = {
    name: "Sanket",
    age: 25
}

console.log(user);


2️⃣ Using new Object()
const user = new Object()

user.name = "Sanket"
user.age = 25

console.log(user);


3️⃣ Constructor Function
function User(name, age) {
    this.name = name
    this.age = age
}

const u1 = new User("Sanket", 25)
console.log(u1);

Used before ES6 classes.


4️⃣ Using ES6 Class
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const u1 = new User("Sanket", 25)
console.log(u1);


5️⃣ Using Object.create()
const userPrototype = {
    greet() {
        console.log("Hello");
    }
}

const user = Object.create(userPrototype)

user.name = "Sanket"

console.log(user);

Used for prototype-based inheritance.

*/

const id = Symbol("key")

let person = {
    [id] : "myValue",  // this way we can use Symbol as key, use square brakets
    name : "sanket",  // internaly all key are Strings
    age : 25,
    "full name" : "sanket kadam",
    email : "sanket@gmail.com",
    isLoggedIn : true,
    lastLoggedIn : ["monday", "tuesday"]
}

// console.log(person);
// console.log(person.name); // keys are string thats why we are accessing using . dot operater
// console.log(person["name"]); // here we use key name with double quotes bcoz of string and not use . dot, this is good way

// //console.log(person.full name) //Exception, this not possible even we define string(double quots ) in key
// console.log(person["full name"]) // output: sanket kadam
// console.log(person[id] ) //this we can access Symbol, no double quotes

person.email = "sanket@zoho.com"
//console.log(person);
//Object.freeze(person) // object is freez we can't change its values
person.email = "sanket@hdfc.com" // it will not give any error but value is not chnaged
//console.log(person);

person.xyx = "xxxx" // this will add new key and value in person object 

//console.log(person);

// In JS we can treat functions like variables

person.greeting = function(){ // here i store function in person object with variable greeting
    console.log("I am learning functions");
    
}

// console.log(person);
// console.log(person.greeting); // [Function (anonymous)]
// console.log(person.greeting());

person.greeting2 = function(){
    console.log(`I am learning functions ${person.name}`);
    
}

console.log(person.greeting2());

/*

will print:

I am learning functions sanket
undefined
Why undefined?

Because your function:

person.greeting2 = function(){
    console.log(`I am learning functions ${person.name}`);
}

does not return anything.

So:

console.log(person.greeting2());

means:

Function runs → prints message
Function returns undefined
console.log() prints that undefined

*/
