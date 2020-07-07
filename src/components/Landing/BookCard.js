import React from "react";
import propTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteBook } from "../../appRedux/action/bookAction";

const BookCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  const editBook = (id) => {
    history.push(`/addbook/${props.book.id}`);
  };
  return (
    <div className="column is-3">
      {props.book && (
        <div className="card mt-6">
          <div className="card-image">
            <figure className="image is-square">
              <img src={props.book.image} alt={props.book.title} />
            </figure>
          </div>
          <div className="card-content">
            <Link to={`/book/${props.book.id}`}>
              <div
                className="is-size-4 has-text-dark ellipsis is-ellipsis-1"
                alt={props.book.title}
              >
                {props.book.title}
              </div>
              <div style={{ height: "70px" }}>
                <div className=" subtitle  ellipsis is-ellipsis-3">
                  {props.book.description}
                </div>
              </div>
            </Link>
          </div>
          {!props.landing && (
            <div className="card-footer">
              <div
                className="card-footer-item"
                onClick={() => editBook(props.book.id)}
              >
                <span className="icon">
                  <i className="fas fa-pencil-alt"></i>
                </span>
                <span>Edit</span>
              </div>
              <div
                className="card-footer-item"
                onClick={() => handleDeleteBook(props.book.id)}
              >
                <span className="icon">
                  <i className="fas fa-trash"></i>
                </span>
                <span>Delete</span>
              </div>
            </div>
          )}
        </div>
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
