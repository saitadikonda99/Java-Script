// Create a callback function that takes an array of strings and
// returns a new array with only the
// strings that have a length greater than 5.

var strings = ['kusuma', 'manikanta', 'tadikonda',];
function fun( strings, callback ) {
        let result = strings.filter( strings => strings.length > 5);

        callback(result);
}

fun( strings, (result) => {
    console.log(result);
});