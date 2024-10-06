// stack (primitive)  and Heap (Non-premitive or reference)

let emailId = "sanket@gmail.com"
let upiId = emailId
upiId = "sanket@sbi"

console.log(emailId);
console.log(upiId);


let userOne = {
    city : "Mumbai",
    state : "Maharashtra",
}

let userTwo = userOne;

userTwo.state = "Delhi",
console.log(userOne.state);
console.log(userTwo.state);



