import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/Landing/BookCard";

const BookList = (props) => {
  const bookList = useSelector((state) => state.bookList);
  const { books } = bookList;
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Books</h1>
        <div className="columns is-multiline">
          {books.map((book, i) => {
            return <BookCard book={book} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default BookList;
