// for of

// ["", "", ""]
// [{}, {}, {}]

/*
for...of loop is used to iterate over values of iterable objects in JavaScript.

Iterable means:
Array
String
Map
Set
etc.

syntax:
for (const value of iterable) {
    // code
}
*/

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
    
}

/*
Important Interview Point
for...of works on iterable objects.
It does not work directly on normal objects.

❌ Wrong:

const user = {
    name: "Sanket",
    age: 25
};

for (const value of user) {
    console.log(value);
}

Output:
TypeError: user is not iterable

------------------------

How to Loop Object Values

Use Object.entries():

const user = {
    name: "Sanket",
    age: 25
};

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

Output:
name Sanket
age 25
-------------------------------------

When to Use

Use for...of when you need:
array values
string characters
clean readable loops

Interview One-Line Answer
for...of loop is used to iterate over values of iterable objects like arrays and strings.
*/