// Represents a user of the bookstore.
class User {
  // Create a new User instance.
  // @param {string} name - The name of the user.
  // @param {string} email - The email of the user.
  // @param {number} userId - The unique ID of the user.
  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  }
}

module.exports = { User };
