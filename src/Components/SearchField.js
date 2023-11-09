import React, { useState } from 'react';

const SearchField = ({ setForecast, setWeather, weather }) => {
  const [city, setCity] = useState('');

  const APIKey = 'd414bf256bb4c26e08ae3f1140ae8d97';

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    fetchForecast(city);
    setCity('');
  };

  const fetchWeather = async (city) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${APIKey}`
    );
    const dataJSON = await data.json();
    await setWeather(dataJSON);
  };

  const fetchForecast = async (city) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&lang=en&appid=${APIKey}`
    );
    const dataJSON = await data.json();
    await setForecast(dataJSON);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type city..."
          name="city"
          value={city}
          autoComplete="off"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {weather.cod === '404' && <h1 className="error">City not found!</h1>}
    </div>
  );
};

export default SearchField;
