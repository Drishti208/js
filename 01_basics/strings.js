let myName="Drishti";//here string is a primitive datatype
let myAge=18;

console.log(`hello my name is ${myName} and my age is ${myAge}`);

//another way to declare string: Here string will act as an object (IMP CONCEPT)
const gameName = new String('drishti'); //here new is a keyword and always remember while writing the datatype first alphabet is capital

//to access a key value pair of gameName>
console.log(gameName[0]);

//to access prototype>
console.log(gameName.__proto__);

//some functions for strings
console.log(gameName.length);
console.log(gameName.toUpperCase());//The parentheses tell JavaScript:"Hey, call this function and give me the result."
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,4));//cannot include -ve values
console.log(gameName.slice(-7,6));//can include
let newString =     "drishti"   ;
console.log(newString.trim());//can also used trimStart and trimEnd used to remove spaces
const url = "https//drishti.com";
console.log(url.replace('i','2'));
console.log(url.includes('20'));//used to check if that thing is present or not

//READ MORE FUNCTIONS FROM MDN//












