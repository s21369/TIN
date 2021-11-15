function Student(idStudent, firstName, lastName, grades) {
    /* eslint-disable no-unused-expressions, no-sequences */
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,
    /* eslint-enable */

    Object.defineProperties(this, {
        averageGrade: {
            get: () => (this.grades.reduce((a, b) => a + b, 0) / this.grades.length),
        },
        fullName: {
            get: () => `${this.firstName} ${this.lastName}`,
            set: (fullName) => {
                const arr = fullName.split(" ");
                if (arr.length !== 2) {
                    return;
                }
                [this.firstName, this.lastName] = [...arr];
            },
        },
    });

    this.printDetails = () => console.log(`Full name: ${this.fullName}\nAverage grade: ${this.averageGrade}\n`);
}

const s1 = new Student(1, "John", "Smith", [3, 4, 3, 4, 5, 4, 3, 5]);
const s2 = new Student(2, "Brandon", "Miller", [5, 5, 3, 4, 4, 5, 2, 5]);

s1.printDetails();
s2.printDetails();

console.log(`s1 average grade: ${s1.averageGrade}`);
console.log(`s2 full name: \nBefore: ${s2.fullName}`);
s2.fullName = "Bohdan Kordon";
console.log(`After: ${s2.fullName}`);
