const fbUser = new Object() // this will create singelton object

const instUser = {} // this will create non-singelton or normal object

// this both print same output ie empty object {}


const regulerUser = {
    id : "123",
    fullName : {
        userFullName : {  
            firstName : "sanket",
            lastName : "kadam"
        } // nested object creation, as many u want
    }
}

// console.log(regulerUser.fullName.userFullName);

// console.log(regulerUser.fullName.userFullName.firstName); // by using dot we can get values of nested objects

const newObj1 = {
    1 : "a",
    2 : "b"
    //1 : "c"  we can't add same key
}

const newObj2 = {
    3 : "c",
    4 : "d"
}

const newObj6 = {
    5 : "e",
    6 : "f"
}

const newObj3 = Object.assign({}, newObj1, newObj2) // this will combine mentioned objects as single object, here {} is consider as target object, and other objects that we mentioned consider as source, elements copy from source to target. this way we don't use


const newObj4 = { newObj1, newObj2 } // this will create nested object with two key as object name with there values.
// console.log(newObj3);
// console.log(newObj4);

const newObj5 = {...newObj1, ...newObj2, ...newObj6} // this is good way to combine all objects, ... means spread, ie spred all objest and then collect as single object eg when we throw glass it spred.

// console.log(newObj5);

const users = [   // this is how objects we get from DB
    {
        name : "sanket",
        email : "s@mail,com"
    },
    {
        name : "sanket",
        email : "s@mail,com"
    },
    {
        name : "sanket",
        email : "s@mail,com"
    },
    {
        name : "sanket",
        email : "s@mail,com"
    }
]

// console.log(users);
// console.log(users[0].name); // from array we get access of index 0, on index 0 we have object and by using dot we access keys

console.log(Object.keys(newObj1)); // retun keys in array form
console.log(Object.values(newObj1)); //return values in array form

console.log(Object.entries(newObj1)); // return every key value as array ie array form, not use that much

console.log(newObj1.hasOwnProperty(1)); // if key is present in object return true otherwise false.





