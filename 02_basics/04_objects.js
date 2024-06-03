const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "ankit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "ankit",
            lastname: "sethi"
        }
    }
}

// console.log(regularUser.fullname?.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "ankit"
}

const {courseInstructor: instructor} = course

console.log(instructor);

