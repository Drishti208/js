//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS : USED TO AVOID GLOBAL POLLUTION AND EXCUTE A FN IMMEDIATELY

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//; is used when more than 1 iife is written...it tells the software that our 1st code execution is over

//instead of chai() we write (our function)()


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')