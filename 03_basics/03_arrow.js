const user = {
    usernam : "sanket",
    age : 25,
    welcomeMsg : function(){
        //console.log(this.usernam); // this means current context or current value, here current contect is between thi object scope that why it print sanket
        
        //console.log(this); // this print object bcoz it has value as object 
        
    } 
}

user.welcomeMsg() // print sanket
user.usernam = "sam" // here i chnaged this context / value
user.welcomeMsg() // print sam

//console.log(this); // this this print empty object {} bcoz this this don't have value in context, same this when we print insode browser dev tool it will return window{ .. ..} with values, In browser global objects are window object


function chai(){

    let name = "sanket"
    console.log(this.name) // giving undefined
    //console.log(this); // in fuction it giving multiple things
    
}
//chai()

// this working in object but in fuction i am not able to use

const demo = function (){

    let name = "sanket"
    console.log(this.name) // giving undefined
    //console.log(this); // in fuction it giving multiple things
    
}

//demo() // demo is function name even we use as varibale name

const demo2 = ()=>{

    let name = "sanket"
    console.log(this.name) // giving undefined
    //console.log(this); // in arraw fuction it giving empty object like {}
    
}

//demo2()

const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }
    
    // const addTwo = (num1, num2) =>  num1 + num2
    
    // const addTwo = (num1, num2) => ( num1 + num2 )
    
    const addTwo = (num1, num2) => ({username: "hitesh"}) // if you returning object that time need to use {} and ()
    
    
    console.log(addTwo(3, 4))
    
    
    // const myArray = [2, 5, 3, 7, 8]
    
    // myArray.forEach()




