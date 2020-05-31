const mongoose = require('mongoose')
const Book = mongoose.model('books')

module.exports = (app) => {

  app.get(`/api/book`, async (req, res) => {
    let books = await Book.find()
    console.log("books are: ",books)
    return res.status(200).send(books)
  })

  app.post(`/api/book`, async (req, res) => {
    let book = await Book.create(req.body)
    return res.status(201).send({
      error: false,
      book
    })
  })

  app.put(`/api/book/:id`, async (req, res) => {
    const {id} = req.params

    let book = await Book.findByIdAndUpdate(id, req.body)

    return res.status(202).send({
      error: false,
      book
    })

  })

  app.delete(`/api/book/:id`, async (req, res) => {
    const {id} = req.params

    let book = await Book.findByIdAndDelete(id)

    return res.status(202).send({
      error: false,
      book
    })

  })

}