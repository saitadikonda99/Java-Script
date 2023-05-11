// Create a callback function that takes an array of numbers and a
// target number.The function should
// return the index of the first occurrence of the target number
// in the array, or -1 if the number is not found.


function search( arr, target, callback) {
        // let st = 0;
        // let end = arr.length -1;
        //         while( st <= end ) {
        //             let mid = Math.floor( st + ( end - st));
        //             if( arr[mid] > target ) {
        //                 end = mid - 1;
        //             } else if( arr[mid] < target ) {
        //                 st = mid + 1;
        //             } else {
        //                 callback(arr[mid]);
        //                 return;
        //             }
        //         }

        // instead of using the binary search method we
        // can filter option and using ternary operator
        // we can check whether it is found or not found
        // if not simple return -1
        let result = arr.filter( arr => arr === target )
        result.length > 1 ? console.log(result) : console.log(-1);
}

search( [1, 2, 3, 4, 10, 6, 7], 5, (result) => {
    console.log(result);
});