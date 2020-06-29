import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <div className="column is-3">
      {props.book ? (
        <div className="card mt-6">
          <Link to={`/book/${props.book.id}`}>
            <div className="card-image">
              <figure className="image 5by4">
                <img src={props.book.image} alt={props.book.title} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title ">{props.book.title}</p>
              <p className="subtitle">{props.book.description}</p>
            </div>
          </Link>
          {props.landing ? (
            ""
          ) : (
            <footer className="card-footer">
              <button href="#" className="card-footer-item button">
                <span className="icon">
                  <i className="fas fa-pencil-alt"></i>
                </span>
                <span>Edit</span>
              </button>
              <button href="#" className="card-footer-item button">
                <span className="icon">
                  <i className="fas fa-trash"></i>
                </span>
                <span>Delete</span>
              </button>
            </footer>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

BookCard.propTypes = {
  book: propTypes.shape({
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }),
  landing: propTypes.bool.isRequired,
};

export default BookCard;
