/*
1. new Promise(...)
Here you are creating a Promise object.
A Promise is used for handling asynchronous work in JavaScript.

Example:
API calls
Database calls
File reading
Timers

2. Function inside Promise
function(resolve, reject)

When Promise is created, JavaScript automatically gives 2 functions:
| Function    | Purpose                     |
| ----------- | --------------------------- |
| `resolve()` | Task completed successfully |
| `reject()`  | Task failed                 |

You do not create these manually.
JavaScript provides them automatically.

3. This code runs immediately
console.log("promises 1 created...");

As soon as Promise is created, the function inside it executes immediately.

So output becomes:
promises 1 created...


4. resolve()
resolve()

This tells JavaScript:
"Promise completed successfully."

Now promise state changes:
pending  →  fulfilled

Promise States
| State     | Meaning             |
| --------- | ------------------- |
| pending   | Initial state       |
| fulfilled | Success (`resolve`) |
| rejected  | Failed (`reject`)   |


What happens internally
const promoses1 = new Promise(...)

Internally:
Promise created
State = pending
Function executes immediately
Console prints message
resolve() called
State becomes fulfilled

Important thing
Creating promise DOES NOT automatically show success result.
You need .then() to handle success.

Example:
const promoses1 = new Promise(function(resolve, reject){
    console.log("promises 1 created...");
    resolve()
})

promoses1.then(function(){
    console.log("promise consumed");
})

Output:
promises 1 created...
promise consumed

Why .then() runs after?
Because .then() handles the resolved value/result.

Flow:
Promise created
   ↓
resolve()
   ↓
.then() executes
*/


const promoses1 = new Promise(function(resolve, reject){
    console.log("promises 1 created...");
    resolve()
})

promoses1.then(function(){
    console.log("promises 1 consumed");
    
})

new Promise(function(resolve, reject){
    console.log("promises 2 is created...");
    resolve()
    
}).then(()=>{
    console.log("promises 2 consumed");
    
})

/*
Till here above code output is :
promises 1 created...
promises 2 is created...
promises 1 consumed
promises 2 consumed

question is why 1st promises 1 and 2 created called and then consumed?

Why this happens

Very important rule:
Promise executor runs immediately

This part:
function(resolve, reject){
    console.log("promises 1 created...");
    resolve()
}

runs instantly.

Same for second promise.

So JavaScript executes:

1. Create promise 1
2. Print "created"
3. resolve()
4. Register .then()
5. Create promise 2
6. Print "created"
7. resolve()
8. Register .then()
9. Call .then() callbacks

Main thing to understand
resolve() does NOT immediately execute .then().

Instead:
.then() callback goes into Microtask Queue

JavaScript first finishes all normal synchronous code.
After that, it executes .then() callbacks.


Step-by-step execution
STEP 1
const promoses1 = new Promise(...)

Immediately executes:
console.log("promises 1 created...");

Output:
promises 1 created...

Then:
resolve()

Promise becomes fulfilled.
BUT .then() callback does NOT run now.
It is kept in microtask queue.

STEP 2
JavaScript continues next synchronous code.
new Promise(...)
Again executor runs immediately.

Output:
promises 2 is created...

Again resolve() called.
Again .then() goes to microtask queue.

STEP 3
Now all synchronous code is finished.
Then JavaScript checks microtask queue.

Now it runs:
console.log("promises 1 consumed");

then:
console.log("promises 2 consumed");

Most important interview point
Promise executor = synchronous
.then() callback = asynchronous

This is the key concept.


Example to remember:
console.log("Start");

Promise.resolve().then(()=>{
    console.log("Promise");
})

console.log("End");

Output:
Start
End
Promise

Because .then() always waits until current synchronous code finishes.

*/



/*
why JS behave this way? 1st it call sync code and then async?
Because JavaScript is designed as a single-threaded synchronous language.

That means:
JavaScript executes one line at a time
It has one call stack
It cannot do multiple JS operations at the exact same moment

So JavaScript follows this rule:
Finish current work first
Then handle async callbacks


Why this design?
Imagine this code:

console.log("A");

setTimeout(()=>{
   console.log("B");
}, 0);

console.log("C");

If async code interrupted synchronous code immediately, output could become unpredictable.

But JavaScript guarantees:
A
C
B

This makes code predictable.


JavaScript Engine Architecture

JavaScript runtime has:
1. Call Stack
2. Web APIs / Browser APIs
3. Callback Queue
4. Microtask Queue
5. Event Loop



How JS actually works

Example:

console.log("Start");

Promise.resolve().then(()=>{
   console.log("Promise");
});

console.log("End");


Step 1 → Call Stack
console.log("Start");

Output:
Start

Step 2
Promise callback:
.then(()=>{
   console.log("Promise");
})

does NOT run immediately.
It goes into:
Microtask Queue

Step 3
Next synchronous line:
console.log("End");

Output:
End

Step 4
Now call stack becomes empty.

Event Loop checks:
Is stack empty?
YES

Then it executes microtasks.

Output:
Promise

Why Promises are special

Promise callbacks go into:
Microtask Queue
which has higher priority than normal callback queue.

So:
setTimeout(()=>console.log("timeout"),0);
Promise.resolve().then(()=>console.log("promise"));

Output:
promise
timeout

because:
Microtask Queue > Callback Queue


Core philosophy of JS
JavaScript was made for browsers.
Browser must stay responsive:
button clicks
scrolling
animations
API calls

If JS waited for every API/database/network operation synchronously:
Browser would freeze
So async behavior was introduced.
But to keep execution predictable:
Sync code first
Async callbacks later

*/  

