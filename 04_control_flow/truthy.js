const userEmail = [] //OUTPUT = GOT USER EMAIL......IF WE USE "" THE OUTPUT WILL BE FALSE VALUE

if (userEmail) {
    console.log("Got user email");//here we will get an output without even comparing useremail with anything
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//WAY TO FIND IF OBJECT IS EMPTY
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): FOR null AND undefined

let val1;
// val1 = 5 ?? 10 OUTPUT = 5
// val1 = null ?? 10 OUTPUT = 10
// val1 = undefined ?? 15 OUTPUT = 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")