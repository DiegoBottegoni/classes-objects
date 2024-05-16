// Represents a shopping cart in the bookstore.
class Cart {
  // Create a new Cart instance.
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  // Add a book to the cart.
  addBook(book) {
    this.items.push(book);
  }

  // Remove a book from the cart.
  removeBook(book) {
    const index = this.items.indexOf(book);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Calculate the total price of the books in the cart.
  // Only include the price of books that are available.
  // Returns {number} The total price of the books in the cart.
  calculateTotalPrice() {
    return this.items.reduce((total, book) => {
      return book.availability ? total + book.price : total;
    }, 0);
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
