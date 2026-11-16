// Q9 - Debugging the Event Loop

/*
Predicted output:
Script start
Script end
Promise callback
Timeout callback

Explanation:
Synchronous code runs first. Promise.then() queues a microtask, while
setTimeout() queues a macrotask. After synchronous execution completes,
the event loop drains the microtask queue before running the timer callback.
*/

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");
