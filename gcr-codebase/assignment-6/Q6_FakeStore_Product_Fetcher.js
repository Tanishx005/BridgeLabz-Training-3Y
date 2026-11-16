// Q6 - E-Commerce Dashboard: Product Card Fetcher

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const products = await response.json();

        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("----------------------------");
        });
    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

fetchProducts();

// Requires Node.js 18+ (which includes the built-in fetch function)
// or a modern browser with internet access.
