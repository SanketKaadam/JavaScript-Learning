// two we can create object 

// 1. Object.create  // it will create singleton object

// 2 object literals 

const id = Symbol("key")

let person = {
    [id] : "myValue",  // this way we can use Symbol as key, use square brakets
    name : "sanket",  // internaly all key are Strings
    age : 25,
    "full name" : "sanket kadam",
    email : "sanket@gmail.com",
    isLoggedIn : true,
    lastLoggedIn : ["monday", "tuesday"]
}

//console.log(person);
//console.log(person.name); // keys are string thats why we are accessing using . dot operater
//console.log(person["name"]); // here we use key name with double quotes bcoz of string and not use . dot, this is good way

//console.log(person.full name) // this not possible even we define string(double quots ) in key
// console.log(person["full name"])
// console.log(person[id] ) //this we can access Symbol, no double quotes

// person.email = "sanket@zoho.com"
// console.log(person);
// Object.freeze(person) // object is freez we can't change its values
// person.email = "sanket@hdfc.com" // it will not give any error but value is not chnaged
// console.log(person);

person.xyx = "xxxx" // this will add new key and value in person object 

//console.log(person);

// In JS we can treat functions like variables

person.greeting = function(){ // here i store function in person object with variable greeting
    console.log("I am learning functions");
    
}

console.log(person.greeting);
console.log(person.greeting());

person.greeting2 = function(){
    console.log(`I am learning functions ${person.name}`);
    
}

console.log(person.greeting2());
