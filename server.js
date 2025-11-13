const Book = require('./models/book.js')
const express = require('express')
const app = express()


app.post('/books', async (req, res) => {

    const createdBook = await Book.create(req.body)
    res.json(createdBook)
})

app.get('/books', async (req, res) => {
    const foundBooks = await Book.find()
    res.json(foundBooks)
})

app.delete('/books/:bookId', async (res, req) => {

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