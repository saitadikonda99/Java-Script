
let k = document.getElementById('input1')
let s = document.getElementById('input2')

function addition() {
   if(k.value == "" || s.value == "" || isNaN(k.value) || isNaN(s.value)) {
        alert("Please enter a number")
   }
    else {
        let sum = parseInt(k.value) + parseInt(s.value )
        document.getElementById('result').innerText = sum
    }

}

function subtraction() {
    if(k.value == "" || s.value == "" || isNaN(k.value) || isNaN(s.value)) {
        alert("Please enter a number")
   }
    else {
        let sum = parseInt(k.value) - parseInt(s.value)
        document.getElementById('result').innerText = sum
    }
}

function multiplication() {
    if(k.value == "" || s.value == "" || isNaN(k.value) || isNaN(s.value)) {
        alert("Please enter a number");
   }
    else {
        let sum = parseInt(k.value) * parseInt(s.value)
        document.getElementById('result').innerText = sum
    }
}

function division() {
    if(k.value == "" || s.value == "") {
        alert("Please enter a number")
         }
    else if( parseInt(s.value) == 0 )  {
        alert("You can't divide by zero")
        }
    else {
        let sum = parseInt(k.value) / parseInt(s.value)
        document.getElementById('result').innerText = sum.toFixed(2)
    }
}


