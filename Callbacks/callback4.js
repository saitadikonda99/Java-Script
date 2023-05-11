// Write a callback function that accepts a string and a callback as parameters.
// The function should call the callback with the
// string as an argument after converting it to uppercase.


function stringUpcase( string, callback) {
     string = string.toUpperCase();
     callback(string);
}

stringUpcase("kusuma", (string) => {
    console.log(string);
});