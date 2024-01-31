const marvel_Heros = ["Ironman", "Hulk", "Spiderman"]
const Dc_Heros = ["Superman", "Batman", "Flash"]

// marvel_Heros.push(Dc_Heros); // in this process we dosent get the value under one array.
// console.log(marvel_Heros); 
// console.log(marvel_Heros[3][1])

const all_Heros = marvel_Heros.concat(Dc_Heros); // method to merge two array. 
console.log(all_Heros);

// another simple method to merge another two array. 
const all_new_Heros = [...Dc_Heros, ...marvel_Heros];
console.log(all_new_Heros)
console.log(typeof all_new_Heros)

//another case senerio:

const another_Array = [1, 2, 3, 4, 5, [8, 9 , 10 ], [56, 39 , [51, 23 , 37] ], 0, 3]
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array)

console.log(Array.isArray("Arnab"))
console.log(Array.from("Arnab"))
console.log(Array.from({name: "Arnab"}))


let score1 = 100;
let score2 = 500;
let score3 = 800;
console.log(Array.of(score1, score2, score3));