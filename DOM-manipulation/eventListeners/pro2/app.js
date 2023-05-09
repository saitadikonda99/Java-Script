// DOM Manipulation

// Reveal Event

let reveal = document.querySelector('#button1');

let hidden = document.querySelector('.reveal-more');


let revealContent = () => {
    if( hidden.classList.contains('button1')) {
        hidden.classList.remove('button1');
    }
        else {
            hidden.classList.add('button1');
        }
}

reveal.addEventListener('click', revealContent);