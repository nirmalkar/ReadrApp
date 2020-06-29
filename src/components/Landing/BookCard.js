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
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Edit
            </a>
            <a href="#" className="card-footer-item">
              Delete
            </a>
          </footer>
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
};

export default BookCard;
