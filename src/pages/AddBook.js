import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import Editor from "../components/editor";

import { saveBook, updateBook } from "../appRedux/action/bookAction";
import { useToggleState } from "../hooks/useToggleState";
import { initialBookState } from "./util.js";

const AddBook = (props) => {
  const id =
    props.location.pathname.length > 9
      ? JSON.parse(props.location.pathname.slice(9))
      : "";
  const [input, setInput] = useState(initialBookState);
  const [bookContent, setBookContent] = useState("");
  const [image, setImage] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [isPdf, setIsPdf] = useToggleState(false);

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookList);

  useEffect(() => {
    if (id) {
      const book = books.filter((book) => book.id === id)[0];
      setInput({
        title: book.title,
        bookContent: book.bookContent,
        description: book.description,
        isbn: book.isbn,
      });
      setImage(book.image);
      setImgFile(book.imgFile);
    }
  }, []);

  const addBookHandler = (e) => {
    e.preventDefault();
    if (!bookContent) {
      toast.info("Please fill the book content");
      return;
    }
    if (id) {
      dispatch(
        updateBook({
          id: id,
          ...input,
          image,
          imgFile,
        })
      );
    } else {
      dispatch(
        saveBook({
          id: uuid(),
          ...input,
          image,
          imgFile,
        })
      );
    }
    toast.success("Book added successfully!");
    setInput(initialBookState);
    setBookContent("");
    setImage("");
    setImgFile(null);
  };
  const setFile = (e) => {
    const name = e.target.name;
    if (name === "image" && e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImgFile(img);
      setImage(URL.createObjectURL(img));
    } else {
      const pdf = e.target.files[0];
      setPdfFile(pdf);
    }
  };
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="hero is-fullheight">
      <ToastContainer autoClose={2000} position="top-center" />
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
                            name="title"
                            className="input"
                            type="text"
                            value={input.title}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="Book Name"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                          <textarea
                            required
                            name="description"
                            className="textarea"
                            rows="2"
                            placeholder="Write Book Description here"
                            value={input.description}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label"> Use PDF</label>
                        <label className="switch">
                          <input
                            onChange={(e) => {
                              setIsPdf(isPdf);
                              setBookContent("");
                              setPdfFile(null);
                            }}
                            type="checkbox"
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      {isPdf ? (
                        <div className="file has-name is-boxed">
                          <label className="file-label">
                            <input
                              className="file-input"
                              required
                              type="file"
                              name="pdfFile"
                              onChange={(e) => setFile(e)}
                            />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fas fa-upload"></i>
                              </span>
                              <span className="file-label">Choose a file…</span>
                            </span>
                            <span className="file-name">
                              {pdfFile ? pdfFile.name : ""}
                            </span>
                          </label>
                        </div>
                      ) : (
                        <div className="field">
                          <label className="label">Book Content</label>
                          <div className="control">
                            <Editor
                              bookContent={bookContent}
                              setBookContent={setBookContent}
                            />
                          </div>
                        </div>
                      )}
                      <div className="field">
                        <label className="label">ISBN</label>
                        <div className="control">
                          <input
                            required
                            className="input"
                            name="isbn"
                            type="text"
                            value={input.isbn}
                            onChange={(e) => handleInputChange(e)}
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
                                onChange={(e) => setFile(e)}
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
                                {imgFile ? imgFile.name : ""}
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
