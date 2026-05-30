function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);
// In JS everything is object, function are also object

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*
 function(){
   console.log("Hello");
}


Q) but why prototype is use, can we directly add function like User.greet =  function(){
   console.log("Hello");
}

Yes, you can do this:

```javascript
User.greet = function(){
   console.log("Hello");
}
```

But this creates a method on the **function object itself**, NOT on objects created using `new User()`.

This is the most important difference.

---

# Example

```javascript
function User(name){
   this.name = name
}

User.greet = function(){
   console.log("Hello");
}
```

Now:

```javascript
console.log(User.greet); // exists
```

But:

```javascript
const u1 = new User("Sanket")

u1.greet()
```

Output:

```text
TypeError: u1.greet is not a function
```

---

# Why?

Because:

```text
User.greet
```

belongs to:

```text
Function object User
```

NOT to objects created from it.

---

# Visual

```text
User Function Object
--------------------
greet()  ✅
prototype {}

u1 Object
--------------------
name : "Sanket"

NO greet()
```

---

# Then why use prototype?

Because methods added to prototype become available to ALL objects created with `new`.

---

# Correct way

```javascript
function User(name){
   this.name = name
}

User.prototype.greet = function(){
   console.log("Hello");
}
```

Now:

```javascript
const u1 = new User("Sanket")
const u2 = new User("Akash")
```

Both can access:

```javascript
u1.greet()
u2.greet()
```

Output:

```text
Hello
Hello
```

---

# How?

Because JavaScript internally links object to:

```javascript
User.prototype
```

using prototype chain.

---

# Visual Representation

```text
u1
 ↓
User.prototype
 ↓
greet()
```

When JS cannot find:

```javascript
u1.greet
```

inside object,
it searches parent prototype.

---

# Huge Advantage of prototype

## Memory optimization

Suppose:

```javascript
function User(name){

   this.name = name

   this.greet = function(){
      console.log("Hello");
   }
}
```

Now every object gets separate function copy.

```text
u1 → separate greet function
u2 → separate greet function
u3 → separate greet function
```

Waste of memory.

---

# With prototype

```javascript
User.prototype.greet = function(){
   console.log("Hello");
}
```

Now:

```text
One greet function shared by all objects
```

Much more efficient.

---

# Real-world analogy

Without prototype:

```text
Every student gets separate textbook copy handwritten by teacher
```

With prototype:

```text
All students share same printed textbook
```

---

# Important Difference

| Code                   | Belongs To                         |
| ---------------------- | ---------------------------------- |
| `User.greet`           | Function itself                    |
| `User.prototype.greet` | Objects created using `new User()` |

---

# Example

```javascript
function User(){}

User.greet = function(){
   console.log("Static");
}

User.prototype.sayHi = function(){
   console.log("Prototype");
}

const u1 = new User()

User.greet()      // works
u1.sayHi()        // works

u1.greet()        // error
```

---

# Interview Point

```text
Prototype is used to share properties and methods among all instances created from a constructor function.
```

This is one of the core concepts behind:

* inheritance
* classes
* object sharing
* memory optimization

in JavaScript.

*/