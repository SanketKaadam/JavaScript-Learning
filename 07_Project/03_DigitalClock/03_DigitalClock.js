// select element whos id is clock
const clock = document.getElementById('clock')

console.log(clock)


// setInterval run function again and again after fixed time
// here function run every 1000ms
// 1000ms = 1 second

setInterval(function(){

// create current date and time object
// example:
// Sun May 18 2026 10:30:25
  let date = new Date()

  // convert current time into local readable format
  // example:
  // 10:30:25 AM

  // then insert that time inside clock element
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);


/*
Important Concept
setInterval

Runs repeatedly after fixed interval.

Syntax:
setInterval(function, timeInMilliseconds)


Difference Between setTimeout and setInterval
| Method        | Runs       |
| ------------- | ---------- |
| `setTimeout`  | once       |
| `setInterval` | repeatedly |

*/
