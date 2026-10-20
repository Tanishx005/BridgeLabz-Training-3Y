// Q4. Academic Performance Evaluator
// Enter marks for five subjects (each assumed to be out of 100).

const marks = [88, 76, 91, 82, 79];

const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailingSubject = marks.some(mark => mark < 35);

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (hasFailingSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !hasFailingSubject) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    // Defensive fallback in case the inputs are changed unexpectedly.
    console.log("Detained");
}
