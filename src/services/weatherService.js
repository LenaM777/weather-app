const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;


export const fetchWeatherData = async (city) => {
  if (!API_KEY) {
    throw new Error("API key is missing. Make sure VITE_OPENWEATHERMAP_API_KEY is set in your .env.local file.");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText })); 
      throw new Error(`Error ${response.status}: ${errorData.message || 'Failed to fetch data'}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};