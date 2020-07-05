import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { searchBook } from "../../appRedux/action/searchAction";
import { useInputState } from "../../hooks/useInputState";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bookSearch } = useSelector((state) => state.bookSearch);
  const [search, setSearch] = useInputState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchBook(search));
    history.push("/books");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="field has-addons">
        <p className="control is-expanded">
          <input
            defaultValue={bookSearch}
            className="input"
            type="text"
            placeholder="Find something to read"
            onChange={(e) => setSearch(e.target.value)}
          />
        </p>
        <p className="control">
          <button type="submit" className="button is-black">
            Search
          </button>
        </p>
      </div>
    </form>
  );
};

export default SearchBar;
