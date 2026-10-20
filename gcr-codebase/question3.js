// Q3. Monthly Expense Tracker
// Calculate the total, average, and total after adding 10% tax.

const expenses = {
    food: 4500,
    travel: 1800,
    rent: 9000,
    bills: 1600,
    leisure: 1200
};

let totalExpenses = 0;

for (const category in expenses) {
    totalExpenses += expenses[category];
}

const averageExpense = totalExpenses / Object.keys(expenses).length;
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
let finalAmount = totalExpenses;
finalAmount += taxAmount;

console.log(`Total expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
