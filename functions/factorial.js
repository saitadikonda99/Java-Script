
let a = 5

let ans = fact( a )

console.log( ans)

function fact( a ) {

        let ans = 1;
    for( let k=1; k<=a; k++ ) {
        ans *= k
    }
    return ans
}