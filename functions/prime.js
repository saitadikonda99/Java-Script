

let a = 5


console.log(Boolean(primeNum(a)) )

function primeNum(a ) {
    let count = 0
    for( let k=1; k<=a; k++ ) {
        if( a % k == 0  ) {
            count++
        }
    }
    return count == 2
}