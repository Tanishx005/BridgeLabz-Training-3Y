// Q2. Online Food Ordering (map + reduce + Error Handling)

const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Find each ordered item's price. An unknown item is an invalid order.
    const prices = orderItems.map(itemName => {
        const menuItem = menu.find(item =>
            item.name.toLowerCase() === itemName.toLowerCase()
        );

        if (!menuItem) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return menuItem.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

const orders = [
    ["Burger", "Pasta"],
    ["Pizza", "Fries"]
];

orders.forEach((order, index) => {
    try {
        const total = calculateBill(order);
        console.log(`Order ${index + 1} total: Rs. ${total}`);
    } catch (error) {
        console.log(`Order ${index + 1} failed: ${error.message}`);
    }
});
