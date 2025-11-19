/*

---  UNIT-3 GITHUB COLLABORATION PROJECT  ---
---              CRUD REPO                ---

Overall Project Developers:

Jesus Pena
Felix Romero
Cindy Parnell
Austin Berndlmaier 

*/

// ______________________________________________________________________________________

// ⬇ Import modules below ⬇ 


const Book = require('./models/book.js')
    // imports Book from book.js
    
const dotenv = require('dotenv')
    // requires pkg

dotenv.config()
    // loads environment variables from .env file

const express = require('express')
    // allows for importation of external modules

const app = express()
    // the express application object; used to define routes, middleware, etc.

const mongoose = require('mongoose')
    // imports mongoose library

mongoose.connect(process.env.MONGODB_URI)
    // connects to the database using secret string from .env file

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})
    // logs connection status to terminal on start


// __________________________________________________________________________________________

// ⬇ Mounting middleware below ⬇


app.use(express.json())
    // integrates built-in middleware to parse incoming JSON data

const cors = require('cors')
    // imports CORS (Cross-Origin Resource Sharing)
    // a security feature that allows or disallows a web page on one domain ...
    // ... from making requests to another domain (exact definition taken from Google)

app.use(cors())
    // when employed with no arguments, ANY domain can access our server's resources

// __________________________________________________________________________________________

// ⬇ Define landing routes below ⬇

// First > an explanation of res.json, because this differs from the UNIT-2 CRUD apps

// The res.json() method in Express.js is used to send a JSON response to the client. 

// It is a specific method designed for sending data in JSON format ...
// ... and automatically handles the conversion of JavaScript objects ...
// ... or other JSON-compatible data types into a JSON-formatted string.

// (definition again taken straight from Google) 



// Second >> an explanation of REST APIs

// REST (REpresentational State Transfer) API (Application Programming Interface)

// An API acts as an intermediary between two applications ... 
// ... for instance, allowing a front-end to communicate with a server and send back requested data.

// REST is a guiding architectural style for web apps ... and set of principles that simplifies ...
// ... how web resources are defined and addressed. 

// RESTful APIs are both developer-friendly and intuitive to users, given that their structure ...
// ... is broadly understood and uniform.

// these definitions taken from the GA Express API Pets Back-End Module (concepts page)



// Third & Finally >>> an explanation of async/await

// Async functions allow the use of the 'await' keyword ...
// ... which pauses the function's execution until a promise is settled.

// This makes asynchronous operations, such as fetching data from an API, ... 
// ... more readable and easier to manage than traditional promise-chaining.

// (definition taken from Google)



// >>> Now back to the show! >>>


    // app.post a.k.a. the 'C' for 'Create' in CRUD
app.post('/books', async (req, res) => {

    const createdBook = await Book.create(req.body)
    res.json(createdBook)
})
    // awaits the creation of a book and then passes it to the API 

            // === //

    // app.get a.k.a. the 'R' for 'Read' in CRUD
    // you will see that Book.find passes no arguments because we want ALL books to be displayed
app.get('/books', async (req, res) => {
    
    const foundBooks = await Book.find()
    res.json(foundBooks)
})
    // awaits the selection of a book and then presents it in the API

            // === //

    // app.put a.k.a. the 'U' for 'Update' in CRUD
    // this passes three arguments: 
    // (a) the auto-generated book ID
    // (b) the body property of data sent by the client to the server within an HTTP request
    // (c) {new: true} returns the updated book, not the original
app.put('/books/:bookId', async (req, res) => {
    
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true})
    res.json(updatedBook)
})
    // awaits the selection of a book and then updates it in the API 

            // === // 

    // app.delete a.k.a. the 'D' for 'Delete' in CRUD (duh)
app.delete('/books/:bookId', async (req, res) => {

    const deletedBook = await Book.findByIdAndDelete(req.params.bookId)
    res.json(deletedBook)
})
    // awaits the deletion of an existing book and then removes it from the API


// _____________________________________________________________________________________________

app.listen(3000, () => {
    
    console.log('Listening on port 3000')
})
    // listen live in the terminal