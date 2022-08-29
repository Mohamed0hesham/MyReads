import React, { useState, useEffect } from "react";
import { useBooks } from "../Contexts/BooksContext";
import PropTypes from "prop-types";
import Book from "./Book";

function Shelf({ shelfName }) {
  const [shelfBooks, setShelfBooks] = useState([]);
  const books = useBooks();

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
            return <Book key={book.id} book={book} />;
          })}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  shelfName: PropTypes.string,
};

export default Shelf;
