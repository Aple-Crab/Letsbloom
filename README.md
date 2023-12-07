# Library Management API

This is a simple RESTful API for managing a library system. It interacts with MongoDB to perform basic CRUD operations on books.

## Getting Started

node app.js
The server will be running on http://localhost:3000.
API Endpoints
1. Retrieve All Books
Endpoint: GET /api/books
Description: Retrieves a list of all books in the library.
Response Format:
{
  "title": "New Book",
  "author": "New Author",
  "publishedYear": 2023
}

2. Add a New Book
Endpoint: POST /api/books
Request Format:
{
  "title": "New Book",
  "author": "New Author",
  "publishedYear": 2023
}
{
  "message": "Book added successfully"
}
3. Update Book Details
Endpoint: PUT /api/books/{id}
Request Format:
{
  "title": "Updated Title",
  "author": "Updated Author",
  "publishedYear": 2024
}
{
  "message": "Book updated successfully"
}

