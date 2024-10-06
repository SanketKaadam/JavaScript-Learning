let marvelHeros = ["thor", "Ironman", "spiderman"]
let dcHeros = ["superman", "batman"]

//marvelHeros.push(dcHeros) // this will add dcHeros array at next index as element of marvelHeros. bcoz in JS in single array we can store multiple datatypes elements
//console.log(marvelHeros);

let combineArry = marvelHeros.concat(dcHeros) // this will combine both arrays element and create new array.
//console.log(combineArry);


let newHeros = [...marvelHeros, ...dcHeros] // another and good way to combine all array elements, in this u can add as many arrays as u want

//console.log(newHeros);

let anotherArr = [1, 2, [3, 4], 5, [6, [7, 8]]]

//console.log(anotherArr.flat(Infinity)); // this will combine all(infinite)(you can also give depth) inside arrays elements 

console.log(Array.isArray("Sanket"));
console.log(Array.from("Sanket"));

console.log(Array.from({name: "hitesh"})) // In this case we need to define from key need to create array or from value, we learn in future

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



