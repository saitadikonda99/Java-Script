
// create a count variable to count

let count = 0;

let Countdoc = document.getElementById("counter")

    // let's create increment function
function increment() {
    count++

    Countdoc.innerText = count
}

    // let's create decrement function
function decrement() {
    count--
    if( count < 0 ) {
        count = 0
        Countdoc.innerText = "Sorry, you can't go below 0"
        alert("Sorry, you can't go below 0")
    }
    else {
    Countdoc.innerText = count
    }
}

// let's create a reset function

function reset() {
    count = 0;
    Countdoc.innerText = count;
}
