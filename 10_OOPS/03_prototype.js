let myName = "hitesh     "
let mychannel = "chai     "

console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// when you declear any function, array or anything, and try to print that you get output with prototype you can see this in web console, this protoype have by default many function that inheritaed from parent class.  you can add your own function in parent object and we know that everything like function array etc inherate functions from parent object,  so our custome function is avaliable for every one. below is the code to create custome functions in parent object. 
// we can create custome function for specific child object(object that we create ) also, that fucnction available only to instance of that child object. In 02_object.js notes we defined this.

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// here above we created custome function at Array object now this fuction is 
// available till Array object only it will not present at parent Object bcoz of
//  this it only accesseble to array that we create. every object that we create not 
// able to access this.

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh() // not accessable and gave exception.

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // this will help to share properties or fuctions of one object that we created with other object that we created. Now Teacher object also use User object properties. below is modern way to do this

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

// here we cretae custome function in String object that available for all strings  
String.prototype.trueLength = function(){
    console.log(`${this}`); // this means current context
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() // 
"hitesh".trueLength() // here current context is hitesh
"iceTea".trueLength() // here current context is iceTea


/*
This code is about:

```text id="8b85ol"
Prototype inheritance in JavaScript
```

You are connecting objects together so one object can access properties of another object.

---

# Your Objects

```javascript id="jlwmnr"
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
```

---

# First understand this line

```javascript id="q5vjlwm"
Teacher.__proto__ = User
```

This means:

```text id="jlwmns"
Teacher inherits properties from User
```

---

# Visual

```text id="jlwmnt"
Teacher
   ↓
User
```

So if property is NOT found in `Teacher`,
JavaScript searches inside `User`.

---

# Example

```javascript id="jlwmnu"
console.log(Teacher.makeVideo);
```

Output:

```text id="jlwmnv"
true
```

because property exists directly inside `Teacher`.

---

# But this:

```javascript id="jlwmnw"
console.log(Teacher.name);
```

Output:

```text id="jlwmnx"
chai
```

Why?

Because JS searches:

```text id="jlwmny"
1. Teacher object
2. Teacher.__proto__ → User
```

and finds:

```javascript id="jlwmnz"
name: "chai"
```

---

# This process is called:

```text id="jlwmo0"
Prototype Chain
```

---

# Now understand TASupport

```javascript id="jlwmo1"
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
```

Meaning:

```text id="jlwmo2"
TASupport inherits from TeachingSupport
```

---

# Visual

```text id="jlwmo3"
TASupport
   ↓
TeachingSupport
```

---

# Example

```javascript id="jlwmo4"
console.log(TASupport.makeAssignment);
```

Output:

```text id="jlwmo5"
JS assignment
```

direct property.

---

# But:

```javascript id="jlwmo6"
console.log(TASupport.isAvailable);
```

Output:

```text id="jlwmo7"
false
```

because JS searches prototype.

---

# Internal Working

When you access:

```javascript id="jlwmo8"
TASupport.isAvailable
```

JavaScript internally does:

```text id="jlwmo9"
Does TASupport have isAvailable?
NO

Go to __proto__

Does TeachingSupport have isAvailable?
YES
```

Then returns:

```javascript id="jlwmoa"
false
```

---

# Important Concept

## `__proto__`

means:

```text id="jlwmob"
Parent object reference
```

---

# Modern way (Recommended)

Instead of:

```javascript id="jlwmoc"
Teacher.__proto__ = User
```

modern JS prefers:

```javascript id="jlwmod"
Object.setPrototypeOf(Teacher, User)
```

because `__proto__` is old style.

---

# Prototype Chain Example

Suppose:

```javascript id="jlwmoe"
Teacher.__proto__ = User
```

Then:

```text id="jlwmof"
Teacher
   ↓
User
   ↓
Object.prototype
   ↓
null
```

Every object ultimately connects to:

```javascript id="jlwmog"
Object.prototype
```

---

# Why JavaScript uses prototype inheritance?

To:

* share properties
* reuse methods
* avoid duplication
* support inheritance

---

# Real-world analogy

```text id="jlwmoh"
Teacher is a User
TA Support is TeachingSupport
```

So child object gets parent features.

---

# Important Difference

This is NOT copying.

JavaScript does NOT copy properties.

Instead:

```text id="jlwmoi"
It creates a link between objects
```

---

# Example

If later you do:

```javascript id="jlwmoj"
User.city = "Mumbai"
```

Then:

```javascript id="jlwmok"
console.log(Teacher.city)
```

also works.

Because Teacher is linked to User.

---

# Interview Point

```text id="jlwmol"
JavaScript inheritance is prototype-based inheritance.
```

NOT class-based like Java/C++ internally.

Even JS `class` keyword internally uses prototypes.

*/