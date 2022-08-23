import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";
import Book from "./Book";

function SearchBooks({ allBooks, updateShelf }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [intersections, setIntersections] = useState([]);

  const onChangeHandler = (event) => {
    const text = event.target.value;
    setQuery(text);
  };

  useEffect(() => {
    const getSearchResults = async () => {
      const results = await BooksAPI.search(query, 50);
      if (Array.isArray(results)) {
        setBooks(results);
        var intersectedBooks = allBooks.filter(
          (b) => results.find((e) => e.id === b.id) !== undefined
        );
        setIntersections(intersectedBooks);
      } else {
        setBooks([]);
      }
    };
    if (query !== "") {
      getSearchResults();
    }
  }, [query, allBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        {query && Array.isArray(books) ? (
          <ol className="books-grid">
            {books.map((book) => {
              return intersections.find((b) => b.id === book.id) ? (
                <Book
                  key={book.id}
                  book={intersections.find((b) => b.id === book.id)}
                  updateShelf={updateShelf}
                />
              ) : (
                <Book key={book.id} book={book} updateShelf={updateShelf} />
              );
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}

SearchBooks.propTypes = {
  allBooks: PropTypes.array,
  updateShelf: PropTypes.func,
};

export default SearchBooks;
