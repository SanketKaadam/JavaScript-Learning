class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcource(){
        console.log(`New cource added ${this.username}`);
        
    }
}

const chai = new Teacher("sanket", "s@gmail.com", "123")
chai.addcource()
chai.logMe()

const tea = new user("akshay")
tea.logMe()
// tea.addcource() not accesseble

console.log(chai instanceof User); // true
console.log(chai === User); // false