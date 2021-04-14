import React from "react";

const Book = ({ BookInfo, handleShelfChange }) => {
  const { title, authors, imageLinks, shelf } = BookInfo;
  const coverBook =
    imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : "";
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${coverBook})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={(event) => {
              handleShelfChange(BookInfo, event.target.value);
            }}
            value={shelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option selected="selected" value="none">
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(" , ")}</div>
    </div>
  );
};
export default Book;
