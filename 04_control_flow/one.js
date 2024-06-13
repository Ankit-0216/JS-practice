// // if

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature < 60) {
//     console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


// // <, >, <=, >=, ==, !=, ===, !==

// const score = 100

// if(score > 90) {
//     const power = "fly"
//     console.log("user Power", power);
// }

const balance = 100

if (balance > 500) console.log("test");

if (balance < 50) {
    console.log("less than 50");
} else if (balance < 75) {
    console.log("less than 75");
} else {
    console.log("more than 75");
}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy the course");
}

const loggedinFromGoogle = true
const loggedinFromEmail = false

if(loggedinFromEmail || loggedinFromGoogle) {
    console.log("User Loggedd in");
}