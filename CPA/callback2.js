// call back function
// division of two numbers


function divide( num1, num2, callback) {
    if( num2 == 0) {
        callback( null, true);
    } else {
        callback(num1/num2, false);
    }
}


divide( 10, 6, (result, error )=> {
    if(error) {
        console.error("can't divide with zero");
    }  else {
        console.log( "reultL: " + result);
    }
});