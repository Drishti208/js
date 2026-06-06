//if we compare null and 0 then comparison converts null into 0
console.log(null>0); //output = false
console.log(null>=0); //output = true
console.log(null==0); //output = false
// in case of undefined three of the cases will give output as false

//summary: avoid comparing two diff data types. === compares data types as well

//********SUMMARY OF DATATYPES*******//

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
//Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

//+++++++++MEMORY++++++++++++
//stack(primitive)   heap(non -primitive)