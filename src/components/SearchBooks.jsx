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
        //setting books state to the search results
        setBooks(results);
        //finding the books that I have from the gettAll() func that matched in the search results
        let intersectedBooks = allBooks.filter(
          (b) => results.find((r) => r.id === b.id) !== undefined
        );
        //setting the intersectedBooks to the matched books
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
            {
              //sending the matched book from allBooks prop instead of the book from the search result
              //so it can have the shelf attribute. because the books coming from the search doesn't have
              //a shelf attribute
              books.map((book) => {
                return intersections.find((b) => b.id === book.id) ? (
                  <Book
                    key={book.id}
                    book={intersections.find((b) => b.id === book.id)}
                    updateShelf={updateShelf}
                  />
                ) : (
                  <Book key={book.id} book={book} updateShelf={updateShelf} />
                );
              })
            }
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
