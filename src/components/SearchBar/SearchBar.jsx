import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Enter city name" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
