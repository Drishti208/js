//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    //console.log(b);
}



// console.log(a);
// console.log(b);
// console.log(c);
//......explanation in notebook......//

function one() {
    const username = "drishti"

    function two() {
        const website = "youtube"
        console.log(username);//INNER SCOPE CAN ACCESS OUTER SCOPE KI VALUES AND DATA
        
    }
    // console.log(website);//OUTER SCOPE CANNOT ACCESS OUTER SCOPE KI VALUES AND DATA
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); errorrrrr as we cannot access inner loop ka data
}

// console.log(username); errorrrr as it is out of the scope


// ...........interesting...........

console.log(addone(5))

function addone(num){
    return num + 1
}
//here we will get an output even if we call the function before defining it


addTwo(5)
const addTwo = function(num){
    return num + 2
}
//here ERROR will come as function cant be called before initializing

// THIS ENTIRE CONCEPT IS KNOWN AS HOISTING