let details = {
    name : "sri",
    age : 18,
    gender : "female",
    hobies : "reading"
}


// to pritn the particular value that is avaliable in the object
console.log(details.name)

// here, is the another way to print the value in the object
console.log(details[`age`])

// to print all the values that are available in the object
console.log(details)



let details2 = {
    name : "Sai",
    age : 19,
    gender : "male",
    hobies : "sleeping" ,
    laptop : {
        brand : "apple",
        processor : "M1",
        color : "space gray"
    }
}

console.log(details2.name)

console.log(details2.laptop)

delete details2.laptop.color

console.log(details2.laptop)

console.log(details2.laptop.processor)