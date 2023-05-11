//Create a callback function that takes an array
//of numbers and returns the largest number in the array.


function maxElement( arr, callback ) {
        var max = arr[0];
            for( let k of arr ) {
                if( max < k) {
                    max = k;
                }
            }
        callback(max, false);
}


maxElement( [1, 2, 1000, 4, 5], (result, error)=> {
    if(!error) {
        console.log(`resutl : ${result}`);
    } else {
        console.error('error found');
    }
});