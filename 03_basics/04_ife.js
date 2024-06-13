// Immediately invoked function

(function one() {
    console.log("DB connected");
})();

// (function defination)(function execution)

((num) => {
    console.log(`DB Connected ${num}`);
})("two"); 