
let x = 121

var isPalindrome = function(x) {
    //   Check if x is a positive integer
    if (typeof x !== 'number' || x < 0 || !Number.isInteger(x)) {
        return false; // Return false for negative numbers and non-integer inputs
    }

    let sum = 0;
    let original = x;

    while (x > 0) {
        let rem = x % 10;
        sum = sum * 10 + rem;
        x = Math.floor(x / 10);
    }

    return original === sum;
};


console.log(isPalindrome(121));