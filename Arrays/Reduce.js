let arr = [1, 3, 2, 4, 5, 6, 8];


// print the array using forEach();
// arr.forEach( (n) => {
//     console.log(n);
// });

// filter the array that prints only even numbers
// arr.filter( n => n % 2 === 0)
//         .forEach( (n) => {
//             console.log(n);
//         });

// filter the array that prints only even numbers and multiply by 2 using map
    // arr.filter( n => n % 2 === 0)
    //     .map( n => n * 2)
    //     .forEach( (n) => {
    //         console.log(n);
    //     });


// add the even numbers using reduce
    let result = arr.filter( n => n % 2 === 0)
        .map( n => n * 2)
        .reduce( (a, b) => a +b);
