
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

    // Remove item from cart
    removeItem: function (productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            removed.product.stock += removed.quantity; // Restock on remove
            console.log(`🗑️ Removed ${removed.product.name} from cart.`);
        } else {
            console.log("❌ Item not found in cart.");
        }
    },

    // Calculate total cost
    getTotal: function () {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },

    // Print cart summary
    printSummary: function () {
        if (this.items.length === 0) {
            console.log("🛒 Your cart is empty.");
            return;
        }

        console.log("🛍️ Cart Summary:");
        this.items.forEach(item => {
            console.log(`- ${item.product.name} x${item.quantity} = R${item.product.price * item.quantity}`);
        });
        console.log(`💵 Total: R${this.getTotal()}`);
    }
};

// Usage Examples
cart.addItem(1, 1); // Add 1 Laptop
cart.addItem(2, 2); // Add 2 Headphones
cart.printSummary(); // Print the cart summary
cart.removeItem(2); // Remove Headphones
cart.printSummary(); // Print updated summary
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
