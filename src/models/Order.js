// Represents an order made by a user in the bookstore.
class Order {
  // Create a new Order instance.
  constructor(user, books) {
    this.user = user;
    this.books = books;
    this.totalPrice = this.calculateTotalPrice();
  }

  // Calculate the total price of the order.
  // Only include the price of books that are available.
  // Returns {number} The total price of the order.
  calculateTotalPrice() {
    return this.books.reduce((total, book) => {
      return book.availability ? total + book.price : total;
    }, 0);
  }

  // Define how to serialize the Order instance to JSON
  toJSON() {
    return {
      user: this.user,
      books: this.books,
      totalPrice: this.totalPrice // Adding totalPrice to the output
    };
  }
}

module.exports = { Order };
