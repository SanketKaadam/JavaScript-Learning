// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // "2" converted in to 2
// console.log("02" > 1);

/*
Because in JavaScript, when you compare a string with a number 
using >, <, >=, <=, JavaScript tries to convert the string into a 
number automatically.
*/

// console.log(null > 0); //JavaScript first converts null to a number. The value of null is converted to 0, so 0 > 0 is false
// console.log(null == 0);
// console.log(null >= 0);

/*

null == 0

== works differently.

JavaScript does NOT convert null to 0 here.

Because JavaScript was designed with some special rules for null and undefined.

null means:

“empty value” or “intentional absence of value”

It is not treated as number 0 in loose equality (==).

Why null == 0 is false?

JavaScript specification says:

null == undefined // true

But null is not equal to:
0
false
""

So:
null == 0 // false

because JavaScript intentionally keeps null separate from numeric values.

*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// all above is false

/*

1️⃣ undefined == 0
undefined is only loosely equal to null.
undefined == null // true

But not equal to 0.

So:
undefined == 0 // false


2️⃣ undefined > 0
For comparisons, JavaScript converts undefined to number.

Number(undefined) // NaN

Internally:
NaN > 0

Any comparison with NaN is always:
false


3️⃣ undefined < 0

Again:
Number(undefined) // NaN

Internally:
NaN < 0

Result:
false


Important Difference
| Value       | Number Conversion |
| ----------- | ----------------- |
| `null`      | `0`               |
| `undefined` | `NaN`             |

That is why behavior changes.

*/

// === 

// console.log("2" === 2); // false

/*

Because === checks:
value
datatype

Here:
"2"  // string
2    // number

Different datatypes:
"2" → string
2 → number

So result is:
false

Difference between == and ===
== → loose equality

JavaScript does type conversion.
console.log("2" == 2);

Internally:
2 == 2

Output:
true

=== → strict equality

No type conversion happens.
Datatype must also match.

console.log("2" === 2); // false

Best Practice
Mostly use:
===

because it avoids confusing automatic conversions.
*/