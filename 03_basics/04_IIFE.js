// to save from global population we use IIFE

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE means we crated IIFE fuctions using function name
    console.log(`DB CONNECTED`);
})(); // if you don't put ; here then it will give error, we need to tell JS that this IIFE fuction end here.
// 1st () wraped function inside () and 2nd () we use to when we want to call any fuction
// () -> wrapped fucntion in in this, mean this function name, now to call this we do ()()



( (name) => {
    // unnamed IIFE means we crated IIFE fuctions without using function name
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // here in 2nd () we can pass argumnent for function.