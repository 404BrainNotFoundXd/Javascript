const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][2])


//Concat
// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr)


//Spread Out
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


const another_arr = [1,2,3, [4,5,6] ,7,[6,7,[4,5]]]
const real_another_array = another_arr.flat(Infinity)
// console.log(real_another_array)


// console.log( Array.isArray("Shobhit"));
// console.log( Array.from("Shobhit"));
console.log(Array.from({name: "Shobhit"})) //INTERESTING

let score1= 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

