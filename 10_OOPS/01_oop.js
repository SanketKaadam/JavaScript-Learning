// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    //return this even you don't write return implicitly it return the values
}


const userOne1 =  User("hitesh", 12, true)
const userTwo2 =  User("ChaiAurCode", 11, false)
// in above we don't use new keyword, so when you print userOne1 that time it print
//  with value "ChaiAurCode", 11, false bcoz in userTwo2 we overriding the values, 
// even you printing userOne1, new updated values are printing. to resolve this
//  issue we use new keyword.

// this new keyword is called constucter function
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);
// this new keyword give new instance of that object

/*
You are learning one of the most important JavaScript concepts:

```text
constructor function + new keyword + this
```

Your understanding is mostly correct. Let’s deeply understand what is happening.

---

# First understand normal function call

```javascript
const userOne1 = User("hitesh", 12, true)
const userTwo2 = User("ChaiAurCode", 11, false)
```

Here you DID NOT use:

```javascript
new
```

So `User()` behaves like a normal function.

---

# What happens internally?

When function runs:

```javascript
this.username = username;
```

`this` depends on how function is called.

Since you called:

```javascript
User()
```

without `new`,
in browser:

```text
this = window object
```

in Node.js:

```text
this = global object
```

So internally:

```javascript
global.username = "hitesh"
```

then second call overrides:

```javascript
global.username = "ChaiAurCode"
```

That’s why old values disappear.

---

# Important point

Without `new`:

```text
No new object is created
```

All values go into same global object.

---

# Visual Flow WITHOUT new

## First call

```javascript
User("hitesh", 12, true)
```

Global object becomes:

```javascript
{
   username: "hitesh",
   loginCount: 12,
   isLoggedIn: true
}
```

---

## Second call

```javascript
User("ChaiAurCode", 11, false)
```

Now same object updates:

```javascript
{
   username: "ChaiAurCode",
   loginCount: 11,
   isLoggedIn: false
}
```

Old values overwritten.

---

# Now understand `new`

```javascript
const userOne = new User("hitesh", 12, true)
```

This changes everything.

---

# What `new` does internally

When you use:

```javascript
new User()
```

JavaScript internally does 4 steps.

---

# STEP 1 → Creates empty object

```javascript
{}
```

---

# STEP 2 → `this` points to new object

```javascript
this = {}
```

---

# STEP 3 → Executes function

```javascript
this.username = username
```

becomes:

```javascript
{
   username: "hitesh"
}
```

---

# STEP 4 → Returns object automatically

Even if you don't write:

```javascript
return this
```

JavaScript automatically returns it.

---

# So this:

```javascript
const userOne = new User("hitesh", 12, true)
```

creates:

```javascript
{
   username: "hitesh",
   loginCount: 12,
   isLoggedIn: true,
   greeting: function(){}
}
```

---

# Then second object

```javascript
const userTwo = new User("ChaiAurCode", 11, false)
```

creates completely separate object.

So:

```text
No overriding happens
```

---

# Why called Constructor Function?

Because function constructs (creates) objects.

By convention constructor function starts with capital letter:

```javascript
function User(){}
```

---

# Important Line

```javascript
console.log(userOne.constructor);
```

Output:

```javascript
[Function: User]
```

because:

```text
constructor property points to function used to create object
```

---

# Visual Memory Diagram

## Without `new`

```text
GLOBAL OBJECT
----------------
username = overwritten
loginCount = overwritten
```

---

## With `new`

```text
userOne  ---> Object1
userTwo  ---> Object2
```

Separate memory.

---

# Important Interview Question

## Why use `new` keyword?

Answer:

```text
new keyword creates a new object instance,
binds this to that object,
and returns the object automatically.
```

---

# One More Important Thing

This method:

```javascript
this.greeting = function(){}
```

gets copied into every object.

So:

```text
Each object gets separate function copy
```

This wastes memory.

Better approach later:

```javascript
User.prototype.greeting = function(){}
```

Then all objects share same function.

You’ll learn this in prototypes.

*/