// Write a function that takes two numbers as input and returns
// the result of dividing the first number by the second
// number. Handle the exception when the second
// number is zero and provide a custom error message.

var a = 5;
var b = 0;

try {
    if (b === 0) {
        throw new Error(`can't divide by zero`)
    }
    let ans = a / b;
    console.log(ans);
} catch(error) {
    console.log(error.message);
}