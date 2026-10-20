// Q8. Dynamic Discount Evaluator
// Apply category discounts to individual items, then apply an additional cart discount
// if the original cart value is greater than ₹50,000.

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedSubtotal = 0;
const itemSummary = [];

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const itemDiscount = product.price * discountRate;
    const finalItemPrice = product.price - itemDiscount;
    discountedSubtotal += finalItemPrice;

    itemSummary.push({
        Item: product.item,
        Category: product.category,
        "Original Price (₹)": product.price.toFixed(2),
        "Discount (%)": `${discountRate * 100}%`,
        "Final Price (₹)": finalItemPrice.toFixed(2)
    });
}

// Extra 5% is applied to the discounted subtotal if original cart value exceeds ₹50,000.
const extraDiscountRate = originalTotal > 50000 ? 0.05 : 0;
const extraDiscount = discountedSubtotal * extraDiscountRate;
const finalTotal = discountedSubtotal - extraDiscount;

console.table(itemSummary);
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Subtotal after item discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Extra cart discount: ${(extraDiscountRate * 100).toFixed(0)}% (₹${extraDiscount.toFixed(2)})`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
