// Write a function that takes a string as input and converts it to a number.
// Handle the exception when the input string cannot be
// converted to a valid number and return a default value.


function change(string, callback) {
    const temp = Number(string);
    if(isNaN(temp)) {
        callback('Invalid input');
    } else {
        callback(temp)
    }
}

 change('kusuma', (result) => {
        console.log(result);
 });