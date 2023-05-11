// Implement a callback function that receives an array of strings
// and returns a new array containing the lengths of each string.

var array = ['kusuma', 'sai', 'sirisha', 'rani', 'dasu'];


function arr(array, callback ) {
    var len = [];
    for( let k=0; k<array.length; k++ ) {
        len.push(array[k].length);
    }
    callback(len, false)
}



arr( array, (len, error) => {
    if(!error) {
        let s = 1;
        for( let k of len) {
            console.log(`length of ${s} string : ${k}`);
            s++;
        }
    } else {
        console.error('Error : found');
    }
});