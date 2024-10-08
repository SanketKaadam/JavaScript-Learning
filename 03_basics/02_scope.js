// In JS we can store anything in variable like any value, function, array, object, JSON etc

// var a = 10
// const b = 20
// let c = 30  // if i uncomment b and c then it will print this values not from if block values, but in case of variable a that value chnage bcoz we chnaged a value in if block and that updted value will be print

if(true){
    var a = 40
    const b = 50
    let c = 60
}

//console.log(a); // giving output 40 evenn i defined a inside block which not accesseceble from outside of block thast why var we don't use.
//console.log(b); // exception b is not defined 
//console.log(c); // exception c is not defined 

// if you defined in globle scope that will be accesseble in global and block scope, but variable defined inside block scope only accessble to that block not globaly.

// globle scop for browser dev tool are different from this node where we run JS programs

function one(){
    let name  = "sanket"

    function two (){
        console.log(name); // this worked accesseble
        let city = "mumbai"
        
    }

   // console.log(city); // gave exception bcoz not accesseble

    two();
    
}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // here we calling function before the function define, still it work

function addone(num){
    return num + 1
}



addTwo(5) // here when try to call function before defining function giving error. 
const addTwo = function(num){ // this is expression where we same time we calling function and storing value in variable
    return num + 2
}

// this concept call mini hosting we will lern more on this in future
