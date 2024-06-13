const userEmail = "a@b.com"

if(userEmail) {
    console.log("User email exist");
} else {
    console.log("User email doesn't exist");
}

// falsy values:-
// false , 0, -0, BigInt 0n, "", null, undefined, NaN, 

// truthy values:-
// "0", 'false', " ", [], {}, function() {}

const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

// terniary operator
// condition ? true : false