import React, { useState, useEffect } from "react"

import bookService from './services/BookService'

function App() {
  const [books, setbooks] = useState(null)

  useEffect(() => {
    if(!books) {
      getBooks()
    }
  })

  const getBooks = async () => {
    let res = await bookService.getAll()
    setbooks(res)
  }

  const renderBook = book => (  
      <li key={book._id} className="list__item book">
        <h3 className="book__name">{book.author}</h3>
        <h3 className="book__name">{book.title}</h3>
        <p className="book__description">{book.description}</p>
      </li>
    )

  return (
    <div className="App">
      <ul className="list">
        {(books && books.length > 0) ? (
          books.map(book => renderBook(book))
        ) : ( <p>No Books found</p>
        )}
      </ul>
    </div>
  )
}

export default App
