const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values); // undefined

/*
Why?

Because:
forEach()

always returns:
undefined

It does NOT create a new array.


Correct Method → map()
If you want returned values in new array:

const coding = ["js", "ruby", "java"];

const values = coding.map((item) => {
    return item;
});

console.log(values);

Output:
[ 'js', 'ruby', 'java' ]

Difference Between forEach and map
| Feature       | `forEach`            | `map`             |
| ------------- | -------------------- | ----------------- |
| Returns value | ❌ undefined          | ✅ new array       |
| Used for      | iteration            | transformation    |
| Changes data  | usually side effects | creates new array |


Example of Proper forEach Usage
const coding = ["js", "java"];

coding.forEach((item) => {
    console.log(item);
});

Used for:
printing
database calls
API calls
side effects

Interview Important Point
forEach() is used for iteration only.

map() is used when you want to return/transform data.

Interview One-Line Answer
forEach() always returns undefined because it is meant for iteration, not for creating a new array. Use map() when you need returned values.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//this 'filter' returning array
const newNums = myNums.filter( (num) => {
    return num > 4 // if you use {} then need to use return keyword to return value.
} )

//const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

//console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

/*
this filter, map is similer like stream of java?

Yes 👍
map(), filter(), reduce() in JavaScript are very similar to Java Streams API in Java.

Since you know Java, you can think like this:
| JavaScript  | Java Stream  |
| ----------- | ------------ |
| `map()`     | `.map()`     |
| `filter()`  | `.filter()`  |
| `reduce()`  | `.reduce()`  |
| `forEach()` | `.forEach()` |


Major Difference
Java Streams are lazy

Operations run only after terminal operation.

Example:

stream.map()
      .filter()
      .toList();

Nothing executes until:

toList()
JavaScript array methods are eager

They execute immediately.

nums.map((n) => n * 2);

Runs immediately.

Another Important Difference

Java Streams work on:

collections
parallel streams
functional pipeline

JavaScript methods work directly on arrays.
*/