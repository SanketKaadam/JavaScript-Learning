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
// null => 0
// undefined => NaN
//---------------------------------------------------------------

// let someNumber = 100

// let numberInString = String(someNumber)

// console.log(numberInString);
// console.log(typeof numberInString);

// let numWithString = "40asd"

// let numFromString = Number(numWithString)

// console.log(numFromString);
// console.log(typeof numFromString);

//--------------------------------------------------------------------------
// Boolean Convertion

// let accountActive = 1

// let booleanAcActive = Boolean(accountActive) // 1 -> true
// console.log(booleanAcActive);
// console.log(typeof booleanAcActive);


// let accountActive2 = "sdasda" // any value is true

// let booleanAcActive2 = Boolean(accountActive2)
// console.log(booleanAcActive2);
// console.log(typeof booleanAcActive2);

// let AcActive3 = 0 // only for 0 and "" it giving false for other including -ve number it giving true
// let booleanAcActive3 = Boolean(AcActive3)
// console.log('booleanAcActive3', booleanAcActive3);
// console.log(typeof booleanAcActive3);


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
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

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

// console.log(+true); //1
// console.log(+""); //0

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
++gameCounter;
//console.log(gameCounter);
gameCounter++
//console.log(gameCounter);


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

