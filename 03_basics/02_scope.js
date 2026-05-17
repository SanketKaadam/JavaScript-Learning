// In JS we can store anything in variable like any value, function, array, object, JSON etc

var a = 10
const b = 20
let c = 30  // if i uncomment b and c then it will print this values not from if block values, but in case of variable a that value chnage bcoz we chnaged a value in if block and that updted value will be print

if(true){
    var a = 40
    const b = 50
    let c = 60
}

// console.log(a); // giving output 40 evenn i defined a inside block which not accesseceble from outside of block thast why var we don't use.
// console.log(b); // exception b is not defined 
// console.log(c); // exception c is not defined 

// if you defined in globle scope that will be accesseble in global and block scope, but variable defined inside block scope only accessble to that block not globaly.

// globle scop for browser dev tool are different from this node where we run JS programs

function one(){
    let name  = "sanket"

    function two (){
        console.log(name); // this worked accesseble
        let city = "mumbai"
        
    }

   //console.log(city); // gave exception bcoz not accesseble

    two();
    
}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5)) // here we calling function before the function define, still it work

function addone(num){
    return num + 1
}



//addTwo(5) // here when try to call function before defining function giving error. 
const addTwo = function(num){ // this is expression where we same time we calling function and storing value in variable
    return num + 2
}

// this concept call mini hosting we will lern more on this in future

/*
What is Hoisting?

Hoisting means:
JavaScript moves declarations to the top of their scope before code execution.
Because of this, sometimes you can use variables or functions before declaring them.

Simple Definition
Before executing your code, JavaScript scans the code and:
creates memory for variables and functions
stores declarations in memory
This behavior is called Hoisting.

JavaScript Execution Phases

Whenever JS runs code, it works in 2 phases:

1️⃣ Memory Creation Phase
JavaScript allocates memory.
variables → undefined
function declarations → complete function stored

2️⃣ Execution Phase
Code executes line by line.
Assignments happen here.

*/

// Example 1 — var Hoisting
console.log(num1);

var num1 = 10;

console.log(num1);

/*
Step 1: Memory Creation Phase
JS sees:
var a;

Memory:
| Variable | Value     |
| -------- | --------- |
| a        | undefined |


Step 2: Execution Phase
Line 1
console.log(a);

Output:
undefined

because currently a = undefined

Line 2
a = 10;

Now memory becomes:
| Variable | Value |
| -------- | ----- |
| a        | 10    |

Line 3
console.log(a);

Output:
10

Internally JavaScript Treats It Like
var a;

console.log(a);

a = 10;

console.log(a);

*/

// Example 2 — let Hoisting
console.log(age);

let age = 25;

// Output: ReferenceError: Cannot access 'age' before initialization

/*

Why?

let is also hoisted.

BUT JavaScript keeps it in a special area called:

Temporal Dead Zone (TDZ)
What is TDZ?

The time between:

variable hoisted
and variable initialized

is called TDZ.

During TDZ you cannot access variable.

Internal Working

Memory phase:
| Variable | Value         |
| -------- | ------------- |
| age      | uninitialized |

Execution:
console.log(age);

❌ Error because still inside TDZ.

Then:
let age = 25;

Now TDZ ends.
--------------------------------

const Hoisting

Same as let.

console.log(pi);

const pi = 3.14;

Output:
ReferenceError

Difference Between var and let
| Feature                   | var       | let           |
| ------------------------- | --------- | ------------- |
| Hoisted                   | Yes       | Yes           |
| Initial value             | undefined | uninitialized |
| Access before declaration | Allowed   | Error         |
| TDZ                       | No        | Yes           |



Why var have special Behavior?
Because var came first in old JavaScript.
Later, JavaScript creators realized var had many problems, so in ES6 they introduced let and const with safer behavior.
JavaScript keeps special behavior for var to avoid breaking old code written before let and const existed.

Why Not Change var Behavior?
Because millions of old websites already depended on old behavior.

If JavaScript suddenly changed var:
old websites would break
browsers would become incompatible

So JavaScript kept old var behavior for backward compatibility.

----------------------------

Function Hoisting
Function Declaration
greet();

function greet() {
    console.log("Hello");
}

Output:
Hello

Why?

Entire function stored in memory phase.

Memory:
| Name  | Value             |
| ----- | ----------------- |
| greet | complete function |

So callable before declaration.

Internal Representation
function greet() {
    console.log("Hello");
}

greet();

-----------------------------------

Function Expression Hoisting
sayHi();

var sayHi = function() {
    console.log("Hi");
}

Output:
TypeError: sayHi is not a function

Why?

Memory phase:
var sayHi = undefined;

Execution:
sayHi();

Actually:
undefined();

❌ Error

Arrow Function Hoisting
hello();

const hello = () => {
    console.log("hello");
}

Output:
ReferenceError

Because const has TDZ.

Most Important Interview Point
Hoisting does NOT move code physically.

JavaScript internally creates memory references before execution.

Common Interview Questions
Q1: Is let hoisted?

✅ Yes

But inaccessible due to TDZ.

Q2: Why var gives undefined but let gives error?

Because:
var initialized with undefined
let stays uninitialized until declaration line

Q3: Which is fully hoisted?
✅ Function declarations

Best Practice

Avoid relying on hoisting.

Always:
declare variables at top
use let and const
avoid var

| Type                 | Hoisted | Initial Value     | Access Before Declaration |
| -------------------- | ------- | ----------------- | ------------------------- |
| `var`                | Yes     | undefined         | Yes                       |
| `let`                | Yes     | uninitialized     | No                        |
| `const`              | Yes     | uninitialized     | No                        |
| Function Declaration | Yes     | complete function | Yes                       |
| Function Expression  | Partial | undefined         | No                        |

*/