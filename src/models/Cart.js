class Cart {
  // Create a new Cart instance.
  // @param {User} user - The user who owns the cart.
  constructor(user) {
    this.user = user;
    this.items = [];
  }
  
  // Add a book to the cart.
  // @param {Book} book - The book to be added to the cart.
  addBook(book) {
    this.items.push(book);
  }

  // Remove a book from the cart.
  // @param {Book} book - The book to be removed from the cart.
  removeBook(book) {
    const index = this.items.indexOf(book);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Calculate the total price of the books in the cart.
  // @returns {number} The total price of the books in the cart.
  calculateTotalPrice() {
    return this.items.reduce((total, book) => total + book.price, 0);
  }
}

module.exports = { Cart };