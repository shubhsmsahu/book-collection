import React from "react";

const SearchArea = ({ handleBook, handleSearch, handleSort }) => {
  return (
    <div className="search-area">
      <form action="" onSubmit={handleBook}>
        <input type="text" onChange={handleSearch} />
        <button id="searchButton" type="submit">
          Search
        </button>
        <select
          defaultValue="Sort"
          onChange={handleSort}
          style={{ marginLeft: "10px" }}
        >
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
