const { calculateTotalPrice } = require('../utils/utils.js');

// Represents a shopping cart in the bookstore.
class Cart {
  // Create a new Cart instance.
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  // Add a book to the cart.
  addBook(book) {
    if (book.availability) { // Check if the book is available before adding
      this.items.push(book);
    } else {
      console.log(`The book "${book.title}" is not available and cannot be added to the cart.`);
    }
  }

  // Remove a book from the cart.
  removeBook(book) {
    const index = this.items.indexOf(book);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

    // Calculate the total price of the books in the cart.
    calculateTotalPrice() {
      return calculateTotalPrice(this.items);
    }

  // Define how to serialize the Cart instance to JSON
  toJSON() {
    return {
      user: this.user,
      items: this.items,
      totalPrice: this.calculateTotalPrice() // Adding totalPrice to the output
    };
  }
}

module.exports = { Cart };
