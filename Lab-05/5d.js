function Student(idStudent, firstName, lastname, grades) {
    this.idStudent = idStudent,
    this.firstName = firstName,
    this.lastname = lastname,
    this.grades = grades,

    Object.defineProperties(this, {
        "averageGrade": {
            "get": function() {
                return (this.grades.reduce((a, b) => a + b, 0) / this.grades.length);
            }
        },
        "fullName": {
            "get": function() {
                return `${firstName} ${lastname}`;
            },
            "set": function(fullName) {
                let arr = fullName.split(" ");
                if (arr.length !== 2) {
                    return;
                }
                firstName = arr[0];
                lastname = arr[1];
            }
        }
    });

    this.printDetails = function() {
        console.log(`Full name: ${this.fullName}\nAverage grade: ${this.averageGrade}\n`);
    }
}

let s1 = new Student(1, "John", "Smith", [3, 4, 3, 4, 5, 4, 3, 5]);
let s2 = new Student(2, "Brandon", "Miller", [5, 5, 3, 4, 4, 5, 2, 5]);

s1.printDetails();
s2.printDetails();

console.log(`s1 average grade: ${s1.averageGrade}`);
console.log(`s2 full name: \nBefore: ${s2.fullName}`);
s2.fullName = "Bohdan Kordon";
console.log(`After: ${s2.fullName}`);