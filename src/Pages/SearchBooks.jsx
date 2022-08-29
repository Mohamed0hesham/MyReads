import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBooks } from "../Contexts/BooksContext";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "../components/Book";

function SearchBooks() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const allBooks = useBooks();

  const onChangeHandler = (event) => {
    const text = event.target.value;
    setQuery(text);
  };

  useEffect(() => {
    let mounted = true;
    const getSearchResults = async () => {
      const results = await BooksAPI.search(query, 50);

      if (Array.isArray(results)) {
        //a new array to hold the results after replacing some books
        //if found in the books that are on a shelf
        let filteredResults = [];

        //finding the books that I have from the gettAll() func that
        //matched in the search results
        results.forEach((book) => {
          const findResult = allBooks.find((b) => b.id === book.id);
          findResult
            ? filteredResults.push(findResult)
            : filteredResults.push(book);
        });

        setBooks(filteredResults);
      } else {
        setBooks([]);
      }
    };
    if (query !== "" && mounted) {
      getSearchResults();
    }
    return () => {
      mounted = false;
    };
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
              return <Book key={book.id} book={book} />;
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBooks;
