// Implement a callback function that takes a number and a
// callback as parameters. The function should call the
// callback with the number as an
// argument, but only if the number is positive.


function fun( num, callback) {
    if( num > 0) {
        console.log(num);
    }
}

fun( -5, (result) => {
    console.log(result);
})