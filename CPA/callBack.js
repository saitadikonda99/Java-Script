// In JavaScript, a callback function is a function that is
//passed as an argument to another function,
 //and is intended to be called back or executed
//  later in the program. The main purpose of a callback
//  function is to allow you to perform a specific action after
// another function or operation has completed its task.



step1( 10, (result1, error )=> {
    if(!error) {
        step2( result1, (result2, error) => {
            if(!error) {
                step3( result2, (result3, error) => {
                    if(!error) {
                        console.log(`result : ${result3}`);
                    }
                });
            }
        });
    }
});

function step1( value, callback ) {
    callback( value+10, false)
}

function step2( value, callback ) {
    callback( value+10, false)
}

function step3( value, callback ) {
    callback( value+10, false)
}