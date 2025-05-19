import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar />
    </div>
  );
};

export default App;
