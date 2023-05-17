const container = document.getElementsByClassName('container')[0];


const but = document.createElement('button');
but.classList.add('but');

but.innerText = 'Theme';
container.append(but);


but.addEventListener( 'click', () => {

    if( container.style.backgroundColor === 'white') {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'white';
    }
})