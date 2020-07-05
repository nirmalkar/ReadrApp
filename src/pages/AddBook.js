import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import propTypes from "prop-types";

import { saveBook, updateBook } from "../appRedux/action/bookAction";
const AddBook = (props) => {
  const id =
    props.location.pathname.length > 9
      ? JSON.parse(props.location.pathname.slice(9))
      : "";
  const [title, setTitle] = useState("");
  const [bookContent, setBookContent] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookList);

  useEffect(() => {
    if (id) {
      const book = books.filter((book) => book.id === id)[0];
      setTitle(book.title);
      setBookContent(book.bookContent);
      setDescription(book.description);
      setIsbn(book.isbn);
      setImage(book.image);
      setFile(book.file);
    }
  }, []);

  const addBookHandler = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(
        updateBook({
          id: id,
          title,
          bookContent,
          description,
          isbn,
          image,
          file,
        })
      );
    } else {
      dispatch(
        saveBook({
          id: uuid(),
          title,
          bookContent,
          description,
          isbn,
          image,
          file,
        })
      );
    }
    toast.success("Book added successfully!");
    setTitle("");
    setBookContent("");
    setDescription("");
    setIsbn("");
    setImage("");
    setFile(null);
  };
  const imageSet = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setFile(img);
      setImage(URL.createObjectURL(img));
    }
  };
  return (
    <section className="hero is-fullheight">
      <ToastContainer />
      <div className="hero-head">
        <div className="buttons mt-2 mr-2 is-right">
          <button
            onClick={() => props.history.push("/")}
            className="button is-primary is-light"
          >
            Home
          </button>
          <button
            onClick={() => props.history.push("/books")}
            className="button is-primary is-light"
          >
            See Book List
          </button>
        </div>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8 ">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <form onSubmit={addBookHandler}>
                      <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                          <input
                            required
                            name="name"
                            className="input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Book Name"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                          <textarea
                            required
                            className="textarea"
                            rows="2"
                            placeholder="Write Book Description here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Book Content</label>
                        <div className="control">
                          <textarea
                            required
                            rows="6"
                            className="textarea"
                            placeholder="Write Book Description here"
                            value={bookContent}
                            onChange={(e) => setBookContent(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">ISBN</label>
                        <div className="control">
                          <input
                            required
                            className="input"
                            type="text"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}
                            placeholder="Book ISBN"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Upload Image</label>
                        <div className="control">
                          <div className="file is-boxed">
                            <label className="file-label">
                              <input
                                className="file-input"
                                required
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => imageSet(e)}
                              />
                              <img
                                className="mb-2"
                                style={{
                                  borderRadius: "5px",
                                  maxHeight: "10rem",
                                }}
                                src={image}
                                alt={image ? "book-title" : ""}
                              />
                              <span className="file-cta">
                                <span className="file-icon">
                                  <i className="fas fa-upload" />
                                </span>
                                <span className="file-label">
                                  Choose a image file…
                                </span>
                              </span>
                              <span className="file-name">
                                {file ? file.name : ""}
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="button is-dark is-fullwidth mt-5"
                      >
                        Add book
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AddBook.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }),
};

export default AddBook;
