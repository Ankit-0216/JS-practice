const languages = ["golang", "java", "javascript", "python", "ruby", "lua"]

// languages.forEach( function (item) {
//     console.log(item);
// });

languages.forEach( (item) => {
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

// languages.forEach(printMe)

languages.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "golang",
        languageFileName: "go"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})