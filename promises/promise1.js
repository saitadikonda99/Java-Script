 // Create a promise that resolves to the string "Hello, world!"
// and use .then() to log the result to the console



function greet(string) {
    return new Promise( (resolve) => {
        resolve(string);
    });
}

greet("Hello,World")
    .then( (message) => {
        console.log(message);
    });