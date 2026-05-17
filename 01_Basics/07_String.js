let acName = "sanket"
let age = 25

console.log(acName);


console.log(`Hi, My name is ${acName} and I am ${age} years old.`);

let stringWithNew = new String('Askay') // new String() creates a String object.
/*
This object is stored in heap memory.

Heap:
String Object -> "Askay"

Stack:
stringWithNew -> reference to heap object
*/

let changeInString = stringWithNew; 
/*
Both variables point to same object.

stringWithNew ─┐
               └──> String Object("Askay")
changeInString ─┘
*/

changeInString = "Ram" // created in seperate string in stack

/*
changeInString = "Ram";

Here you are NOT modifying the object.
You are reassigning the variable.

Now:
changeInString -> primitive string "Ram"
stringWithNew -> old String object

So original object remains unchanged.

Yes, you are thinking correctly 👍
If both variables point to same object, then changing the object should affect both.

But in your code, you did not change the object.

You changed the variable reference.


Example using object
See this carefully:

let obj1 = { name: "Askay" };
let obj2 = obj1;

obj2.name = "Ram";

console.log(obj1.name);

Output:
Ram

Why?

Because:
obj2.name = "Ram";

modifies the SAME object

*/

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