// check why promises 1 and promises 2 created line is printing and then above both consume printed.

const promises3 = new Promise(function(resolve, reject){
    console.log("promises 3 created..");
    
    resolve({"username": "sanket", "id":12345})
})

promises3.then((obj)=>{
    console.log(obj);
    
})

/*
Why in resolver we pass JSON object and same object we got in .then ?
Because whatever value you pass inside resolve() becomes the result of the Promise.
That result is automatically received inside .then().

Important concept
resolve(value)

The value you pass becomes:
Promise Result
Then .then() receives that result.


Internally what happens
When you do:
resolve({"username": "sanket", "id":12345})

JavaScript internally stores:
Promise State  = fulfilled
Promise Result = {username: "sanket", id:12345}

Then .then() gets that stored result.


Flow
resolve(data)
      ↓
Promise stores data
      ↓
.then(callback)
      ↓
callback receives stored data
*/

const promises4 = new Promise(function(resolve, reject){
    console.log("promises 4 created..");
    let flag = false
    if(flag){
        resolve({"name":"Akashy", "age":25})
    }else{
        reject("Error ocure in code..")
    }
    
    
})

promises4.then((obj)=>{
    console.log(obj);
    return obj.name
    
}).then((data)=>{
    console.log(data);
    
}).catch((e)=>{
    console.log("exception : ", e);
    
}).finally(()=> console.log("finally block always excute")
)

/*
Your code is showing the complete Promise flow:
then()   → success handling
catch()  → error handling
finally() → always runs


STEP 2 →Check condition
if(flag)

Since:
flag = false

this block runs:
reject("Error ocure in code..")

Promise state becomes:
rejected

STEP 3 → .then() skipped
Because promise failed.
So this does NOT execute:

.then((obj)=>{
    console.log(obj);
    return obj.name
})

and second .then() also skipped.

STEP 4 → .catch() executes

Rejected promise automatically goes to:

.catch((e)=>{
    console.log("exception : ", e);
})

STEP 5 → .finally() executes
.finally(()=> console.log("finally block always excute"))

finally() always runs:
success
failure
error

doesn't matter.

Very Important Concept
Whatever you return from .then()
becomes input for next .then().


Interview Important Points
1. resolve() → goes to .then()
2. reject() → goes to .catch()
3. .finally() always executes
4. Returned value from one .then()
goes to next .then()
*/


const promises5 = new Promise((resolve, reject)=>{
    let flag = false

    if (flag) {

        resolve({"username": "XYZ123"})
        
    }else{
        reject("Error is there")
    }
})

async function promisesfive(){
    try{
        const responce = await promises5
        console.log(responce);
        
    }catch(e){
        console.log(e);
        
    }
}

promisesfive()

/*
This is using:
async + await

which is a cleaner way to handle Promises instead of using:
.then().catch()


First understand async

async function promisesfive()

async makes a function asynchronous.
Inside async function you can use:
await

why we need to use async to handle promises result?
Because Promise results come later, not immediately.
JavaScript does not stop execution and wait for Promise automatically.

So async/await gives us a way to:
Pause execution until Promise completes

in a clean readable way.


Problem without async/await
Suppose API takes 3 seconds.

const data = fetchData()

console.log(data);

Output:
Promise { <pending> }

Why?
Because:
API is still running

JavaScript continues immediately.


Main reason for async
await needs a special environment.
That environment is provided by:
async function


Why JavaScript requires this?
Because waiting/blocking entire JavaScript engine would freeze browser/app.

Example:
User clicks button
API takes 5 seconds

If JS completely stopped:
UI freezes
scrolling freezes
clicks freeze
animations freeze
Bad experience.

So JavaScript says:
"Don't block entire program."

Instead:
continue other work
resume later when Promise completes



Then why await looks blocking?

Because:
await pauses ONLY that async function
NOT entire JavaScript engine

Very important.

Example:
async function demo(){

   console.log("A");

   await Promise.resolve();

   console.log("B");
}

console.log("Start");

demo();

console.log("End");

Output:
Start
A
End
B

See:
only async function paused
whole JS did NOT stop

Golden Line:
async/await lets us write asynchronous code in synchronous-looking style without blocking JavaScript.


What await does
const responce = await promises5

means:
"Wait until promises5 completes"

If promise resolves:
result stored in responce

If promise rejects:
control goes to catch

Equivalent .then() version

Your code:

async function promisesfive(){
    try{
        const responce = await promises5
        console.log(responce);
        
    }catch(e){
        console.log(e);
    }
}

is same as:

promises5
.then((response)=>{
    console.log(response);
})
.catch((e)=>{
    console.log(e);
})

Why async/await introduced?
Because chaining many .then() becomes messy.

Example:

fetchUser()
.then(user => fetchOrders(user))
.then(order => fetchPayment(order))
.then(payment => console.log(payment))
.catch(err => console.log(err))

This becomes hard to read.

So async/await makes it look synchronous.

Cleaner version:

async function data(){
   try{
      const user = await fetchUser()
      const order = await fetchOrders(user)
      const payment = await fetchPayment(order)

      console.log(payment)

   }catch(err){
      console.log(err)
   }
}

Much cleaner.

Important Rule
await only works inside:
async function

Otherwise error occurs.


Important thing internally
Even though async/await looks synchronous:
It still works asynchronously internally using Promises.


Interview Point
async/await is syntactic sugar over Promises.

Meaning:
It internally still uses Promises
But syntax becomes cleaner and easier to read.
*/


