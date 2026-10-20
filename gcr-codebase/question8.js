// Q8. Employee Salary Projection
// Project salary for five years using a fixed annual increment rate.

const currentSalary = 600000;
const annualIncrementRate = 8; // percentage
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary *= 1 + annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary);

    salaryProjection.push({
        Year: year,
        "Projected Salary (₹)": projectedSalary
    });
}

console.table(salaryProjection);
