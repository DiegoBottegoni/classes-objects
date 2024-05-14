// Represents a book in the bookstore.
class Book {
  // Create a new Book instance.
  // @param {string} title - The title of the book.
  // @param {string} author - The author of the book.
  // @param {string} isbn - The ISBN of the book.
  // @param {number} price - The price of the book.
  // @param {boolean} availability - The availability of the book.
  constructor(title, author, isbn, price, availability) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
}

module.exports = { Book };
