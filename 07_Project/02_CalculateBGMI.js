const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function(e){
  // cosole.log(e)
  // console.log(e.target)
  e.preventDefault(); // When a form is submitted, the default action is for the page to reload. Calling e.preventDefault() on the form's submit event stops the page from reloading.

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give valid weight ${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span> BMI : ${bmi} </span>`

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