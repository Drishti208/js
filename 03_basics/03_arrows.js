const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // if we dont write this then it will consider username as a variable and show error
        console.log(this); //"THIS" REFERS TO USER (OUR OBJECT) AND THIS.USERNAME MEANS USER.USERNAME AND THIS ALONE MEANS ALL THE DATA OF USER
    }

}

 user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);//OUTPUT WILL BE AN EMPTY OBJECT

function chai(){
    // console.log(this);
}

chai()

function chai(){
   let username = "drishti"
    console.log(this.username); //THIS WONT WORK OUTPUT WILL BE UNDEFINED WHICH MEANS "THIS" WORKS IN THE CASE OF OBJECT ONLY
}

chai()

// .................ARROW FUNCTION...............//

chai2 =  () => {
    let username = "drishti"
    console.log(this);
}


chai2()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => ( num1 + num2 )//IF PARENTHESIS THEN NO NEED TO WRITE RETURN.....IF CURLY BRACES THEN WRITE RETURN AS WELL

const addTwo = (num1, num2) => ({username: "hitesh"})//implicit return of an object ie return of value without writing return
 console.log(addTwo(3,4));
 

