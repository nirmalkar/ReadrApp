import React from "react";

import { bookData } from "../../Data";

const BookCard = (props) => {
  console.log(bookData);
  return (
    <div className="columns">
      {bookData.map((book) => {
        return (
          <div key={book.id} className="column is-3 mt-6">
            <div className="card">
              <div className="card-image">
                <figure className="image 5by4">
                  <img
                    src="../../assets/images/alchemist.jpeg"
                    alt={book.title}
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title ">{book.title}</p>
                <p className="subtitle">{book.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;
