function Student(idStudent, firstName, lastName, grades) {
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastname = lastName,
    this.grades = grades,

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

    this.getAverageGrade = function() {
        return (this.grades.reduce((a, b) => a + b, 0) / this.grades.length);
    }

    this.printDetails = function() {
        console.log(`Full name: ${this.getFullName()}\nAverage grade: ${this.getAverageGrade()}\n`);
    }
}

let s1 = new Student(1, "John", "Smith", [3, 4, 3, 4, 5, 4, 3, 5]);
let s2 = new Student(2, "Brandon", "Miller", [5, 5, 3, 4, 4, 5, 2, 5]);

s1.printDetails();
s2.printDetails();