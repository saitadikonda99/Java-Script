// Write a callback function that accepts a string and a
// callback as parameters. The function should call
// the callback with each character of the string as an argument.


function fun( string, callback) {
    let result = Array.from(new Set(string));
    console.log(result);
}


fun('kusuma', (result) => {
    console.log(result);
});


