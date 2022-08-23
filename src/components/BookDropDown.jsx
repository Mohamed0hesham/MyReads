import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function BookDropDown({ book, updateShelf }) {
  const [selection, setSelection] = useState("none");
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
        {hasShelf() ? <option value="none">None</option> : null}
      </select>
    </div>
  );
}

BookDropDown.propTypes = {
  book: PropTypes.object,
  updateShelf: PropTypes.func,
};

export default BookDropDown;
