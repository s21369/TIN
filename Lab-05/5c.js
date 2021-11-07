function Student(idStudent, firstName, lastname) {
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastname = lastname
}

Student.prototype.courses = ["TIN", "ZPR", "BYT", "GRK"];

let s1 = new Student(1, "John", "Smith");

console.log(`List of courses: ${s1.courses}`);