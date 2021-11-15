function Student(idStudent, firstName, lastName, grades) {
    /* eslint-disable no-unused-expressions, no-sequences */
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,
    /* eslint-enable */

    this.getFullName = () => `${this.firstName} ${this.lastName}`;

    this.getAverageGrade = () => (this.grades.reduce((a, b) => a + b, 0) / this.grades.length);

    this.printDetails = () => console.log(`Full name: ${this.getFullName()}\nAverage grade: ${this.getAverageGrade()}\n`);
}

const s1 = new Student(1, "John", "Smith", [3, 4, 3, 4, 5, 4, 3, 5]);
const s2 = new Student(2, "Brandon", "Miller", [5, 5, 3, 4, 4, 5, 2, 5]);

s1.printDetails();
s2.printDetails();
