const Book = require('./models/book.js')

const dotenv = require('dotenv')

dotenv.config()

const express = require('express')
<<<<<<< HEAD
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
/
app.use(express.json())
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
=======

const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

const cors = require('cors')

app.use(cors())

app.post('/books', async (req, res) => {
>>>>>>> 026075720672087145b3c402e9a22f897cf6ece0

    const createdBook = await Book.create(req.body)
    res.json(createdBook)
})

app.get('/books', async (req, res) => {
    const foundBooks = await Book.find()
    res.json(foundBooks)
})

app.delete('/books/:bookId', async (req, res) => {

    const deletedBook = await Book.findByIdAndDelete(req.params.bookId)
    res.json(deletedBook)
})

app.put('/books/:bookId', async (req, res) => {
    
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true})
    res.json(updatedBook)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})