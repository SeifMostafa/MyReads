import React, { Component } from "react";
import Bookshelf from "../components/BookShelf";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    const { books, booksLoaded, handleShelfChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {!booksLoaded && (
            <div>
              <h1>LOADING ..</h1>
            </div>
          )}
          {booksLoaded && (
            <div>
              <Bookshelf
                title={"Currently Reading"}
                books={books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                handleShelfChange={handleShelfChange}
              />
              <Bookshelf
                title={"Want to Read"}
                books={books.filter((book) => book.shelf === "wantToRead")}
                handleShelfChange={handleShelfChange}
              />
              <Bookshelf
                title={"Read"}
                books={books.filter((book) => book.shelf === "read")}
                handleShelfChange={handleShelfChange}
              />
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Main;
