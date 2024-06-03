function sayMyName() {
    // console.log("hello world");
}
sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(5, "a")
// console.log("Result: ", result);

function loginUserMessage(username = "default") {

    if(!username) {
        console.log("Please enter username");
        return
    }

    return `${username} just loggedd in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "ankit",
    age: 22 
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "ankit",
    age: 22 
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))