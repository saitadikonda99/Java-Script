
 export default class User {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
}

export let getName = (user) => {
    console.log(`name is ${user.name}`);
};

export let getAge = (user) => {
    console.log(`age is ${user.age}`);
};