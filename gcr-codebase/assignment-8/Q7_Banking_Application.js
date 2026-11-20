// Q7. Banking Application (Private Class Fields + Error Handling)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal declined.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

try {
    account.deposit(500);
    console.log("After deposit: Rs.", account.getBalance());

    account.withdraw(300);
    console.log("After withdrawal: Rs.", account.getBalance());
} catch (error) {
    console.log("Transaction failed:", error.message);
}

try {
    account.withdraw(2000); // Invalid: balance is insufficient.
} catch (error) {
    console.log("Transaction failed:", error.message);
}

console.log("Final balance: Rs.", account.getBalance());

// account.#balance cannot be accessed directly outside the class.
