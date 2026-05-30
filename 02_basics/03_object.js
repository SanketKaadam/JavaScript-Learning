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
// { name: 'Sanket', age: 25 }


2️⃣ Using new Object()
const user = new Object()

user.name = "Sanket"
user.age = 25

console.log(user);
// { name: 'Sanket', age: 25 }


3️⃣ Constructor Function
function User(name, age) {
    this.name = name
    this.age = age
}

const u1 = new User("Sanket", 25)
console.log(u1);
// User { name: 'Sanket', age: 25 }
In Node.js, the constructor name is often shown: User { name: 'Sanket', age: 25 }

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
// User { name: 'Sanket', age: 25 }


5️⃣ Using Object.create()
const userPrototype = {
    greet() {
        console.log("Hello");
    }
}

const user = Object.create(userPrototype)

user.name = "Sanket"

console.log(user);
// { name: 'Sanket' }

Only own properties are displayed.
But greet() is still available through the prototype:

user.greet();
// Hello

Used for prototype-based inheritance.

*/

/*
"Why do we use Symbols as object keys?"

Answer:

Symbols provide unique property keys. They prevent accidental property name 
collisions and allow libraries/frameworks to store internal metadata on objects 
without interfering with normal object properties.

Practical Reality

In your current React + Spring Boot work, you'll probably use:

Symbol()

very rarely.

But you'll see Symbols used internally by JavaScript, React, Node.js, and libraries.

For example, React internally uses Symbols to identify React elements and avoid conflicts.

So the main purpose is:

Unique object keys
+
Avoid name collisions
+
Store internal/hidden metadata

That's the entire reason Symbols were added to JavaScript.
*/

/*

Q) in object keys can be number or nay other datatype?
Yes, but with an important rule.

In a normal JavaScript object, keys can effectively be:

String
Symbol

Any other type is automatically converted to a string.

Number Keys
let obj = {
  1: "one",
  2: "two"
};

console.log(obj);

Output:

{ '1': 'one', '2': 'two' }

Internally:

{
  "1": "one",
  "2": "two"
}

The numbers become strings.

Boolean Keys
let obj = {
  true: "yes",
  false: "no"
};

console.log(obj);

Internally:

{
  "true": "yes",
  "false": "no"
}


Interview Answer

For a normal JavaScript object:

Object keys can only be String or Symbol.

If you use:

Number
Boolean
Object
Array
null

they are automatically converted to strings.

Examples:

obj[1]      // key becomes "1"
obj[true]   // key becomes "true"
obj[{}]     // key becomes "[object Object]"

If you need keys of any datatype without conversion, use the built-in collection Map:

const map = new Map();

map.set(1, "one");
map.set(true, "yes");
map.set({}, "object");

A Map can store keys of any type without converting them to strings.
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

console.log(person);
/*
{
  name: 'sanket',
  age: 25,
  'full name': 'sanket kadam',
  email: 'sanket@gmail.com',
  isLoggedIn: true,
  lastLoggedIn: [ 'monday', 'tuesday' ],
  [Symbol(key)]: 'myValue'
}
*/

console.log(person.name); // keys are string thats why we are accessing using . dot operater
// sanket

console.log(person["name"]); // here we use key name with double quotes bcoz of string and not use . dot, this is good way
// sanket

//console.log(person.full name) //Exception, this not possible even we define string(double quots ) in key
console.log(person["full name"]) // output: sanket kadam
//sanket kadam

console.log(person[id] ) //this we can access Symbol, no double quotes
//myValue

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
