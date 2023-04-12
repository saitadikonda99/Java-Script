
// create a count variable to count

let count = 0;

let Countdoc = document.getElementById("counter")

function count_k() {
    count++
    console.log(count)
    Countdoc.innerText = count
}


// let's create a reset function

function reset() {
    count = 0;
    Countdoc.innerText = count;
}