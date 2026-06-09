const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);//push will treat array as a single object or element

//better method to join two arrays
marvel_heros.concat(dc_heros)//BLUNDER ERROR as concat returns a new array without modifying existing array unlike push which alters our existing array
const allHeroes = marvel_heros.concat(dc_heros)
//console.log(allHeroes);//now concat will work

//Spread operator:another method
const heros = [...marvel_heros, ...dc_heros]
console.log(heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting as it will return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

