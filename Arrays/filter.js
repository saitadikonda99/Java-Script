let arr = [1, 3, 2, 4, 5, 6, 8];


// print the array using forEach();
// arr.forEach( (n) => {
//     c`onsole.log(n);
// });

// filter the array that prints only even numbers
arr.filter( n => n % 2 === 0)
        .forEach( (n) => {
            console.log(n);
        });