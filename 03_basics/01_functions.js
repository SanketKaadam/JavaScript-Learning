function addTwoNumber(num1, num2){
  let result  = num1+num2;
  //console.log("Inside addTwoNumber function"); 
  
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
        //console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



function calculateCartValues(...num){ // this ... also called rest when we don't know how many argumnets passed for this method that time we define this ... this take all argument and covert into array then by uisng for loop we can do addition etc.

  return num
}

//console.log(calculateCartValues(100, 200, 300)); // this will print array with this 3 elements 

function anotherFun(val1, val2, ...num){
  return num;
}

//console.log(anotherFun(10, 20, 30, 40, 50, 60)); // this time onnly last 4 elements from arrguments are store in array and 1st and 2nd argumrnt store in val1 and val2 

const person = {
  name : "sanket", // here i gave name not username.
  age : 25
}

function anyObject(obj){
  console.log(`My name is ${obj.username}, my age is ${obj.age}`) // here i don't know which object pass to this method and in that object username and age is present or not still i am printing username and age JS allow this if this varibales not present in object it print undefined. so we need to take care. TypeScript resolve this issue.
}

anyObject(person)



const myArray = [10, 20, 30, 40, 50]


function arrays(takingArray){
  console.log(takingArray[0]);
  
}

arrays(myArray)