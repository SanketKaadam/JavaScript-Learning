const button = document.querySelectorAll('.button')
// select all elements whos class is button
// querySelectorAll return NodeList
// NodeList look like array and support forEach

console.log(button)

// select body tag from document
const body = document.querySelector('body')
console.log(body)


/*
Why forEach Needed?
Because you need to add click event to EVERY button.

Without loop:
button.addEventListener()
won't work.

Because:
button

is NOT single element.
It is collection of elements.

What Happens Internally
button.forEach(function(button){

})

Internally:
Iteration 1
button = white button

Iteration 2
button = blue button

Iteration 3
button = yellow button

Then Event Added on Every Button
button.addEventListener('click', ...)

means:
white button → click event added
blue button → click event added
yellow button → click event added
Important Understanding

forEach is NOT running because of click.
It runs immediately when page loads.
Its job is only:
attach click event listener to every button.

Then Later
When user clicks button:
addEventListener callback
runs.
*/
// forEach loop run for every button element
button.forEach(function(button){
  console.log(button)

  // add click event on every button
  // whenever user click button this function execute
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
  })
})

/*
addEventListener() in JavaScript
addEventListener() is used to listen for events on HTML elements.
Simple Meaning

It tells browser:
"If this event happens, run this function."

Syntax
element.addEventListener("event", function(){

})

means:
"Hey browser, whenever this button is clicked, execute this function."

Example
const button = document.querySelector('button')

button.addEventListener('click', function(){
    console.log("Button clicked")
})

Common Events
| Event       | Meaning              |
| ----------- | -------------------- |
| `click`     | mouse click          |
| `dblclick`  | double click         |
| `mouseover` | mouse enters element |
| `keydown`   | keyboard key pressed |
| `submit`    | form submitted       |
| `change`    | input value changed  |


Important Interview Point
JavaScript in browser is event-driven.

Browser continuously listens for:
click
keyboard
mouse
scroll
etc.

addEventListener() connects your function to those events.

Why Name "Listener"?
Because it keeps listening/waiting for event.

Very Important Syntax Point
Correct
button.addEventListener('click', function(){
    console.log("clicked")
})
    
Wrong
button.addEventListener('click', console.log("clicked"))
*/