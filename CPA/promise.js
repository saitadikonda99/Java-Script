
function revDigit(num) {
    return new Promise((resolve, reject) => {
        var sum = 0;
            while(num !== 0 ) {
                let rem = num % 10;
                sum = sum * 10 + rem;
                num = Math.floor(num / 10);
            }
        if(sum !== 0 ) {
            resolve(sum);
        } else {
            reject('Error: enter the valid number');
        }
    });
}

revDigit(1234)
    .then( (result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });