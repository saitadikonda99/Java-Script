
let heading = document.getElementsByTagName('h1')[0];

heading.style.color = 'skyblue';


let name1 = document.getElementsByClassName('one-one')[0];

name1.style.fontSize = '40px';


// modifying the text

let firstDiv = document.getElementsByClassName('one-one')[0];


console.log(firstDiv.innerHTML);     //  <span> Neo</span> The Matrix
console.log(firstDiv.innerText);    //   Neo The Matrix
console.log(firstDiv.textContent); //    Neo
                                                // The Matrix



