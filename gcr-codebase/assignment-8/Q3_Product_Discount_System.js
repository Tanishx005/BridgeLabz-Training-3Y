// Q3. Product Discount System (Constructor Function + Prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// A shared prototype method is available to every Product object.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Keyboard", 1500),
    new Product("Mouse", 800),
    new Product("Headphones", 2500)
];

const discounts = [10, 15, 20];

products.forEach((product, index) => {
    const discountedPrice = product.applyDiscount(discounts[index]);
    console.log(`${product.name}: Rs. ${product.price}`);
    console.log(`After ${discounts[index]}% discount: Rs. ${discountedPrice.toFixed(2)}`);
    console.log("--------------------");
});

// Abstraction: the caller only provides a discount percentage.
// The calculation details are handled inside applyDiscount().
