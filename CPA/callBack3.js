
revDigits( 1342, (num, error) => {
    if(!error) {
        var sum = 0;
        while( num > 0 ) {
            let rem = num % 10;
            sum = sum * 10 + rem;
            num = Math.floor(num / 10);
        }
        console.log(sum);
    } else {
        console.error('found an error');
    }
});


function revDigits( num, callback) {
    callback(num, false);
}