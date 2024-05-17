// Calculate the total price of the available books
function calculateTotalPrice(books) {
    return books.reduce((total, book) => {
      return book.availability ? total + book.price : total;
    }, 0);
  }
  
  // Export the function for use in other files
  module.exports = { calculateTotalPrice };
  