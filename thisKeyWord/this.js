

let laptop = {
    name : "apple m1",
    processor : "M1",
    price : 85000,

    string : function() {
        return this.name  + " " + this.processor + " " + this.price
    },
}


// console.log(laptop)

console.log(laptop.string())