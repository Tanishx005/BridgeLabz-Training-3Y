// Q8 - Order Processing Flow: Async Retry Mechanism

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject(new Error("Order submission failed"));
            }
        }, 1000);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log("Attempt " + attempt + ": Success");
            console.log(result);
            return;
        } catch (error) {
            console.log("Attempt " + attempt + ": Failed");
        }
    }

    throw new Error("Order could not be processed");
}

async function main() {
    try {
        await processOrder();
    } catch (error) {
        console.log(error.message);
    }
}

main();
