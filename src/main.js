// Importing classes from their respective files
const { Book, EBook } = require('./models/Book.js');
const { User } = require('./models/User.js');
const { Cart } = require('./models/Cart.js');
const { Order } = require('./models/Order.js');

// Creating users
const user1 = new User("Diego", "diego@email.com", 1);
const user2 = new User("Gustavo", "gustavo@example.com", 2);

// Creating books
const book1 = new Book("Mi planta de naranja-lima", "Jose Mauro de Vasconcelos", "9780743273565", 10.99, true);
const book2 = new Book("Doctor Sleep", "Stephen King", "9780061120084", 8.99, true);
const book3 = new Book("1984", "George Orwell", "9780451524935", 7.99, false);
const ebook1 = new EBook("Le Petit Prince", "Antoine de Saint-Exupéry", "1234567890123", 5.99, true, "5MB");

// Printing created users and books
// console.log("Users created:");
// console.log("User 1:", JSON.stringify(user1, null, 2));
// console.log("User 2:", JSON.stringify(user2, null, 2));

// console.log("Books available:");
// console.log("Book 1:", JSON.stringify(book1, null, 2));
// console.log("Book 2:", JSON.stringify(book2, null, 2));
// console.log("Book 3:", JSON.stringify(book3, null, 2));
// console.log("EBook 1:", JSON.stringify(ebook1, null, 2));

// Creating carts for the users
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);

// Adding books to the carts
cart1.addBook(book1);
cart1.addBook(book2);
cart2.addBook(book2);
cart2.addBook(book3);

// Creating orders for the carts
const order1 = new Order(user1, cart1.items);
const order2 = new Order(user2, cart2.items);

// Printing the created orders
console.log("Order 1 created by User 1:", order1);
console.log("Order 2 created by User 2:", order2);

// Adding a new book to the carts
cart1.addBook(ebook1);
cart2.addBook(ebook1);

// Printing the carts after adding the new book
console.log("After adding new Book to carts:");
console.log("Cart 1:", JSON.stringify(cart1, null, 2));
console.log("Cart 2:", JSON.stringify(cart2, null, 2));
