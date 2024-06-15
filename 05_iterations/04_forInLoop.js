const myObject = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    go: "golang",
}
for (const key in myObject) {
    // console.log(key , "is the shortcut for", myObject[key]);
}

const programming = ["cpp", "java", "js", "py", "go", "lua"]
for (const key in programming) {
    console.log(programming[key])
}