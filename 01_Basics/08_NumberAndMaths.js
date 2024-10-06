let num = 3.90
let someNum = new Number(1000000)

// console.log(num.toFixed(1));
// console.log(num.toPrecision(1));
// console.log(num.toExponential(1));

// console.log(someNum.toLocaleString('en-IN'));
// console.log(someNum.toString().length);
// console.log(someNum.toString().charAt(2));

// ++++++++++++++++++++++++++++ Math +++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // Just convert yo +ve num
console.log(Math.ceil(4.3)); // it will convert to next number even decimal is 1, output is 5
console.log(Math.floor(4.9)) // output is 4 even decimal is .9

console.log(Math.max()); // output Infinity
console.log(Math.min); // [Function: min]
console.log(Math.max(10, 20, 30, 40)); //40
console.log(Math.min(10, 20, 30, 40));// 10


console.log(Math.random()); // range 0 - 1
console.log(Math.random()*10); // bcoz mul 10 now range from 0 - 10
console.log((Math.random()*10) + 1); // want range 1 - 10 bcoz of this add 1
console.log(Math.floor((Math.random()*10) + 1)); // remove decimals without incrementing valuse id decimal is greater than .5


let min = 10
let max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min));
//(max - min + 1) give range between  10 - 20







