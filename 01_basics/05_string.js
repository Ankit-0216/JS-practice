const name = "ankit"
const repoCount = 20

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String("mario")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(1, 3)
// console.log(newString);

// const anotherString = gameName.slice(-4, 1)
// console.log(anotherString);

const newStringOne = "   ankit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/name%10ankit"

console.log(url.replace("%10", "-"));

console.log(url.includes("name"));