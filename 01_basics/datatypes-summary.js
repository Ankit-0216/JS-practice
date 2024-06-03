// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);


// Reference (Non Primitive)
// Array, Objects, Functions

const fruits = ["apple", "banana", "orange"]
let obj = {
    name: "ankit",
    age: 20,
}
 
const myFunction = function() {
    console.log("hello world");
}

// ************************************

// Stack (Primitive), Heap (Non-Primitive)

let firstname = "ankit"
let lastname = firstname
lastname = "sethi"

// console.log(firstname);
// console.log(lastname);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
