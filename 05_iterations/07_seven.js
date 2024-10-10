const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) // map used to do operation on number and it return values
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) // filter used to check condition based on ture and false it return values.

console.log(newNums);