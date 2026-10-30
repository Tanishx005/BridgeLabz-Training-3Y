// Q9: Rewrite Person -> Student inheritance using ES6 classes.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the Person constructor.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Alex", "Computer Science");

student.showName();   // Inherited from Person.
student.showBranch(); // Defined in Student.

console.log(
    "Student inherits from Person:",
    student instanceof Student && student instanceof Person
); // true

// ES6 classes use prototypes internally. Their behavior mirrors
// the constructor-function inheritance pattern in Q5.
