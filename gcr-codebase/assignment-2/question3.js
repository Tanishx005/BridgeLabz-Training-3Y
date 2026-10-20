// Q3. Math Utility Dashboard
// Calculate common mathematical values for x = 16.75.

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Dashboard
----------------------
Input number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(4)}
Power (x^3): ${cube.toFixed(4)}
Random number (10–50): ${randomNumber}
`;

console.log(summary);
