
function createProduct(id, name, price, stock) {
    return {
        id,
        name,
        price,
        stock,
        // Update stock after purchase
        updateStock: function (quantity) {
            if (this.stock >= quantity) {
                this.stock -= quantity;
            } else {
                console.log(`❌ Not enough stock for ${this.name}`);
            }
        }
    };
}

// Sample product catalog
const products = [
    createProduct(1, "Laptop", 15000, 5),
    createProduct(2, "Headphones", 1200, 10),
    createProduct(3, "Mouse", 300, 20)
];

// Shopping cart object
const cart = {
    items: [],

    // Add item to cart
    addItem: function (productId, quantity) {
        const product = products.find(p => p.id === productId);

        if (!product) {
            console.log("❌ Product not found.");
            return;
        }

        if (product.stock < quantity) {
            console.log(`❌ Only ${product.stock} left in stock for ${product.name}.`);
            return;
        }

        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }

        product.updateStock(quantity);
        console.log(`✅ Added ${quantity} x ${product.name} to cart.`);
    },
