
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        if (!/^(SAVE|DISC)\d{2}$/.test(coupon)) {
            throw new Error("Invalid coupon code");
        }

        const discount = Number(coupon.match(/\d+$/)[0]);

        if (discount <= 0 || discount > 100) {
            throw new Error("Invalid discount percentage");
        }

        return this.getTotal() * (1 - discount / 100);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 45000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Cart Items:", cart.items);
console.log(`Original Total: ₹${cart.getTotal().toFixed(2)}`);

const coupon = "SAVE20";

try {
    const finalTotal = cart.applyCoupon(coupon);
    console.log(`Coupon Applied: ${coupon}`);
    console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(error.message);
}