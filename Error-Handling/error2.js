// Create a function that takes an array as input and returns the sum
// of all the numbers in the array. Handle the exception
// when an element in the array is not a number and skip that element.



function sumDigits(arr){
    return new Promise((resolve) => {
        var sum = 0;
        for(let k of arr){
            if(typeof k === 'number' && !isNaN(k)) {
                sum += k;
            }
        }
    resolve(sum);
    });
}

sumDigits([5, 13, 10, 'kusuma', 'sai'])
        .then((result) => {
            console.log(result);
        });
