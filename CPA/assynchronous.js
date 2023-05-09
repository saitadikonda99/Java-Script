
// Asynchronous programming is a technique that enables
// your program to start a potentially long-running task
// and still be able to be responsive to other events while
// that task runs, rather than having to wait until that task
// has finished.
// Once that task has finished,
// your program is presented with the result

console.log('factorial of a given number');

var n = 5;
var calculate = () => {
    let ans = 1;
      for( let k=1; k<=n; k++ ) {
         ans *= k;
    }
    console.log(ans);
};

setTimeout( () => {
    calculate();
},1000);


console.log('kusuma');