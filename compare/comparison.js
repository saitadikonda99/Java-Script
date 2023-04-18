
let laptop = {
    name : "HP",
    processor : "i7",
    price : 85000,

    compare : function( other ) {
        if( this.price > other.price) {
            return this.name;
        }
        else {
            return other.name;
        }
    }
}

let laptop2 = {
    name : "apple",
    processor : "M1",
    price : 83000,

}

let result = laptop.compare(laptop2);

console.log(result)