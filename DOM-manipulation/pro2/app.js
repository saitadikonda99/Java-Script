// DOM manipulation


// Traverse the DOM


// Parent Node Traversal

let ul = document.querySelector('ul')

console.log(ul.parentNode.parentNode);

console.log(ul.parentElement.parentElement);


let html = document.documentElement;

console.log(html.parentNode);



// Child Node Traversal

let ul1 = document.querySelector('ul');
let lis = ul1.children;
lis[1].style.backgroundColor = 'blue';


let sai = document.querySelector('ul');

sai.children[0].style.backgroundColor = 'red';

jj