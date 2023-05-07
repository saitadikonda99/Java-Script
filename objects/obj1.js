
let name = {
    firstName : " Manikanta",
    lastName : "tadikonda",
    role : "DevOps Engineer",

    laptop :  {
        model : "Apple Mac M1",
        color : "Space gray",
        price : 83500,
    }
}

// printing the name using for each loop

for( let key in name ) {
    // key is the variable which is used to store the keys of the object
    // name is the object
    // name[key] is the value of the key
    console.log( key + " : " + name[key]);
}

for( let key in name.laptop ) {
    // key is the variable which is used to store the keys of the object
    // name is the object
    // name[key] is the value of the key
    console.log( key + " : " + name.laptop[key]);
}