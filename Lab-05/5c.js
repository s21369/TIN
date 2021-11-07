function Student(idStudent, firstName, lastName) {
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastname = lastName
}

Student.prototype.courses = ["TIN", "ZPR", "BYT", "GRK"];

let s1 = new Student(1, "John", "Smith");

console.log(`List of courses: ${s1.courses}`);