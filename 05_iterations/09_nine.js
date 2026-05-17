/*
reduce() in JavaScript

reduce() is used to reduce an array into a single value.

That single value can be:
sum
product
object
array
count
anything

Syntax
array.reduce((accumulator, currentValue) => {

}, initialValue)


Most Important Concept

reduce() works like this:
previous result + current element

Example 1 → Sum of Array
const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(total);

Output:
10

Step-by-Step Dry Run

Array:
[1, 2, 3, 4]

Initial value:
0

Iteration 1
acc = 0
curr = 1

acc + curr = 1

Iteration 2
acc = 1
curr = 2

1 + 2 = 3

Iteration 3
acc = 3
curr = 3

3 + 3 = 6

Iteration 4
acc = 6
curr = 4

6 + 4 = 10

Final result:
10

Short Version
const total = [1,2,3,4].reduce((acc, curr) => acc + curr, 0);

Meaning of Parameters
| Parameter | Meaning                       |
| --------- | ----------------------------- |
| `acc`     | accumulator (previous result) |
| `curr`    | current array element         |
| `0`       | initial value                 |


Example 2 → Multiply
const nums = [1,2,3,4];

const result = nums.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(result);

Output:
24

Example 3 → Count Total Price
const cart = [
    { price: 100 },
    { price: 200 },
    { price: 300 }
];

const total = cart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(total);

Output:
600

Difference Between map, filter, reduce
| Method     | Returns           |
| ---------- | ----------------- |
| `map()`    | transformed array |
| `filter()` | filtered array    |
| `reduce()` | single value      |


Interview Important Point
reduce() is very powerful because accumulator can be:
number
array
object
map

Interview One-Line Answer
reduce() is used to iterate over an array and reduce it into a single value 
using an accumulator.
*/

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval // currval is come from array and after adding both acc+currval this totalstored in cummilater.
// }, 0) // here accumilate is zero 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

// when we want to add values that time we use this 