// This file is for defining schema & exporting the mongoose model

const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

// see top of server.js