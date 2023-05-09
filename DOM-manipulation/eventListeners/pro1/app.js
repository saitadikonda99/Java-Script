// DOM Manipulation


// alert function for buttons

let alert1 = () => {
    alert('heyy, you just pressed button one');
}

let alert2 = () => {
    alert('heyy, you just pressed button two');
}

function alert3() {
    alert('heyy, you just pressed button three ');
}

// button Listeners

const button = document.querySelector('.three');

console.log(button);

let changeColor = () => {
    button.style.backgroundColor = 'red';
}

button.addEventListener("mouseover", changeColor);