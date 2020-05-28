const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
})

mongoose.model('books', bookSchema)