// Simple Calculator using HTML, CSS, JavaScript


const main = document.getElementsByClassName('main-box')[0];
const container = document.getElementsByClassName('container')[0];

const input = document.createElement('input');
input.classList.add('input-box');


container.insertBefore(input, main);

// this function add buttons to the main-box.
const giveButtons = () => {

// an array to store the contents of the buttons

const arr = [ 'C', '%', 'Del', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '00', '0', '.', '=' ];
// we need 20 buttons to make calculator so, add 20 buttons using a loop

for( let k=0; k<20; k++ ) {

    const but = document.createElement('button');
    but.classList.add(`but`);
    but.innerText = arr[k];

    if (arr[k] === '=') {
        but.classList.add('special-but');
    }

    main.appendChild(but);
    }

}

giveButtons();

const button = document.getElementsByClassName('but');

for( let k=0; k<button.length; k++ ) {
    button[k].addEventListener('click', () => {
    const buttonText = button[k].textContent;
        if( buttonText === 'C') {
            input.value = '';
        } else if ( buttonText === 'Del') {
            input.value = input.value.slice(0, -1);
        } else if( buttonText === '=') {
            const result = eval(input.value);
            if(!isNaN(result)) {
                input.value = result;
           } else {
                 input.value = 'Invalid';
                    setTimeout(() => {
                        input.value = '';
                            },2000);
           }
        } else {
            input.value += buttonText;
        }
    });
}




