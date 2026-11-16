// Q3 - Bug Tracker: Callback to Promise Migration

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiSuccess = Math.random() > 0.3;

            if (apiSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject(new Error("Failed to fetch bugs from API!"));
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
