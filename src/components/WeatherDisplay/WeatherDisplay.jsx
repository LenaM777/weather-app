import React from "react";

const WeatherDisplay = () => {
  return (
    <div className="weather-display">
      <h2>City</h2>
      <p>Temperature: °C</p>
      <p>Feels like: °C</p>
      <p>Humidity: %</p>
      <p>Wind Sped: km/h</p>
    </div>
  );
};

export default WeatherDisplay;
