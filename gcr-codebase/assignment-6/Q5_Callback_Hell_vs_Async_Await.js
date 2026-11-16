// Q5 - Frontend Rush: Avoiding Callback Hell

// Part 1: Nested callbacks (callback hell)

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Celebration time!");
        callback();
    }, 1000);
}

console.log("Starting callback pipeline...");
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Callback pipeline finished!");
                    runAsyncPipeline();
                });
            });
        });
    });
});

// Part 2: The same pipeline using async/await.

function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Starting async/await pipeline...");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Async/await pipeline finished!");
}

/*
async/await makes sequential asynchronous code easier to read because
it avoids deeply nested callbacks. Each await pauses this async function
until its Promise settles, while the JavaScript event loop can handle
other work.
*/
