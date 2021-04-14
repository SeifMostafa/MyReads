import React from "react";
import Book from "./Book";

const Bookshelf = ({ title, books, handleShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book) => (
              <Book
                key={book.id}
                BookInfo={book}
                handleShelfChange={handleShelfChange}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};
export default Bookshelf;
