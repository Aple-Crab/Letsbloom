# Library Management API

This is a simple RESTful API for managing a library system. It interacts with MongoDB to perform basic CRUD operations on books.

## Getting Started
### Prerequisites
Node.js installed<br>
MongoDB installed and running<br>
#### Installation
#### Clone the repository:

git clone "https://github.com/Aple-Crab/Letsbloom.git"

#### Install dependencies:

npm i express mongoose body-parser<br>

### Run the application
node app.js

The server will be running on http://localhost:3000.<br>
API Endpoints
1. Retrieve All Books<br>
Endpoint: GET /api/books<br>
Response Format:<br>
{
  "title": "New Book",
  "author": "New Author",
  "publishedYear": 2023
}

2. Add a New Book<br>
Endpoint: POST /api/books<br>
Request Format:<br>
{
  "title": "New Book",
  "author": "New Author",
  "publishedYear": 2023
}<br>
{
  "message": "Book added successfully"
}
3. Update Book Details<br>
Endpoint: PUT /api/books/{id}<br>
Request Format:<br>
{
  "title": "Updated Title",
  "author": "Updated Author",
  "publishedYear": 2024
}<br>
{
  "message": "Book updated successfully"
}

