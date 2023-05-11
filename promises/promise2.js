// Create a promise that simulates an asynchronous operation that
// resolves after 2 seconds with the value true.
// Use .then() to log the result to the console.

setTimeout( ()=> {
function sai() {
    return new Promise( (resolve) => {
        resolve(true);
    } );
}

sai()
.then((resolve) => {
    console.log(resolve);
});
},2000);



