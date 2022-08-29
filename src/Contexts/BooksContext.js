import React, { useContext, useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";

export function useBooks() {
  return useContext(BooksContext);
}

export function useUpdateShelf() {
  return useContext(UpdateShelfContext);
}

const BooksContext = React.createContext();
const UpdateShelfContext = React.createContext();

export function BooksProvider({ children }) {
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
    <BooksContext.Provider value={books}>
      <UpdateShelfContext.Provider value={updateShelf}>
        {children}
      </UpdateShelfContext.Provider>
    </BooksContext.Provider>
  );
}
