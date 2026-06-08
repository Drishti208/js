//WAYS TO DECLARE AN ARRAY
const number = [1,2,3,4,5];//always declare in square brackets
const heroes = new Array(5,6,7,8)//no need of square brackets
//to access a number from array : (index position starts from 0)
console.log( number[1]);

//ARRAY METHODS
console.log( number.push(8));//this will give length of array after pushing
number.push(9)
console.log(number);//this will print the pushed array ie the array after adding the desired number at the end
number.pop()
console.log(number);//used to remove the last element
number.unshift(0)//will add the number in the beginning
number.shift()//will remove the element in the beginning
console.log(number.includes(5));
console.log(number.indexOf(8));

const newNumber = number.join()//add all the elements of array into a string,separated by a specific separator

//SLICE AND SPLICE (diff in notebook)
console.log("A",number);

const mn1 = number.slice(1,3)
console.log(mn1);//output = 2,3
console.log("B",number);//output = same as original array

const mn2 = number.splice(1,3)
console.log(mn2);//output =2,3,4
console.log("C",number);//output = chnaged array ie removal of 2,3,4




