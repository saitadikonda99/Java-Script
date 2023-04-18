
// constructor
function Human( name , age ) {
    this.name = name;
    this.age = age;
    // function
    this.work = function() {
        console.log("I work 12 hrs a day")
    }
}

// let's create an object
let human = new Human( "sai", 19)

// print the name in using obj
console.log(human.name)

// call the function which is in the constructor

human.work()