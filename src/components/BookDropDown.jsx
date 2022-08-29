import React, { useState, useEffect } from "react";
import { useUpdateShelf } from "../Contexts/BooksContext";
import PropTypes from "prop-types";

function BookDropDown({ book }) {
  const [selection, setSelection] = useState("none");
  const updateShelf = useUpdateShelf();

  const onSelectHandler = (event) => {
    const selectedValue = event.target.value;
    setSelection(selectedValue);
    changeShelf(book, selectedValue);
  };

  const changeShelf = (book, selection) => {
    updateShelf(book, selection);
  };

  useEffect(() => {
    setSelection(book.shelf);
  }, [book]);

  const hasShelf = () => book.shelf && book.shelf !== "none";

  return (
    <div className="book-shelf-changer">
      <select onChange={onSelectHandler} value={selection}>
        <option value="none" disabled>
          {hasShelf() ? "Move to..." : "Add to..."}
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {hasShelf() && <option value="none">None</option>}
      </select>
    </div>
  );
}

BookDropDown.propTypes = {
  book: PropTypes.object,
};

export default BookDropDown;
