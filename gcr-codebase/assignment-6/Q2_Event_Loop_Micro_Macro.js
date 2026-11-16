// Q2 - Task Scheduler: Microtasks vs Macrotasks

console.log("Start");

// setTimeout callback is a macrotask.
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

// Promise.then callback is a microtask.
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Synchronous log");
console.log("End");

/*
Expected output:
Start
Synchronous log
End
Promise callback
setTimeout callback

Synchronous statements run first. Once the current call stack is empty,
JavaScript processes queued microtasks (such as Promise.then callbacks)
before moving on to macrotasks (such as setTimeout callbacks).
*/
