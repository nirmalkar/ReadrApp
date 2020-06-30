import React from "react";

const SearchBar = () => {
  return (
    <div className="field has-addons">
      <p className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Find something to read"
        />
      </p>
      <p className="control">
        <button className="button is-black">Search</button>
      </p>
    </div>
  );
};

export default SearchBar;
