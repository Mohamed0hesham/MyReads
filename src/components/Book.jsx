import React from "react";
import PropTypes from "prop-types";
import BookDropDown from "./BookDropDown";

function Book({ book, updateShelf }) {
  const { id, title, authors, shelf } = book;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`,
            }}
          ></div>
          <BookDropDown
            bookShelf={shelf}
            book={book}
            updateShelf={updateShelf}
          />
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
  updateShelf: PropTypes.func,
};

export default Book;
