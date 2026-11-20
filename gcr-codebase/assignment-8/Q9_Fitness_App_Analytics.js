// Q9. Fitness App Analytics (filter + reduce + map + Error Handling)

class FitnessAnalytics {
    constructor(workoutData) {
        if (!Array.isArray(workoutData) || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(entry => entry.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.workoutData.reduce(
            (total, entry) => total + entry.calories,
            0
        );

        return totalCalories / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(entry =>
            `${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users (more than 7000 steps):");
    console.log(analytics.getActiveUsers());

    console.log("Average calories:", analytics.getAverageCalories());

    console.log("User summaries:");
    analytics.getUserSummary().forEach(summary => console.log(summary));
} catch (error) {
    console.log("Analytics error:", error.message);
}

// Empty dataset validation:
try {
    new FitnessAnalytics([]);
} catch (error) {
    console.log("Empty dataset test:", error.message);
}
