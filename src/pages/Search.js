import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";

class Search extends Component {
  state = {
    books: [],
  };
  handleSearchBook = async (event) => {
    await search(event.target.value)
      .then((response) => {
        if (typeof response === "object" && "error" in response) {
          this.setState({ books: [] });
        }
        this.setState({
          books: response,
        });
      })
      .catch((err) => console.error(err.message));
  };
  render() {
    const { handleShelfChange } = this.props;
    const { books } = this.state;
    const { booksFromLib } = this.props;
    var FinalArray = [];
    if (books && books.length) {
      for (var i = 0; i < books.length; i++) {
        var changed = false;
        for (var j = 0; j < booksFromLib.length; j++) {
          if (books[i].id === booksFromLib[j].id) {
            FinalArray.push(booksFromLib[j]);
            changed = true;
            break;
          }
        }
        if (!changed) {
          const updatedBook = books[i];
          updatedBook.shelf = "none";
          FinalArray.push(updatedBook);
        }
      }
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {FinalArray &&
              FinalArray.length > 0 &&
              FinalArray.map((book) => (
                <Book
                  key={book.id}
                  BookInfo={book}
                  handleShelfChange={handleShelfChange}
                  shelf={book.shelf}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
