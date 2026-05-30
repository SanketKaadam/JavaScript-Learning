const fbUser = new Object() // this will create singelton object

const instUser = {} // this will create non-singelton or normal object

// this both print same output ie empty object {}


/*
If asked:
Difference between new Object() and {}?

Answer:
Both create an object. new Object() uses the Object constructor, while {} uses
 object literal syntax. In modern JavaScript they behave almost the same, but 
 object literals ({}) are preferred because they are simpler and more readable.

The "singleton vs non-singleton" wording is mostly a teaching simplification and
 isn't a distinction developers usually make in real-world JavaScript.
*/


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
/*
Duplicate Keys in Object.assign()

If two objects have the same key:

const a = { name: "Sanket" };
const b = { name: "Rahul" };

const result = Object.assign({}, a, b);

console.log(result);

Output:

{ name: 'Rahul' }

The later source object overwrites the earlier one.
*/

const newObj4 = { newObj1, newObj2 } // this will create nested object with two key as object name with there values.

// console.log(newObj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(newObj4);
/*
{
  newObj1: {
    1: "a",
    2: "b"
  },
  newObj2: {
    3: "c",
    4: "d"
  }
}
*/

const newObj5 = {...newObj1, ...newObj2, ...newObj6} // this is good way to combine all objects, ... means spread, ie spred all objest and then collect as single object eg when we throw glass it spred.

// console.log(newObj5);
/*
{
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '5': 'e',
  '6': 'f'
}
*/

/*
If duplicate keys exist, the last one overwrites the previous value.
*/

/*

Object.assign() and spread operator ... are both used to copy/combine objects, but there are some differences.

| Feature          | `Object.assign()` | Spread `...`    |
| ---------------- | ----------------- | --------------- |
| Syntax           | Longer            | Short & cleaner |
| Modern JS        | Older way         | Modern way      |
| Used in React    | Less              | Very common     |
| Copies object    | Yes               | Yes             |
| Combines objects | Yes               | Yes             |

Important
Both do shallow copy, not deep copy.
Nested objects still share same reference.

Example:
const obj1 = {
    address: {
        city: "Mumbai"
    }
}

const obj2 = { ...obj1 }

obj2.address.city = "Pune"

console.log(obj1.address.city);

Output:
Pune

because nested object reference is shared.

*/

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

console.log(Object.keys(newObj1)); // retun only keys in array form, output [ '1', '2' ]
console.log(Object.values(newObj1)); //return only values in array form, output [ 'a', 'b' ]

console.log(Object.entries(newObj1)); // return every key value as array ie array form, not use that much
//Output  : [ [ '1', 'a' ], [ '2', 'b' ] ]


console.log(newObj1.hasOwnProperty(1)); // if key is present in object return true otherwise false.





