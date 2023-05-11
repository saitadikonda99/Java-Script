// Implement a callback function that receives an array
// of objects representing students, with each object having
// a "name" and "grade" property. The function should return an array of
// the names of students who passed (grade is greater than or equal to 60).


var arr = [ kusuma = {
                name : 'kusuma',
                age : 18,
                grade : 99,
}, sai = {
    name : 'sai',
    age : 19,
    grade : 90,
},];

function fun(arr, callback) {

    // this is the one way to sort the student using for of loop

    // for( let k of arr ) {
    //     if( k.grade >= 60 ) {
    //         names.push(k.name);
    //     }
    // }

    // but, we can sort the data using filter function and insert
    // the names into an array usign map function

     var names = arr.filter( arr => arr.grade >= 60 )
                    .map( arr => arr.name );

     callback(names);
}

fun(arr, (names) => {
    for (const k of names) {
        console.log(k);
    }
});


