const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    //return this even you don't write return implicitly it return the values
}

const userOne1 =  User("hitesh", 12, true)
const userTwo2 =  User("ChaiAurCode", 11, false)
// in above we don't use new keyword, so when you print userOne1 that time it print with value "ChaiAurCode", 11, false bcoz in userTwo2 we overriding the values, even you printing userOne1, new updated values are printing. to resolve this issue we use new keyword.

// this new keyword is called constucter function
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
// this new keyword give new instance of that object