const person = {
    firstName: "Sarah",
    lastName: "Smith",
    gender: "female",
    age: 20,

    getFullName: () => `${this.firstName} ${this.lastName}`,
    sayHi: (name) => console.log(`Hey ${name}, my name is ${this.firstName}`),
};

person.sayHi("Mike");
console.log(`My full name is ${person.getFullName()}\n`);

function objectTypes(obj) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const prop in obj) {
        console.log(`${prop} is of type: ${typeof obj[prop]}`);
    }
}

objectTypes(person);
