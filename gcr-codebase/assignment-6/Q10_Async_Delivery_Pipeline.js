// Q10 - The Final Delivery: Async Pipeline Debugger

function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        // Random delay between 1,000 and 2,000 milliseconds.
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            // Each step has an 80% chance of succeeding.
            if (Math.random() > 0.2) {
                console.log(successMessage);
                resolve(stepName + " completed");
            } else {
                reject(new Error(stepName + " failed"));
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Each await waits for the current step before starting the next.
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");

        console.log("Pipeline completed successfully!");
    } catch (error) {
        // A rejection transfers control to catch; later steps are skipped.
        console.log("Pipeline failed!");
        console.log("Error:", error.message);
    }
}

runPipeline();

/*
Async/event loop explanation:
1. runPipeline is async, so it returns a Promise.
2. deliveryStep returns a Promise for each delayed operation.
3. await suspends runPipeline until that Promise settles.
4. While it is waiting, the event loop can run other queued work.
5. If the step resolves, execution continues with the next step.
6. If the step rejects, execution jumps to catch and the pipeline stops.

The steps run sequentially, not concurrently.
*/
