
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let employee of employees) {
    try {
        if (!employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee details");
        }

        let salary = Number(employee.salary);
        let years = Number(employee.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Invalid employee data");
        }

        let bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        let totalSalary = salary + bonus;

        console.log(`Name: ${employee.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}