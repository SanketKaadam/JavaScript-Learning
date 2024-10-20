// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


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
// here above we created custome function at Array object now this fuction is available till Array object only it will not present at parent Object bcoz of this it only accesseble to array that we create. every object that we create not able to access this.

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() // not accessable and gave exception.

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