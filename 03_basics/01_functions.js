function sayName() {
    console.log("D");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username) {
    if(!username)//another way to write username===undefined
    {
        console.log("please enter a username");
        return //written so that it does not execute neeche wala code as well
        
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("drishti"));
console.log(loginUserMessage());

//if we have no idea how many arguments we might have then:
function totalCartPrice(...num1) { //rest operator is used
    return num1
}
console.log(totalCartPrice(300,400,5000,700));

function totalCartPrices(val1,val2,...num1) { 
    return num1
}
console.log(totalCartPrices(300,400,5000,700));//output will be 5000,700

//...........OBJECTS AND FUNCTIONS.........//
function handleObject(anyobject) {
    
    return (`username is ${anyobject.user} and price is ${anyobject.price}`);
    
}
console.log( handleObject({
    user: "drishti",
    price:300
}));

//........ARRAY WITH FUNCTIONS.....//
function myArray(anarray) {
    return `second number of array is ${anarray[1]}`
}
console.log(myArray([2,4,6,8,5]));



//we can also define object first and then just call the function