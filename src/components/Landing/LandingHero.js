import React from "react";
import propTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import BookCard from "./BookCard";

const LandingHero = (props) => {
  const history = useHistory();
  const toLibrary = () => {
    history.push("/collection");
  };
  const bookList = useSelector((state) => state.bookList);
  const { books } = bookList;
  return (
    <section className="hero is-medium">
      <div className="hero-head">
        <div className="navbar">
          <div className="navbar-brand is-size-3">
            <Link to="/" className="navbar-item">
              <span className="has-text-weight-bold">R</span>
              <span className="has-text-weight-light">eadr</span>
            </Link>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/profile" className="navbar-item" href="#">
                <i className="fas fa-user-circle fa-lg mr-2" />
                Profile
              </Link>
              <Link to="addbook" className="navbar-item" href="#">
                <i className="fas fa-book-open fa-lg mr-2" />
                Add Book
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-size-1 has-text-black mb-6">Readr</h1>
          <h2 className="subtitle">A new way to read content on the go.</h2>
          <div className="columns is-centered">
            <div className="column is-5">
              {/* <div className="field is-grouped"> */}
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Find something to read"
                  />
                </p>
                <p className="control">
                  <button onClick={toLibrary} className="button is-black">
                    Search
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="title mt-6">Popular</div>
          <div className="columns is-multiline">
            {books.map((book, i) => {
              return <BookCard landing book={book} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

LandingHero.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};

export default LandingHero;
