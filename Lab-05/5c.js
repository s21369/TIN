function Student(idStudent, firstName, lastName) {
    /* eslint-disable no-unused-expressions, no-sequences */
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastName = lastName;
    /* eslint-enable */
}

Student.prototype.courses = ["TIN", "ZPR", "BYT", "GRK"];

const s1 = new Student(1, "John", "Smith");

console.log(`List of courses: ${s1.courses}`);
