let marvelHeros = ["thor", "Ironman", "spiderman"]
let dcHeros = ["superman", "batman"]

//marvelHeros.push(dcHeros) // this will add dcHeros array at next index as element of marvelHeros. bcoz in JS in single array we can store multiple datatypes elements
//console.log(marvelHeros); //  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman' ] ]

let combineArry = marvelHeros.concat(dcHeros) // this will combine both arrays element and create new array.
//console.log(combineArry);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'batman' ]


let newHeros = [...marvelHeros, ...dcHeros] // another and good way to combine all array elements, in this u can add as many arrays as u want
//console.log(newHeros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'batman' ]


let anotherArr = [1, 2, [3, 4], 5, [6, [7, 8]]] // It contains nested arrays.
console.log(anotherArr);
// [ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8 ] ] ]

console.log(anotherArr.flat(Infinity)); // this will combine all(infinite)(you can also give depth) inside arrays elements 
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

/*

Your array:

let anotherArr = [1, 2, [3, 4], 5, [6, [7, 8]]]

Let's mark the levels:

[
  1,
  2,
  [3, 4],        // Level 1 nested array
  5,
  [             // Level 1 nested array
    6,
    [7, 8]      // Level 2 nested array
  ]
]

There are 3 nested arrays total:
[3, 4]
[6, [7, 8]]
[7, 8]

But the maximum depth is only 2.
------

flat(1)

Removes one level:

anotherArr.flat(1)

// [1, 2, 3, 4, 5, 6, [7, 8]]

[3,4] becomes 3,4

[6,[7,8]] becomes 6,[7,8]

But [7,8] remains because it's still nested one level deep.
----

flat(2)

Removes two levels:

anotherArr.flat(2)

// [1, 2, 3, 4, 5, 6, 7, 8]

Now [7,8] is also flattened.
----

flat(Infinity)
anotherArr.flat(Infinity)

Output:
[1, 2, 3, 4, 5, 6, 7, 8]

Flattens all nested arrays regardless of depth.
---

Interview Point
flat(depth)
flat() → depth = 1  // default is 1
flat(2) → flatten 2 levels
flat(Infinity) → flatten everything

flat() does not modify the original array. It returns a new array.

*/


console.log(Array.isArray("Sanket")); // is argument is array or not. 
// false

console.log(Array.from("Sanket")); 
// [ 'S', 'a', 'n', 'k', 'e', 't' ]

console.log(Array.from({name: "hitesh"})) // In this case we need to define from key need to create array or from value, we learn in future
// []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]



