const marvel_heros =["thor" , "ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);


//console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

//const allHeros = ,arvel_heros.concat(dc_heros)
//console.log(allHeros);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("dev"))
console.log(Array.from({name:"Dev"}))//interesting


let score1 =100
let score2 =200
let score3=300

console.log(Array.of(score1, score2,score3));
