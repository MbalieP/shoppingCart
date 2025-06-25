# Simple Shopping Cart

This is a simple shopping cart application written in JavaScript. It allows you to manage products, add them to a shopping cart, and calculate total costs. This project is intended for beginners to understand object-oriented programming and basic JavaScript concepts.

## Features

- Create products with unique IDs, names, prices, and available stock.
- Add products to the shopping cart.
- Remove items from the cart.
- Calculate the total cost of items in the cart.
- Print a summary of the cart.
## Code Overview

The application uses a constructor function to create products and an object to manage the shopping cart.

### Product Constructor Function

```javascript
function createProduct(id, name, price, stock) {
    return {
        id,
        name,
        price,
        stock,
        updateStock: function (quantity) {
            if (this.stock >= quantity) {
                this.stock -= quantity;
            } else {
                console.log(`❌ Not enough stock for ${this.name}`);
            }
        }
    };
}
