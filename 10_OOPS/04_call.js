function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // We know that every function call one stack is created when createUser function called there stck created and after that setUsername is called there stack is created now problem is when setUsername is complete its excution it removed from stack but when we printing createUser object that time the username is not printing bcoz the username is defined in setUsername and setusername is goen after excution bcoz we don't have hold of setusername method it not printing username in object, to get hold on inner fuctions we use call keyword. and setusername before going from stack it give all the data to parent function to store it use this keyword. thats why when we use call function we use this keyword as 1st parameter.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);