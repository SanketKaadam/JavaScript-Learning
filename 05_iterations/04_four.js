/*
for...in loop is used to iterate over keys (property names) of an object.

Syntax
for (const key in object) {
    // code
}


Object Example
const user = {
    name: "Sanket",
    age: 25,
    city: "Mumbai"
};

for (const key in user) {
    console.log(key);
}

Output:
name
age
city
*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Getting Key and Values
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*
Important Point

In for...in:

key
contains the property name.

To access value:
object[key]

We use square brackets because key is a variable.
*/


/*
Array with for...in
const arr = ["a", "b", "c"];

for (const key in arr) {
    console.log(key);
}

Output:
0
1
2

It gives indexes, not values.
*/
const programming = ["js", "rb", "py", "java", "cpp"]

// to get array values we use []
for (const key in programming) {
    //console.log(programming[key]);
}

/*
Difference Between for...in and for...of
| Loop       | Used For        | Returns      |
| ---------- | --------------- | ------------ |
| `for...in` | objects         | keys/indexes |
| `for...of` | iterable values | values       |


Interview Important Point
Usually:
for...in → objects
for...of → arrays/strings

Why Not Prefer for...in for Arrays?
Because it iterates over keys and can also include custom properties.

Example:
const arr = ["a", "b"];
arr.extra = "hello";

for (const key in arr) {
    console.log(key);
}

Output:
0
1
extra

So for arrays, for...of is safer.

Interview One-Line Answer
for...in loop is used to iterate over keys or property names of an object.
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India2") // duplicate key with override value

for (const key in map) {
    console.log(key); // no output
}

/*
for...in does NOT work properly with Map.

Why?

Because:
for...in
works on object keys (enumerable properties).
But Map stores data internally, not as normal object properties.
So for...in cannot iterate Map entries.

Important Point
Map is iterable.

So:
✅ for...of works
❌ for...in does not work

Interview One-Line Answer
for...in does not work with Map because Map is iterable, not a normal enumerable 
object. Use for...of instead.

Enumerable properties means:
properties that are visible during looping.

Real Meaning

Every object property has hidden settings called:
writable
configurable
enumerable

Example internally:
name: {
   value: "Sanket",
   enumerable: true
}

If:
enumerable: true
then loop can see it.

If:
enumerable: false
then loop cannot see it.


Example of Non-Enumerable Property
const user = {
    name: "Sanket"
};

Object.defineProperty(user, "age", {
    value: 25,
    enumerable: false
});

for (const key in user) {
    console.log(key);
}

Output:
name

age is hidden from loop because:
enumerable: false


Why Map Doesn't Work with for...in
Because Map data is NOT stored as enumerable object properties.

So:
for...in

cannot see Map entries.
But Map is iterable, so:
for...of

works.

Easy Interview Definition
Enumerable properties are object properties that are visible during iteration 
like for...in or Object.keys().
*/

// this 'for of' will work and print key and value
for (const entry of map) {
    console.log(entry);
}