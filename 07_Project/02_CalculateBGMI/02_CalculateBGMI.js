const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function(e){

  // add submit event on form
  // whenever form submit button clicked this function execute
  // e means event object
  // browser automatically send details about submit event

  // cosole.log(e)
  // console.log(e.target)

  e.preventDefault(); // When a form is submitted, the default action is for the page
  //  to reload. Calling e.preventDefault() on the form's submit event stops the 
  // page from reloading.
 // by default when form submit browser reload page
  // preventDefault stop page reload
  // if we not use this then result will disappear because page refresh

  const height = parseInt(document.querySelector('#height').value);
// fetch input field whos id is height
  // .value get input value
  // parseInt convert string into number

  // example:
  // "170" -> 170

  const weight = parseInt(document.querySelector('#weight').value);
  // same for weight input

  const results = document.querySelector('#results');

   // isNaN(height) check value is number or not
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give valid weight ${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> BMI : ${bmi} </span>`

    if(bmi < 18.6){
      results.innerHTML = `<span> BMI : ${bmi} </span><br> You are under weiht`

    }

    if(bmi < 18.6){
      results.innerHTML = `<span> BMI : ${bmi} </span><br> You are under weiht`

    }else if(bmi <= 18.6 || bmi >= 24.9){
      results.innerHTML = `<span> BMI : ${bmi} </span><br> You are in normal range`

    }else{
      results.innerHTML = `<span> BMI : ${bmi} </span><br> You are in overWight`
    }
  }

  
})

/*
Flow of Program
User enter height & weight
          ↓
Click submit
          ↓
submit event triggered
          ↓
prevent page reload
          ↓
validate input
          ↓
calculate BMI
          ↓
show result on page


Important Interview Point
Input values always come as:
string

So:
parseInt()

needed to convert into number.
*/