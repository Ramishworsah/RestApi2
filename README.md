# Book Collection REST API

A REST API to manage a collection of books, providing functionality for creating, reading, updating, and deleting books.

## API Endpoints

### 1. `GET /books`
- **Description**: Get all books in the collection.
- **Response**: A list of all books with details like title, author, genre, and more.
- **Example Request**:
  ```bash
  GET http://localhost:3000/books
