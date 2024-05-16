// Represents a book in the bookstore.
class Book {
  // Create a new Book instance.
  constructor(title, author, isbn, price, availability) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }

  // Define how to serialize the Book instance to JSON
  toJSON() {
    return {
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      price: this.price,
      availability: this.availability
    };
  }
}

// Represents an eBook, subclass of Book
class EBook extends Book {
  // Create a new EBook instance.
   constructor(title, author, isbn, price, availability, fileSize) {
    super(title, author, isbn, price, availability);
    this.fileSize = fileSize;
  }

  // Define how to serialize the EBook instance to JSON
  toJSON() {
    return {
      ...super.toJSON(),
      fileSize: this.fileSize
    };
  }
}

module.exports = { Book, EBook };
