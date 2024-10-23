class User{
    constructor(username, password){
        this.username = username,
        this.password = password
        console.log(username);
        console.log(password);
                
    }

    get username() {
        return this._username.toUpperCase()
    }

    set username(value) {
        this._username = value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }

}

const sanket = new User("sanket", "abc")
console.log(sanket.username);
console.log(sanket.password);

