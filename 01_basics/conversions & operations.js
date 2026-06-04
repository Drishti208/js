let score=33;
let valueInNumber = Number(score);
console.log(typeof score);
console.log(typeof valueInNumber );
console.log(valueInNumber);

// "33"=>33
// "33abc"=>NaN
// true=>1

let isLoggedIn=1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn );

// 1=>true 0=>false
// ""=>false
// "drishti"=>true

// similarly do number to string conversion

// *********operators**********
console.log("1"+2+3); output = 123 //it reads from left to right so it treats it as string as string comes first
console.log("1"+"2"+3); output = 123
console.log(1+2+"3"); output = 33
console.log(1+2+3); output = 6

console.log(+true); //the output will be 1  
console.log(+""); //the output will be 0

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" see first y will be assigned the value of x then x=x+1 operation will take place ie first assign then add this is prefix

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"see first x=x+1 operation will take place then that value will be given to y ie first add then assign this is postfix







