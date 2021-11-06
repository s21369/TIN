let person = {
    firstName: "Sarah",
    lastName: "Smith",
    gender: "female",
    age: 20,

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    sayHi: function(name) {
        console.log(`Hey ${name}, my name is ${this.firstName}`);
    }
};

person.sayHi("Mike");
console.log(`My full name is ${person.getFullName()}\n`);

function objectTypes(obj){
    for(let prop in obj){
        console.log(`${prop} is of type: ${typeof obj[prop]}`);
    }
}

objectTypes(person);