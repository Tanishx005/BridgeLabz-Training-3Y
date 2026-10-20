// Q9. Odd–Even Number Analyzer
// Classify integers from 1 through 30 and store each result in a new array.

const results = [];

for (let number = 1; number <= 30; number++) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push({ number, classification });
}

console.table(results);
