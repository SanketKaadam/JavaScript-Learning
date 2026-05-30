let score = "33"

 let numScore = Number(score) // bcoz of this it confirm that we get number value

//console.log(numScore); // 33
//console.log(typeof numScore); // print -> number
//--------------------------------------------------------------

let anotherScore = "33aa" // this is not number, this is String

 let numAnotherScore = Number(anotherScore) // if you try to convert string into number, this will not work it will give NaN as output
 // you don't get any exception also
 //NaN -> Not a Number

//console.log(numAnotherScore); // NaN
//console.log(typeof numAnotherScore); // print -> number which is wrong this is drawback of JS

//---------------------------------------------------------------------

let res = true; // this is not number, this is boolean
//let res = null;
//let res = undefined;

 let numStatus = Number(res) // if you try to convert boolean into number, this will not work it will give 1 as output
 // you don't get any exception also


//console.log(numStatus); // print 1
//console.log(typeof numStatus); // print -> number which is wrong this is drawback of JS


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null => 0    Number(null) converts null to 0
// undefined => NaN
//---------------------------------------------------------------

// let someNumber = 100

// let numberInString = String(someNumber)

// console.log(numberInString); // print 100 but actual value is "100"
// console.log(typeof numberInString); // string

// let numWithString = "40asd"

// let numFromString = Number(numWithString) 

// console.log(numFromString); // NaN
// console.log(typeof numFromString); // number

//--------------------------------------------------------------------------
// Boolean Convertion

// let accountActive = 1

// let booleanAcActive = Boolean(accountActive) 
// console.log(booleanAcActive); // 1 -> true  1 is truthy.
// console.log(typeof booleanAcActive); // boolean


// let accountActive2 = "sdasda" // any value is true

// let booleanAcActive2 = Boolean(accountActive2)
// console.log(booleanAcActive2); // true  Any non-empty string is truthy.
// console.log(typeof booleanAcActive2); // boolean

// let AcActive3 = 0 // only for 0 and "" it giving false for other including -ve number it giving true
// let booleanAcActive3 = Boolean(AcActive3)
// console.log('booleanAcActive3', booleanAcActive3);
// console.log(typeof booleanAcActive3);

/*

Falsy Values in JavaScript
There are only a few falsy values:
false
0
-0
0n
""
null
undefined
NaN

Everything else is truthy, including:
"0"
"false"
[]
{}
-10
" "

*/


// --------------- Hitesh Notes ----------------------

let score1 = "hitesh"

// console.log(typeof score1);
// console.log(typeof(score1));

let valueInNumber = Number(score1)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

//----------------------------------------------------------------------------------------------
let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// below is the output if you use Boolean class for convertion
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber4 = 33

let stringNumber = String(someNumber4)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

let someNumber5 = null

let stringNumber5 = String(someNumber4)
// console.log(stringNumber); // null
// console.log(typeof stringNumber); // string

// if you pass any value like true, 33, null you will get same value in output.
// for typeof you will get string.

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2**3); // Power -> 2³ = 8
// console.log(2/3); // 0.6666666666666666
// console.log(2%3); // 2  % is called the modulus operator (remainder operator).

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
//console.log(str3); // hello hitesh

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); // 32  Because JavaScript executes expressions from left to right.
//So position of string matters in JavaScript.

 //console.log( (3 + 4) * 5 % 3); // 2
 /*
 (3 + 4) = 7
7 * 5 = 35
35 % 3 = 2
 */

// console.log(+true); //1
// console.log(+""); //0   Empty string converts to 0.

/*
The + before a value is called the unary plus operator.
It tries to convert the value into a number.
*/

/*
+"5"       // 5
+"123"     // 123
+false     // 0
+null      // 0
+undefined // NaN
*/

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
//console.log(num1); // 4


let gameCounter = 100
++gameCounter;  // First increases value, then uses it.
//console.log(gameCounter); //101
gameCounter++ // use first, then increment
//console.log(gameCounter); //102

/*
Main Difference
Difference appears when assigning:

let x = 5;
let y = ++x;

console.log(x); // 6
console.log(y); // 6

let a = 5;
let b = a++;

console.log(a); // 6
console.log(b); // 5
*/


/*

Difference between ++x and x++

Both increase value by 1.

But difference is when value is returned.

1️⃣ Pre Increment → ++x
First increases value, then uses it.

let x = 5;
console.log(++x);

x becomes 6
then prints 6


2️⃣ Post Increment → x++

First uses current value, then increases it.

let x = 5;
console.log(x++);

Step:

prints 5
then x becomes 6

Output:
5

After that
console.log(x);

Output:
6

*/


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


 
/*

Common JavaScript Operator Precedence (High → Low)

| Priority | Operator        | Meaning                   |   |            |
| -------- | --------------- | ------------------------- | - | ---------- |
| 1        | `()`            | Parentheses               |   |            |
| 2        | `++ --`         | Increment / Decrement     |   |            |
| 3        | `* / %`         | Multiply, Divide, Modulus |   |            |
| 4        | `+ -`           | Addition, Subtraction     |   |            |
| 5        | `< > <= >=`     | Comparison                |   |            |
| 6        | `== === != !==` | Equality                  |   |            |
| 7        | `&&`            | Logical AND               |   |            |
| 8        | `               |                           | ` | Logical OR |
| 9        | `=`             | Assignment                |   |            |

if * and / and % then which run 1st?

*, /, and % all have same precedence in JavaScript.
So JavaScript executes them left to right.

*/

