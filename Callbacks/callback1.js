// Write a callback function that takes two numbers as parameters and returns their sum.
 
sum( 5, 13, (num1, num2)=> {
    console.log(num1 + num2);
})


function sum( num1, num2, callback) {
    callback( num1, num2);
}