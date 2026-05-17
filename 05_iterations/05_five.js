/*
forEach is only used for array?
No. forEach() is mainly used with arrays, but it can also work with some other 
collection types.

1. Array
const arr = [1, 2, 3];

arr.forEach((value) => {
    console.log(value);
});

✅ Works

2. Map
const map = new Map();

map.set("IN", "India");
map.set("USA", "America");

map.forEach((value, key) => {
    console.log(key, value);
});

Output:

IN India
USA America

✅ Works

3. Set
const set = new Set([10, 20, 30]);

set.forEach((value) => {
    console.log(value);
});

Output:

10
20
30

✅ Works

4. Normal Object
const user = {
    name: "Sanket",
    age: 25
};

user.forEach((value) => {
    console.log(value);
});

❌ Error:
user.forEach is not a function

Because normal objects do not have forEach() method.

How to Use forEach on Object?
Convert object into array first.

Using Object.keys()
const user = {
    name: "Sanket",
    age: 25
};

Object.keys(user).forEach((key) => {
    console.log(key, user[key]);
});

Output:
name Sanket
age 25

Important Concept

forEach() is not a JavaScript keyword like:

for
for...of
for...in

It is a method available on some data structures.

Interview Important Point
| Data Type     | `forEach()` |
| ------------- | ----------- |
| Array         | ✅           |
| Map           | ✅           |
| Set           | ✅           |
| String        | ❌           |
| Normal Object | ❌           |


Why String Doesn't Have forEach?
const str = "hello";

str.forEach(); // Error

Because string is iterable, but it does not contain forEach() method.

Use:
for...of

for strings.

Interview One-Line Answer
forEach() is mostly used with arrays, but it also works with Map and Set because 
they provide a forEach method. Normal objects and strings do not have forEach().
*/

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// here we withe function which print value passed in parameter
function printMe(item){
    console.log(item);
}

// here we use that object
//coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )