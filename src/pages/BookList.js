import React from "react";
import { useSelector } from "react-redux";

import BookCard from "../components/Landing/BookCard";
import SearchBar from "../components/searchBar";

const BookList = (props) => {
  const bookList = useSelector((state) => state.bookList);
  const { bookSearch } = useSelector((state) => state.bookSearch);

  const { books } = bookList;
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered mb-6">
          <div className="column is-4">
            <SearchBar />
          </div>
        </div>
        <h1 className="title has-text-centered">Books</h1>
        <div className="columns is-multiline">
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(bookSearch.toLowerCase())
            )
            .map((book, i) => {
              return <BookCard book={book} key={i} />;
            })}
        </div>
      </div>
    </section>
  );
};
export default BookList;
