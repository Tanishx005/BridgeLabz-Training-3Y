// Q6. Event-Based Counter Simulation
// increment() and decrement() update the count variable in the outer function scope.

function runCounterSimulation() {
    let count = 0;

    function logCount(action) {
        // This nested function can read the count variable from its enclosing scope.
        console.log(`${action}: count = ${count}`);
    }

    function increment() {
        count++;
        logCount("Increment clicked");
    }

    function decrement() {
        count--;
        logCount("Decrement clicked");
    }

    // Simulate click events by calling the functions manually.
    increment();
    increment();
    decrement();

    console.log(`Final count: ${count}`);
}

runCounterSimulation();
