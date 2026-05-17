const user = {
    usernam : "sanket",
    age : 25,
    welcomeMsg : function(){
        //console.log(this.usernam); // 'this' means current context or current value, here current context is between this object scope that why it print sanket
        
        //console.log(this); // 'this' print object bcoz it has value as object 
        
    } 
}

user.welcomeMsg() // print sanket
user.usernam = "sam" // here i chnaged this context / value
user.welcomeMsg() // print sam

//console.log(this); // this 'this' print empty object {} bcoz this this don't have value in context, same this when we print inside browser dev tool it will return window{ .. ..} with values, In browser global objects are window object


function chai(){

    let name = "sanket"
    console.log(this.name) // giving undefined
    console.log(this); // in fuction it giving multiple things
    
}
//chai()

/*
this means:
"the object before the dot (.)"

Example 1
const user = {
   name: "sanket",

   showName: function(){
      console.log(this.name);
   }
}

user.showName();

Look carefully:
user.showName()

What is before dot?
user

So:
this = user

Therefore:
this.name

becomes:
user.name

Output:
sanket

Think Like This
JavaScript internally does:
console.log(user.name)

That is why it works.

Example 2
function chai(){

   let name = "sanket"

   console.log(this.name)

}

chai()

Now see carefully:
chai()

There is NO object before dot.

NOT:
something.chai()

Just:
chai()

So this does NOT point to your variable.

And:
let name = "sanket"

is just local variable.
NOT object property.

So:
this.name

cannot find it.

Output:
undefined

Most Important Difference :
This is LOCAL VARIABLE
let name = "sanket"

This is OBJECT PROPERTY
const user = {
   name: "sanket"
}

You can also give interviewer this one-line summary:
'this' accesses object properties, not local variables.
*/

// 'this' working in object but in fuction i am not able to use

const demo = function (){

    let name = "sanket"
    console.log(this.name) // giving undefined
    //console.log(this); // in fuction it giving multiple things
    
}

//demo() // demo is function name even we use as varibale name

/*
why in function 'this' give many thinks?
Because in a normal function, 'this' usually refers to the global object.
And global object contains many built-in properties and functions.
That is why you see many things printed.

Example
function chai(){
   console.log(this);
}

chai();

In Browser
this becomes:
window

And window object contains many things:

window
 ├── alert()
 ├── document
 ├── console
 ├── location
 ├── setTimeout()
 ├── localStorage
 └── many more...

So when you print:
console.log(this)

you see huge object.
-----------------------

Browser vs Node.js
Browser
Global object:
window

Node.js
Global object:
global

So output differs slightly.
--------------------------

Important
Normal Function
test()

this → global object

Object Method
obj.test()

this → obj

In a regular function call, this refers to the global object (window in browser), 
which contains many built-in properties and functions. That is why printing 
this shows many things.

In Node.js, when a normal function is called directly, this refers to the global 
object (globalThis). This global object contains all Node.js runtime utilities 
like setTimeout, process, console, etc., which is why we see a large object instead 
of {}. The {} only appears when this refers to module.exports at the top level.
-----------------------------------

*/

//console.log(this);

/*
then why i am get blank object like this '{}' if i directly print this like
 console.log(this)

 Good question — this is exactly where people get confused because this behaves 
 differently in different environments and modes.

In Node.js, this at the top level of a file refers to module.exports, 
which is initially {}. But inside a normal function call, this refers to
globalThis, which contains Node’s global runtime APIs, so we see a large 
object instead.


*/

const demo2 = ()=>{

    let name = "sanket"
    console.log(this.name) // giving undefined
    console.log(this); // in arraw fuction it giving empty object like {}
    
}

//demo2()

/*
Key concept: Arrow function this

Arrow functions do not have their own this.
They take this from the surrounding scope (lexical this).
*/

// const addTwo = (num1, num2) => {
//     //     return num1 + num2
//      }
    
    // const addTwo = (num1, num2) =>  num1 + num2
    
    // const addTwo = (num1, num2) => ( num1 + num2 )
    
    const addTwo = (num1, num2) => ({username: "hitesh"}) // if you returning object that time need to use {} and ()
    
    
    //console.log(addTwo(3, 4));
    
    
    // const myArray = [2, 5, 3, 7, 8]
    
    // myArray.forEach()




