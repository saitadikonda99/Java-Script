let arr = [1, 2, 3, 4, 5];

console.log(arr)

// print the array using for loop
for( let k=0; k<arr.length; k++ ) {
    console.log(arr[k]);
}

// print the array using for in loop
for( let k in arr ) {
    console.log(arr[k]);
}

// print the array using for of loop
for( let k of arr) {
    console.log(k);
}
