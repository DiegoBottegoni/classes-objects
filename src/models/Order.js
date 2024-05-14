// Represents an order made by a user in the bookstore.
class Order {
  // Create a new Order instance.
  // @param {User} user - The user who made the order.
  // @param {Book[]} books - The array of books included in the order.
  constructor(user, books) {
    this.user = user;
    this.books = books;
    this.totalPrice = this.calculateTotalPrice();
  }

  // Calculate the total price of the order.
  // If a book is not available, its price will not be included in the total.
  // @returns {number} The total price of the order.
  calculateTotalPrice() {
    return this.books.reduce((total, book) => {
      if (book.availability) {
        return total + book.price;
      } else {
        console.log(`Book "${book.title}" is not available.`);
        return total;
      }
    }, 0);
  }
}

module.exports = { Order };
