// Create a promise that simulates a failed asynchronous operation that
// rejects after 1 second with an error message.
// Use .catch() to log the error to the console.


function fun() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
         reject('error');
        },1000);
    });
}

fun()
    .catch((result) => {
        console.log(result);
    });
