const dc = ["batman", "superman", "flash"]
const marvel = ["ironman", "thor", "hawkeye"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3]);

// const allHeros = marvel.concat(dc)
// console.log(allHeros);

const allHeros = [...marvel, ...dc]
// console.log(allHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

Array.isArray("Ankit")
console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3));

