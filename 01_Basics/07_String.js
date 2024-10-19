let acName = "sanket"
let age = 25

console.log(acName);


console.log(`Hi, My name is ${acName} and I am ${age} years old.`);

let stringWithNew = new String('Askay') // [String: 'Askay']
let changeInString = stringWithNew; // object created in heap, both pointing same object
changeInString = "Ram" // created in seperate string in stack

console.log(stringWithNew);


let gameName = "Sanket-k-Kadam"

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
console.log(gameName.includes('ket'));
console.log(gameName.split('-'));
console.log(gameName.replace('t', 'tttt'));
console.log(gameName.substring(0,5));

console.log(gameName);

