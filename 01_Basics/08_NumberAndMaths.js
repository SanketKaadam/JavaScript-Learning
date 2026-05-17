let num = 3.51
let someNum = new Number(1000000)

console.log(num.toFixed(2));
console.log(num.toPrecision(1));
console.log(num.toExponential(1));

console.log(someNum.toLocaleString('en-IN'));
console.log(someNum.toString().length);
console.log(someNum.toString().charAt(2));

// ++++++++++++++++++++++++++++ Math +++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // Just convert yo +ve num
console.log(Math.ceil(4.3)); // it will convert to next number even decimal is 1, output is 5
console.log(Math.floor(4.9)) // output is 4 even decimal is .9

console.log(Math.max()); // output Infinity
console.log(Math.min); // [Function: min]
console.log(Math.max(10, 20, 30, 40)); //40
console.log(Math.min(10, 20, 30, 40));// 10


//console.log(Math.random()); // between 0 (inclusive) and 1 (exclusive)
//console.log(Math.random()*10); // range -> 0 and 9.999...
console.log((Math.random()*10) + 1); // range -> 1 and 10.999...
//console.log(Math.floor((Math.random()*10) + 1)); // 1 to 10, bcoz we use floor it will remove decimal eg 10.55 converted into 10

/*

Math.random() gives a random number between:

0 (inclusive) and 1 (exclusive) that means 0 <= Math.random() < 1 

examples:
0.1234
0.9876
0.4567
0.0001

Math.random() can go very close to 1, but it will never become exactly 1.
So the highest possible value is something like: 0.9999999999999999
And the lowest possible value is: 0
It can return 0, but it will never return exactly 1.

So:
Math.random() * 10

gives a number between:
0 and 9.999...

Then:
(Math.random() * 10) + 1

gives:
1 and 10.999...

Example outputs:
4.234
9.876
1.123
10.55

If you want a random **whole number** from `1` to `10`, use:
console.log(Math.floor(Math.random() * 10) + 1);

Explanation:
* `Math.random() * 10` → `0 to 9.999`
* `Math.floor()` removes decimal
* `+1` shifts range to `1 to 10`


*/


let min = 10
let max = 20

//console.log(Math.floor(Math.random()*(max-min+1)+min));
//(max - min + 1) give range between  10 - 20

/*

Then:
(max - min + 1)

becomes:
20 - 10 + 1 = 11

So:
Math.random() * 11

gives values from:
0 to 10.999...

Then:
+ min

means:
+ 10

Now range becomes:
10 to 20.999...

Finally:
Math.floor()

removes decimals, so final output is:
10 to 20

*/







