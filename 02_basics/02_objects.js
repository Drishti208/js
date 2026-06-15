//const tinderUser = new Object()
const tinderUser = {}
//both of the above will give same output only diff being that 1)return singleton 2)returns non-singleton
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {         //nested objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);//way to access value from nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }//will give improper result just like it did in array
const obj3 = Object.assign({}, obj1, obj2, obj4)//{}are imp and this method is rarely used

const obj3 = {...obj1, ...obj2}//highly used spread operator best method to combone objects just like array
console.log(obj3);


const users = [ //way to declare objects inside an array
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email//way to access aray ke anadr wale objects
console.log(tinderUser);

console.log(Object.keys(tinderUser));//it converts the keys into an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//rarely used

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check if we have this data in our object


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// DE-STRUCTURE OF OBJECT
 // AN EASY WAY TO ACCESS THE DATA.....ALWAYS WRITTEN IN CURLY BRACES 
const {courseInstructor: instructor} = course

console.log(instructor);
//API IN JSON FORMAT 
//{} THIS IS SIMPLY JSON
// {
//     "name": "hitesh", ALWAYS WRITE KEY AS A STRING
//     "coursename": "js in hindi",
//     "price": "free"
// }
//API IN ARRAY
[
    {},
    {},
    {}
]

//hey 