import React from "react";

const BookCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title ">The Book</p>
          <p className="subtitle ">
            This book is all about tour and travel. This book gives idea about
            what one should do and what one should not while travelling to the
            world
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
