const score = 400;//here number is a primitive datatype
const balance = new Number(100)//here number is defined as an object. Now i can use certaion functions. To know those functions type this on console

//functions that can be used
console.log(balance.toString().length);//now i can even use string functions as we have converted no. to string
console.log(balance.toFixed(2));//output=100.00

const otherNumber = 123.456
console.log(otherNumber.toPrecision(3));//output=123 it will keep first 3 digits intact and will round off based on 4th digit
console.log(otherNumber.toPrecision(5));//output=123.46

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));//inserts commas as per indian system

//********MATHS*******// it is a library in js
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));//will give the upper value
console.log(Math.floor(4.6));//will give the lower value
console.log(Math.min(4,6,8,7));
console.log(Math.max(4,6,8,7));

//IMP//
console.log(Math.random());//gives random values between 0 and 1 in decimal
console.log((Math.random())*10 + 1);//will give min value as 1
console.log(Math.floor ((Math.random())*10 +1));//rounded off values will appear

//if i want random numbers in between a range
const min = 10
const max = 20

console.log(Math.floor ((Math.random() )* (max-min+1)) + min);






