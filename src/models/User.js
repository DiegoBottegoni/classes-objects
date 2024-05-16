// Represents a user of the bookstore.
class User {
  #name;
  #email;
  #userId;

  // Create a new User instance.
  constructor(name, email, userId) {
    this.#name = name;
    this.#email = email;
    this.#userId = userId;
  }

  // Getters for private properties
  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get userId() {
    return this.#userId;
  }

  // Define how to serialize the User instance to JSON
  toJSON() {
    return {
      name: this.#name,
      email: this.#email,
      userId: this.#userId
    };
  }
}

module.exports = { User };
