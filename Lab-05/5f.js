class Person {
    constructor(firstName, lastName) {
        /* eslint-disable no-unused-expressions, no-sequences */
        this.firstName = firstName,
        this.lastName = lastName;
        /* eslint-enable */
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const arr = fullName.split(" ");
        if (arr.length !== 2) {
            return;
        }
        [this.firstName, this.lastName] = [...arr];
    }
}

class Student extends Person {
    constructor(idStudent, firstName, lastName, grades) {
        /* eslint-disable no-unused-expressions, no-sequences */
        super(firstName, lastName),
        this.idStudent = idStudent,
        this.grades = grades;
        /* eslint-enable */
    }

    get averageGrade() {
        return (this.grades.reduce((a, b) => a + b, 0) / this.grades.length);
    }

    printDetails() {
        console.log(`Full name: ${this.fullName}\nAverage grade: ${this.averageGrade}\n`);
    }
}

const s1 = new Student(1, "John", "Smith", [3, 4, 3, 4, 5, 4, 3, 5]);
const s2 = new Student(2, "Brandon", "Miller", [5, 5, 3, 4, 4, 5, 2, 5]);

s2.printDetails();
s1.printDetails();

console.log(`s1 average grade: ${s1.averageGrade}`);
console.log(`s2 full name: \nBefore: ${s2.fullName}`);
s2.fullName = "Bohdan Kordon";
console.log(`After: ${s2.fullName}`);
