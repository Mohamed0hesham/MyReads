import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import ListShelfs from "./ListShelfs";
import AddBookButton from "./AddBookButton";

function Home({ books, updateShelf }) {
  const shelfs = ["currentlyReading", "wantToRead", "read"];
  return (
    <div className="list-books">
      <Header />
      <ListShelfs shelfs={shelfs} books={books} updateShelf={updateShelf} />
      <AddBookButton />
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
};

export default Home;
