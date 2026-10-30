// Q1: Demonstrate callback flow.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// The callback runs after the greeting.
greetUser("Alex", showEndMessage);
