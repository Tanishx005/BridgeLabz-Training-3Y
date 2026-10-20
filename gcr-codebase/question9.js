// Q9. Random Math Quiz Generator
// Generate two random integers and one arithmetic operator, then calculate the answer.

const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (randomOperator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;
    default:
        throw new Error("Unsupported arithmetic operator.");
}

const formattedAnswer = randomOperator === "/"
    ? correctAnswer.toFixed(2)
    : String(correctAnswer);

console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber} = ?`);
console.log(`Correct answer: ${formattedAnswer}`);
