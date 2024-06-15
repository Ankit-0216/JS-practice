const languages = ["golang", "java", "javascript", "python", "ruby", "lua"]

// const values = languages.forEach((item) => {
//     console.log(item);
// })

// console.log("values", values);
// // foreach doesn't return

// filter-------------------------------->

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const filteredNum = myNums.filter( (num) => {
    return num > 4
})
// console.log(filteredNum);

// const newNums = []
// myNums.forEach((item) => {
//     if(item > 4) {
//         newNums.push(item)
//     }
// });
// console.log(newNums);

// map-------------------------------->

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mappedNums = nums.map((num) => num += 10)
// console.log(mappedNums);

const newNums = nums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 30)

// console.log(newNums);


// reduce-------------------------------->
const num = [1, 2, 3, 4, 5, 6]

const reducedNum = num.reduce(function(acc, curr) {
    // console.log("acc:", acc, "  curr:", curr);
    return acc + curr
}, 0)
// console.log(reducedNum);

const shoppingCart = [
    {
        itemName: "sugar",
        price: 100
    },
    {
        itemName: "salt",
        price: 150
    },
    {
        itemName: "black pepper",
        price: 300
    },
    {
        itemName: "oregano",
        price: 220
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalPrice);