import React from "react";
// import * as BooksAPI from './BooksAPI'
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { getAll, update } from "./BooksAPI";
import Main from "./pages/Main";
import Search from "./pages/Search";
class BooksApp extends React.Component {
  state = {
    books: [],
    booksLoaded: false,
  };
  async componentDidMount() {
    const books = await getAll();
    this.setState({ books, booksLoaded: true });
  }
  handleShelfChange = (book, shelf) => {
    update(book, shelf).catch((err) => console.error(err.message));
    book.shelf = shelf;
    const { books } = this.state;
    this.setState({
      books: [...books.filter((b) => book.id !== b.id), book],
    });
  };

  render() {
    const { books, booksLoaded } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Main
              books={books}
              booksLoaded={booksLoaded}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          exact
          path="/home"
          render={(props) => (
            <Main
              books={books}
              booksLoaded={booksLoaded}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={(props) => (
            <Search
              handleShelfChange={this.handleShelfChange}
              booksFromLib={books}
            />
          )}
        />
      </Switch>
    );
  }
}

export default BooksApp;
