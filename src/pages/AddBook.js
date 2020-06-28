import React from "react";

const AddBook = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5 ">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <div className="form" onSubmit={submitHandler}>
                      <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                          <input
                            required
                            className="input"
                            type="text"
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
                            placeholder="Write Book Description here"
                          ></textarea>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">ISBN</label>
                        <div className="control">
                          <input
                            required
                            className="input"
                            type="text"
                            placeholder="Book ISBN"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Select Book</label>
                        <div className="control">
                          <div className="file is-boxed">
                            <label className="file-label">
                              <input
                                className="file-input"
                                type="file"
                                name="resume"
                              />
                              <span className="file-cta">
                                <span className="file-icon">
                                  <i className="fas fa-upload" />
                                </span>
                                <span className="file-label">
                                  Choose a file…
                                </span>
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
                    </div>
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

export default AddBook;
