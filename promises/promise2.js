 // Create a promise that simulates an asynchronous operation that resolves after 2 seconds
 // with the value true. Use .then() to log the result to the console.



 function fun() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(true);
        },2000);
    })
 }

 fun()
    .then((result) => {
        console.log(result);
    });

    