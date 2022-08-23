import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function Shelf({ shelfName, books, updateShelf }) {
  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect(() => {
    const filterBooks = () => {
      const shelfBooks = books.filter((book) => book.shelf === shelfName);
      setShelfBooks(shelfBooks);
    };
    filterBooks();
  }, [books, shelfName]);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book) => {
            return <Book key={book.id} book={book} updateShelf={updateShelf} />;
          })}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  shelfName: PropTypes.string,
  books: PropTypes.array,
  updateShelf: PropTypes.func,
};

export default Shelf;
