 // Create a function that returns a promise.
 // The promise should resolve with the sum of two numbers
 // if both numbers are positive. Otherwise, it should reject with an
 // error message. Use this function with .then()
 //  and .catch() to handle the success and failure cases respectively.


 function sum( num1, num2 ) {
    return new Promise( (resolve, reject) => {
        if( num1 > 0 && num2 > 0) {
            let sum = num1 + num2;
            resolve(sum);
        } else {
            reject('Error : numbers should be positive');
        }
    });
 }

 sum(5,13)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });
