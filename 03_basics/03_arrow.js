const user = {
    username: "ankit",
    age: 20,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     console.log(this);
// }
// one()

const one = () => {
    let username = "ankit"
    console.log(this);
}
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 4));