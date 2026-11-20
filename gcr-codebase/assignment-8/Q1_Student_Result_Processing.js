// Q1. Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        if (average >= 75) return "B";
        if (average >= 50) return "C";
        return "F";
    }
}

const students = [
    new Student("Aarav", [92, 88, 95, 90]),
    new Student("Diya", [78, 82, 74, 80]),
    new Student("Kabir", [45, 52, 48, 40])
];

students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Average: ${student.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${student.getGrade()}`);
    console.log("--------------------");
});
