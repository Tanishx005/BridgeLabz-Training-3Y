// Q4. Employee Inheritance (Inheritance + Runtime Polymorphism)

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Method overriding: Manager provides its own implementation of work().
    work() {
        return `${this.name} manages the ${this.department} department and leads ${this.teamSize} employees.`;
    }
}

const people = [
    new Employee("Rohan", "Development"),
    new Manager("Meera", "Engineering", 8),
    new Employee("Ishita", "Design")
];

// The same method call behaves differently based on the object's actual type.
people.forEach(person => console.log(person.work()));