/*
what happen when i don't call promisesfive()?

If you don't call:
promisesfive()

then the function is only created, not executed.

Q) but in promises function it will resolve and store that data in memory and
 if that result not use by don't calling async function then that store data
  still present in memory?

  Yes. Very good question.

The Promise object and its resolved data can still stay in memory as long as something references it.

Example:
const promises5 = new Promise((resolve, reject)=>{
    resolve({name:"Sanket"})
})

Here:
promises5 → references Promise object

and Promise internally stores:
State  = fulfilled
Result = {name:"Sanket"}

So even if you never do:

await promises5

or

promises5.then(...)

the resolved data still exists in memory because:
Variable promises5 is still pointing to Promise object


Simple visualization
STACK MEMORY
----------------
promises5  -----

HEAP MEMORY
----------------
Promise Object
   state : fulfilled
   result : {name:"Sanket"}



Then when will memory clear?

JavaScript uses:
Garbage Collector (GC)

Memory clears only when object becomes unreachable.

Example:
let promises5 = new Promise((resolve)=>{
    resolve({name:"Sanket"})
})

promises5 = null

Now:
No reference to Promise object

So garbage collector can remove it later.

Q) but if i don't do promises5 = null then ?

If you don't do:
promises5 = null

then the Promise object and its resolved data may continue to stay in memory.

Because:
promises5 variable is still referencing the Promise object

So Garbage Collector cannot remove it.

Important thing
JavaScript Garbage Collector removes only:
Unreachable objects
NOT unused objects.
This is the key difference.
*/

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

/*
This code is making an API call using:
fetch + async/await

and getting user data from internet.

Step-by-step Flow
STEP 1 → Function call
getAllUsers()

starts execution.

Because function is async,
it automatically returns a Promise internally.

STEP 2 → fetch()
fetch('https://jsonplaceholder.typicode.com/users')

fetch() sends HTTP request to server.

It returns a Promise.

Why Promise?

Because network request takes time:

internet latency
server processing
response transfer

So JavaScript cannot get result instantly.

STEP 3 → await fetch(...)
const response = await fetch(...)

means:

Pause this async function until API response arrives

After response comes:

response

contains HTTP response object.

NOT actual JSON data yet.

Important Concept

This:

response

is a Response object.

Example:

Response {
   body: ReadableStream,
   status: 200,
   ok: true,
   headers: ...
}
STEP 4 → response.json()
const data = await response.json()

Why needed?

Because API response body comes as raw JSON text.

Example server sends:

[
  {
    "id": 1,
    "name": "Leanne Graham"
  }
]

response.json() converts JSON text into JavaScript object/array.

Why second await?

Because JSON parsing is also asynchronous.

So:

await response.json()

waits until conversion completes.

STEP 5 → Print Data
console.log(data);

Output:

[
  {
    id: 1,
    name: "Leanne Graham",
    ...
  },
  ...
]

Array of users.

STEP 6 → catch

If:

internet fails
server down
invalid request

then error comes here:

catch(error)
Full Flow
getAllUsers()
      ↓
fetch() sends request
      ↓
Promise pending
      ↓
Server responds
      ↓
await fetch resolved
      ↓
response.json()
      ↓
JSON converted to JS object
      ↓
console.log(data)
Very Important Interview Concept
fetch() gives Response object

NOT actual data directly.

That's why we do:

response.json()

When you use:
fetch()

you usually do NOT need to manually create a Promise object.

Because:
fetch() already returns a Promise


Internally

This:

fetch(url)

is conceptually similar to:

return new Promise((resolve, reject)=>{
   // browser handles network request
})

Browser handles Promise creation internally for you.

Important difference
| Situation          | Need manual Promise? |
| ------------------ | -------------------- |
| `fetch()`          | No                   |
| `axios()`          | No                   |
| database libraries | Usually No           |
| `setTimeout()`     | Yes                  |
| custom async logic | Yes                  |

*/

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

// promises is not aware about status code, even responce came from backend with 404 it consider as right responce, so it only consider reject when there is problem with sending  request and it failed.

// in fetch video he showed digram of how fecth intenally work,
// serach these keyword to learn onFullFild, onRejection, data, web browser/node,  
// fetch life cycle