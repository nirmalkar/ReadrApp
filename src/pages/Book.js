import React from "react";
import propTypes from "prop-types";
import { useSelector } from "react-redux";
const Book = (props) => {
  const id = JSON.parse(props.match.params.id);
  const bookList = useSelector((state) => state.bookList);
  const { books } = bookList;
  const book = books.filter((book) => book.id === id)[0];
  return (
    <section>
      <div className="columns is-centered">
        <div className="column is-12-mobile is-6-desktop">
          <div className="card">
            <figure className="image has-text-center is-4by5">
              <img className="" src={book.image} alt="" />
            </figure>
            <div className="card-content">
              <div className="container has-text-centered">
                <div
                  className="container pb-5"
                  style={{
                    minHeight: "50rem",
                    borderBottom: "1.5px solid black",
                  }}
                >
                  <h3 className="is-size-3 mb-5">Preface</h3>
                  <h5 className="is-size-5 has-text-left">{book.preface}</h5>
                </div>
                <div className="container mt-5">
                  <h1 className="is-size-1 mb-5 has-text-centered">
                    {book.title}
                  </h1>
                  <p className="has-text-left">{book.bookContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Book.propTypes = {
  match: propTypes.shape({
    params: propTypes.func.isRequired,
  }),
  history: propTypes.shape({
    push: propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  }),
};
export default Book;
