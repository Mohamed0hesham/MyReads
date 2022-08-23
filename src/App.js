import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [updated, setUpdated] = useState(false);

  const getShelfBooks = async () => {
    const allBooks = await BooksAPI.getAll();
    setBooks(allBooks);
  };

  const updateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setUpdated(!updated);
  };

  useEffect(() => {
    getShelfBooks();
  }, [updated]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home books={books} updateShelf={updateShelf} />}
        />
        <Route
          exact
          path="/search"
          element={<SearchBooks allBooks={books} updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
