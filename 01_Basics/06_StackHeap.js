// stack (primitive)  and Heap (Non-premitive or reference)

let emailId = "sanket@gmail.com"
let upiId = emailId
upiId = "sanket@sbi"

console.log(emailId);
console.log(upiId);


let userOne = {
    city : "Mumbai",
    state : "Maharashtra",
}

let userTwo = userOne;

userTwo.state = "Delhi",
console.log(userOne.state);
console.log(userTwo.state);

/*

JavaScript stores data mainly in two places:
Stack Memory
Heap Memory

1️⃣ Stack Memory

Used for:
primitive datatypes
function execution


Stack stores actual value

Example:
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

Output:
10
20

Why?
Because copy is created.

Memory:
a → 10
b → 10

Then:
b → 20

a remains unchanged.

2️⃣ Heap Memory

Used for:
objects
arrays
functions

Heap stores actual data.
Stack stores reference (address).

Example
let user1 = {
  name: "Sanket"
};

let user2 = user1;
user2.name = "Rahul";

console.log(user1.name);

Output:
Rahul

Why?
Because both variables point to same object in heap memory.

Stack:
user1 ──┐
        └──> Heap Object
user2 ──┘

Changing through one reference changes original object.

Simple Difference
| Stack                   | Heap                  |
| ----------------------- | --------------------- |
| stores primitive values | stores objects/arrays |
| faster                  | slower                |
| fixed size              | dynamic size          |
| copy created            | reference shared      |


Interview Line
Primitive datatypes are copied by value, while objects and arrays are copied by reference.
*/