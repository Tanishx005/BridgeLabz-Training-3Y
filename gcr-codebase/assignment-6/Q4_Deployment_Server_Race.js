// Q4 - DevOps Delay: Async Timeout Race

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A completed deployment");
            } else {
                reject(new Error("Server A deployment failed"));
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B completed deployment");
            } else {
                reject(new Error("Server B deployment failed"));
            }
        }, 3000);
    });
}

// Promise.all waits for both servers to fulfill.
// These are separate requests from the Promise.race simulation.
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment Error:", error.message);
    });

// Promise.race settles as soon as the first Promise fulfills or rejects.
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error.message);
    });
