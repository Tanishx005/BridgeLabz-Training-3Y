// Q5: Person -> Student inheritance using constructor functions.

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Initialize the inherited Person property.
    Person.call(this, name);
    this.branch = branch;
}

// Link Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Alex", "Computer Science");

student.showName();   // Inherited from Person.prototype.
student.showBranch(); // Defined on Student.prototype.

console.log(
    "Student inherits from Person:",
    Person.prototype.isPrototypeOf(student)
); // true
