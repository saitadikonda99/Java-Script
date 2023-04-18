

let add = (a, b) => {
    if( a < 0 && b < 0 ) {
        return (a + b) * -1
    }
        else if( b < 0 ) {
            return a - b
        }
        else if( a < 0 ) {
            return b - a
        }
        else {
            return a + b
        }
}

let result = add( 5, -13)

console.log(result)