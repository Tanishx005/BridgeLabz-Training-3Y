// Q6. E-Commerce Inventory System (filter + sort + reduce)

const products = [
    { id: 101, name: "Keyboard", category: "Electronics", price: 1500, stock: 4 },
    { id: 102, name: "Notebook", category: "Stationery", price: 80, stock: 25 },
    { id: 103, name: "Mouse", category: "Electronics", price: 700, stock: 3 },
    { id: 104, name: "Pen Pack", category: "Stationery", price: 120, stock: 10 },
    { id: 105, name: "Chair", category: "Furniture", price: 3200, stock: 2 },
    { id: 106, name: "Desk", category: "Furniture", price: 5000, stock: 6 }
];

function getLowStockProducts(productList, limit = 5) {
    return productList.filter(product => product.stock < limit);
}

function sortProductsByPrice(productList) {
    // Copy first so the original array is not modified.
    return [...productList].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:");
console.log(getLowStockProducts(products));

console.log("Products sorted by price (low to high):");
console.log(sortProductsByPrice(products));

console.log("Total inventory value: Rs.", calculateTotalInventoryValue(products));

console.log("Products grouped by category:");
console.log(groupByCategory(products));
