// Write a callback function that receives an array of numbers and
// returns the sum of all even numbers in the array.


function sum(arr, callback) {
        let result = arr.filter( arr => arr % 2 === 0 )
            .reduce((a, b) => a+b);

            callback(result);
}

sum( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (result) => {
        console.log(result);
});