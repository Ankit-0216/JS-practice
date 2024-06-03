// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ankit",
    [mySym]: "myKey1",
    age: 20,
    location: "bangalore",
    email: "ankit@gmail.com",
    isLoggenIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ankit@google.com"
// Object.freeze(JsUser)
JsUser.email = "ankit@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
