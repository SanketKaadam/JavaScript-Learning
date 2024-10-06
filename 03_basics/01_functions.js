function addTwoNumber(num1, num2){
  let result  = num1+num2;
  console.log("Inside addTwoNumber function"); 
  
  return result
  console.log("after return addTwoNumber function"); // after return code is not recheble, it not give any error
}

// addTwoNumber // this is reference
// addTwoNumber() // this is function excution

let result = addTwoNumber() // here we pass nathing
//console.log(result); // output NaN

let result1 = addTwoNumber(10, 20)
//console.log(result1);

function loginUserMessage(username = "sam"){ // if at the time of function call, arggument is not pass that time by default it take sam

    //if(username === undefined){
    if(!username){ // checking vlaue is  undefined or not, if it undefine it print log and return
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

