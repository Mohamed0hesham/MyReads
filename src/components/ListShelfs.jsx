import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

function ListShelfs({ shelfs, books, updateShelf }) {
  return shelfs.map((shelf) => {
    return (
      <Shelf
        key={shelf}
        shelfName={shelf}
        books={books}
        updateShelf={updateShelf}
      />
    );
  });
}

ListShelfs.propTypes = {
  shelfs: PropTypes.array,
  books: PropTypes.array,
  updateShelf: PropTypes.func,
};

export default ListShelfs;
