import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";

class Search extends Component {
  state = {
    books: [],
  };
  handleSearchBook = (event) => {
    search(event.target.value)
      .then((response) => {
        if (typeof response === "object" && "error" in response) {
          this.setState({ books: [] });
        }
        this.setState({ books: response });
      })
      .catch((err) => console.error(err.message));
  };
  render() {
    const { handleShelfChange } = this.props;
    const {books} = this.state;
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
            {books && books.length >0 && books.map((book) => (
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
  }
}
export default Search;
