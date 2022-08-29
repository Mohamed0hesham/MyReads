import React from "react";
import PropTypes from "prop-types";
import BookDropDown from "./BookDropDown";

function Book({ book }) {
  const { title, authors, imageLinks } = book;
  let imgThumbnail = "";
  imageLinks ? (imgThumbnail = imageLinks.thumbnail) : (imgThumbnail = "");

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imgThumbnail})`,
            }}
          ></div>
          <BookDropDown book={book} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {typeof authors === "undefined"
            ? "N/a"
            : authors.map((author) => `${author}`)}
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
