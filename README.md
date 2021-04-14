# MyReads Project

To get Books from reactnd-books-api.udacity.com & build local library.

library contains 3 shelves: Currently Reading, Want to Read, Read

## TL;DR
To get started:
* install all project dependencies with `npm install` or `npm i`
* start server with `npm start`

## Backend Server

file [`BooksAPI.js`](src/BooksAPI.js) contains methods:

* [`getAll`](#getall) : to get all books from backend
* [`update`](#update) : to update book shelf 
* [`search`](#search) : to search for book using keyword,author or title.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Pages:
* [`Main`](#Main.js) : to view library with 3 shelves.
* [`Search`](#Search.js) : to search for a book, could add books to library

## Components:
* [`Book`](#Book.js) : hold all details about book { title, authors, imageLinks, shelf }
* [`BookShelf`](#BookShelf.js) : to hold all details about shelf, parent component for Book component, { title, books, handleShelfChange }
