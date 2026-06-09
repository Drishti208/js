//ways to create an object - literals , constructors
// Object.create- constructor.....gives SINGLETON output

// object literals- the code written below, does not return SINGLETON

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//***use of these square brackets is neccessary while using a symbol ...if not used then its datatype would be considered as a string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)//most common way but creates a problem during symbol and 1-2 other cases
console.log(JsUser["email"])//more appropriate and correct way
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) used to deny any further changes to the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){     //declaration of a function within an object...use of paranthesis after function is VERY IMP
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//THIS is used to point out to the element u want to access from an object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser());
