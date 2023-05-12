// Create a function that returns a promise. The promise should resolve to
// an array of numbers after a
// delay of 3 seconds. Use async/await to wait for
// the promise to resolve, and log the array to the console.


function fun(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(arr);
        }, 3000);
    });
}

fun([1, 2, 3, 4, 5])
        .then((arr) => {
            console.log(arr);
        });