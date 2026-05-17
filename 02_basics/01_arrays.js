let myArry = [0, 1, 2, 3, 4]

let heros = ["superman", "spiderman", "batman", true, 100]

let myArr = new Array(0,2,5,7,8,4)

// console.log(myArr);
// console.log(heros);
// console.log(myArry);
// console.log(typeof myArry);  // object


// console.log(myArry.length);
// console.log(myArry.indexOf(4));
// console.log(myArr.sort());
// console.log(myArry.includes(2));

let newArr = ["a", "w"]
newArr = myArry.join() // copy elements from that array and convert into string
console.log(newArr); 

/*
What happened?
Before
newArr = ["a", "w"]

newArr was an array.

After
newArr = myArry.join()

join() converts array into string.

So now:
newArr = "0,1,2,3,4"

Important
After join():
typeof newArr

becomes:
string

not array.

What join() does

join():

Copies array elements
Combines them into one string
Default separator is comma ,


*/

let arr1 = ["a", "w"]
let arr2 = [0, 1, 2]

let result = arr1.concat(arr2)

console.log(result); // [ 'a', 'w', 0, 1, 2 ]

/*
To combine two arrays in JavaScript, you can use:
1️⃣ concat()
let result = arr1.concat(arr2)

2️⃣ Spread Operator ... (Most used)
let result = [...arr1, ...arr2]

| Method       | Result                   |
| ------------ | ------------------------ |
| `join()`     | Converts array to string |
| `concat()`   | Combines arrays          |
| `...` spread | Combines arrays          |


*/


// myArry.push(10) // add element at the end
// console.log(myArry);
// myArry.pop() // remove element from end
// console.log(myArry);

// myArry.unshift(100) //add element from starting of array
// console.log(myArry);

// myArry.shift()
// myArry.shift() // remove element from starting of array
// console.log(myArry);

console.log("A : ", myArry);
console.log("After slice : ", myArry.slice(1,3)); // 1 to 2 index, index 3 not include

console.log("B : ", myArry); // orignal arry not modified

console.log("After Splice : ",myArry.splice(1,3)); // it include last index also and modified origanl array

console.log("C : ", myArry); // orignal arry also modified


console.log(""+ myArry); // if array added with string it converted into string








