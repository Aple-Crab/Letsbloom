const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB to local host with database named library
mongoose.connect( 'mongodb://127.0.0.1:27017/library').then(()=>{
    console.log("Connected to the Database!!!");
}).catch(err => {
    console.log(err);
});



// books collection database
const Book = mongoose.model('Book', {
  title: String,
  author: String,
  publishedYear: Number,
});



app.use(bodyParser.json());

// Endpoint 1: Retrieve All Books

app.get('/api/books', async (req, res) => {
  try {
    await Book.deleteMany();
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint 2: Add a New Book

app.post('/api/books', async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;

    // Validation
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check for duplicate entries
    const existingBook = await Book.findOne({ title, author });
    if (existingBook) {
      return res.status(400).json({ error: 'Duplicate entry' });
    }

    const newBook = new Book({ title, author, publishedYear });
    await newBook.save();

    res.json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint 3: Update Book Details

app.put('/api/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;

    // Validation
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if the book exists
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Update book details
    existingBook.title = title;
    existingBook.author = author;
    existingBook.publishedYear = publishedYear;
    await existingBook.save();

    res.json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
