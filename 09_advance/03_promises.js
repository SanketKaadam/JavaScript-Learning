const promoses1 = new Promise(function(resolve, reject){
    console.log("promises 1 created...");
    resolve()
})

promoses1.then(function(){
    console.log("promises 1 consumed");
    
})

new Promise(function(resolve, reject){
    console.log("promises 2 is created...");
    resolve()
    
}).then(()=>{
    console.log("promises 2 consumed");
    
})

// check why promises 1 and promises 2 created line is printing and then above both consume printed.

const promises3 = new Promise(function(resolve, reject){
    console.log("promises 3 created..");
    
    resolve({"username": "sanket", "id":12345})
})

promises3.then((obj)=>{
    console.log(obj);
    
})

const promises4 = new Promise(function(resolve, reject){
    console.log("promises 4 created..");
    let flag = false
    if(flag){
        resolve({"name":"Akashy", "age":25})
    }else{
        reject("Error ocure in code..")
    }
    
    
})

promises4.then((obj)=>{
    console.log(obj);
    return obj.name
    
}).then((data)=>{
    console.log(data);
    
}).catch((e)=>{
    console.log("exception : ", e);
    
}).finally(()=> console.log("finally block always excute")
)

const promises5 = new Promise((resolve, reject)=>{
    let flag = false

    if (flag) {

        resolve({"username": "XYZ123"})
        
    }else{
        reject("Error is there")
    }
})

async function promisesfive(){
    try{
        const responce = await promises5
        console.log(responce);
        
    }catch(e){
        console.log(e);
        
    }
}

promisesfive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.