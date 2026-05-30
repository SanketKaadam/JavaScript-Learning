/*
Q) How many ways to create array

There are several ways to create an array in JavaScript.

## 1. Array Literal (Most Common)

let arr = [1, 2, 3, 4, 5];

console.log(arr);
// [1, 2, 3, 4, 5]

✅ Most used
✅ Fastest and easiest

---

## 2. Array Constructor

let arr = new Array(1, 2, 3, 4, 5);

console.log(arr);
// [1, 2, 3, 4, 5]

---

### Special Case

let arr = new Array(5);

console.log(arr);
// [ <5 empty items> ]
```

Creates an array of length 5, not `[5]`.

To create `[5]`:

let arr = [5];


---

## 3. Using `Array.of()`

let arr = Array.of(1, 2, 3, 4, 5);

console.log(arr);
// [1, 2, 3, 4, 5]
```

Useful because:

Array.of(5);
// [5]
```

while

new Array(5);
// [ <5 empty items> ]

---

## 4. Using `Array.from()`

Create an array from iterable or array-like objects.

let arr = Array.from("hello");

console.log(arr);
// ['h', 'e', 'l', 'l', 'o']
```

Array.from([1, 2, 3]);
// [1, 2, 3]
```

---

## 5. Using `split()` on a String

let arr = "a,b,c".split(",");

console.log(arr);
// ['a', 'b', 'c']
```

---

## 6. Using Spread Operator

let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2);
// [1, 2, 3]
```

Creates a new array by copying elements.

---

## Interview Answer

The most common ways are:

let arr1 = [1, 2, 3];              // Array literal
let arr2 = new Array(1, 2, 3);     // Constructor
let arr3 = Array.of(1, 2, 3);      // Array.of
let arr4 = Array.from("abc");      // Array.from
```

In real projects, **array literals (`[]`)** are used most of the time.


We can not create array like below in JavaScript
let arr = {1,2,3,4,5}

This is invalid JavaScript syntax, You'll get a syntax error.

*/




let myArry = [0, 1, 2, 3, 4]

let heros = ["superman", "spiderman", "batman", true, 100]

let myArr = new Array(0,2,5,7,8,4)

// console.log(myArr);
// [ 0, 2, 5, 7, 8, 4 ]

// console.log(heros);
// [ 'superman', 'spiderman', 'batman', true, 100 ]

// console.log(myArr);
// [ 0, 2, 5, 7, 8, 4 ]

// console.log(typeof myArry);
// "object"

//Arrays are a special type of object in JavaScript.
//To specifically check if a value is an array:

console.log(Array.isArray(myArry)); // true


// console.log(myArry.length);
// 5

// console.log(myArry.indexOf(4));
// 4

// console.log(myArr.sort());
// [ 0, 2, 4, 5, 7, 8 ]
//Note: sort() modifies the original array (myArr) as well. It does not create a new array.
/*

`sort()` **modifies the original array**. It does **not** create a new array.

Example:

let arr = [5, 2, 8, 1];

let result = arr.sort();

console.log(arr);    // [1, 2, 5, 8]
console.log(result); // [1, 2, 5, 8]

Both `arr` and `result` refer to the **same sorted array**.

You can verify:

let arr = [5, 2, 8, 1];

let result = arr.sort();

console.log(arr === result); // true

---

If you want to keep the original array unchanged, make a copy first:

let arr = [5, 2, 8, 1];

let sortedArr = [...arr].sort();

console.log(arr);       // [5, 2, 8, 1]
console.log(sortedArr); // [1, 2, 5, 8]

### Interview Point

Array methods can be divided into:

**Mutating (change original array):**

* `sort()`
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `reverse()`

**Non-mutating (return new array/value):**

* `slice()`
* `map()`
* `filter()`
* `reduce()`
* `concat()`
* `join()` (returns a string, doesn't modify the array)

So, **`sort()` is a mutating method—it changes the original array.**


*/

// console.log(myArry.includes(2));
// true


let newArr = ["a", "w"]

//reassigns newArr to a new value. So the reference to ["a", "w"] is replaced by the string returned from join().
newArr = myArry.join() // copy elements from that array and convert into string

console.log(newArr); 
//The actual value is: "0,1,2,3,4" because join() returns a string.
// most consoles display: 0,1,2,3,4 without quotes. That doesn't mean it's not a string. The console is just displaying the string value.

/*
join():

Takes all array elements.
Joins them into a single string.
Uses , as the default separator.

Internally:

[0, 1, 2, 3, 4]

becomes:

"0,1,2,3,4"

So:

console.log(newArr);         // 0,1,2,3,4
console.log(typeof newArr);  // string

You can use a custom separator too:

console.log(myArry.join("-")); // "0-1-2-3-4"
console.log(myArry.join(" ")); // "0 1 2 3 4"
*/



/*
The ["a", "w"] array is not modified by join(). It's simply no longer
 referenced by the variable newArr. If no other variable points to that array, 
 JavaScript's garbage collector can eventually remove it from memory.
*/

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
// [ 0, 1, 2, 3, 4, 10 ]

// myArry.pop() // remove element from end
// console.log(myArry);
// [ 0, 1, 2, 3, 4 ]

// myArry.unshift(100) // add element at start
// console.log(myArry);
// [ 100, 0, 1, 2, 3, 4 ]

// myArry.shift() //remove element from start, this remove 100 from orignal array
// myArry.shift() // this remove 0 from orignal array
// console.log(myArry);
// [ 1, 2, 3, 4 ]


console.log("A : ", myArry);
// A : [ 0, 1, 2, 3, 4 ]

console.log("After slice : ", myArry.slice(1,3)); // 1 to 2 index, index 3 not include
// After slice : [ 1, 2 ]
// slice(start, endIndex)  endIndex is not include

console.log("B : ", myArry); // orignal arry not modified
// B : [ 0, 1, 2, 3, 4 ]

console.log("After Splice : ",myArry.splice(1,3)); 
// After Splice : [ 1, 2, 3 ]
/*
IMP NOTE: 
In splice(), the second argument is not an index. It is the number of elements 
to remove.
splice(startIndex, deleteCount)
So:
1 → start removing from index 1
3 → remove 3 elements
*/

console.log("C : ", myArry); // orignal arry also modified
// C : [ 0, 4 ]

console.log(""+ myArry); // if array added with string it converted into string
// 0,4   Array is converted to a string using toString(): [0, 4] -> "0,4"

/*
Interview Shortcut

| Method        | Original Array Modified? | End Index Included?                        |
| ------------- | ------------------------ | ------------------------------------------ |
| `slice(1,3)`  | ❌ No                     | ❌ No                                       |
| `splice(1,3)` | ✅ Yes                    | Not an end index; second argument is count |

*/







