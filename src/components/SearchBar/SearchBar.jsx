import React, { useState } from "react";

function SearchBar() {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    } else {
      alert("Please enter a city name");
    }
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          onChange={handleChange}
          value={city}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
