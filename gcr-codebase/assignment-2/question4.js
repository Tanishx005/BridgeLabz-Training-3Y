// Q4. Array Performance Analyzer
// Generate eight random integer scores from 30 through 100 and summarize them.

const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;
const scoreLabels = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

console.log("Student scores:");
console.table(scoreLabels);

console.log(`
Performance Summary
-------------------
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (score >= 50): ${passedStudents} of ${scores.length}
`);
