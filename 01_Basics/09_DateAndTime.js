let currentDate = new Date();
//console.log(currentDate);
// console.log(currentDate.getDate());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toTimeString());

let myCreatedDate = new Date(2024, 0, 25 )
let myCreatedDate2 = new Date(2024, 0, 25, 5, 3 )
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
let myCreatedDate5 = new Date(2026)

// console.log(myCreatedDate);
// console.log(myCreatedDate2);
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate4.toLocaleDateString());
// console.log(myCreatedDate5);

/*

Node.js/browser console usually prints Date in:

UTC ISO format

So IST midnight becomes previous day UTC time.
eg 2024-01-24T18:30:00.000Z

toLocaleString()
myCreatedDate3.toLocaleString()
Example: 14/1/2023, 5:30:00 am

Shows date in your local timezone and readable format.
------------------------------------------------

Date constructor can take different parameters.

Your examples:
new Date(2024, 0, 25)
new Date(2024, 0, 25, 5, 3)

use this format:

new Date(year, month, day, hours, minutes, seconds, milliseconds)

| Parameter    | Meaning      |
| ------------ | ------------ |
| year         | Year         |
| month        | Month (0-11) |
| day          | Day of month |
| hours        | Hour         |
| minutes      | Minutes      |
| seconds      | Seconds      |
| milliseconds | Milliseconds |

Month starts from 0
| Value | Month    |
| ----- | -------- |
| 0     | January  |
| 1     | February |
| 11    | December |


Examples
Only year
new Date(2024)
Not treated as year only.
It is treated as milliseconds.

When only one number is passed, JavaScript treats it as:
milliseconds from 1 Jan 1970 (Unix Epoch)

let myCreatedDate5 = new Date(2026)
console.log(myCreatedDate5);

Output will be similar to:
1970-01-01T00:00:02.026Z

Because:
2026 = 2026 milliseconds

after:
1 Jan 1970 00:00:00 UTC

*/

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); // Returns day of week: Saturday that's why output 6
// console.log(newDate.getDate());// Return date like today is 16, output is 16

/*
Difference
| Method      | Meaning             |
| ----------- | ------------------- |
| `getDate()` | Day of month (1-31) |
| `getDay()`  | Day of week (0-6)   |

*/

console.log(
    `${newDate.toLocaleString('default', {
        weekday: "long",
    })} and the time`
);

/*

toLocaleString()

Used to format date/time according to language and region.

Syntax:

date.toLocaleString(locale, options)
'default'
'default'

means:

Use system/browser default language settings

For India, it may format like:

Saturday
{ weekday: "long" }

This is an options object.

It tells JavaScript:

Show full weekday name

Output:
Saturday

Different weekday formats
| Option     | Output   |
| ---------- | -------- |
| `"long"`   | Saturday |
| `"short"`  | Sat      |
| `"narrow"` | S        |

*/