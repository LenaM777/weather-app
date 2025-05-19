import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchWeatherData } from "./services/weatherService";
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading}
      {error}
      <WeatherDisplay />
    </div>
  );
};

export default App;
