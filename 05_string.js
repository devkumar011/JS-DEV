const name ="dev"
const repoCount = 50

console.log(name + repoCount +" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//`` kyoki yaha par aata h(string interpullution)

const gameName = new String('romrombhaiyo')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne =" romrombhaiyo"
console.log(newStringOne);
console.log(newStringOne.trim());
