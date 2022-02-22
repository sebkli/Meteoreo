import React from "react";

const TodayWeather = ({ weather }) => {
  let iconURL = ``;
  let lastUpdate = "";
  if (weather.weather) {
    iconURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    const date = Date(weather.dt);
    lastUpdate = date.slice(15, 21);
  }

  if (!weather.name) {
    return (
      <div>
        <h1 className="NoWeather">Enter location</h1>
      </div>
    );
  }
  return (
    <>
      <div className="weather">
        <div className="main">
          <h1 className="city">
            {weather.name}, {weather.sys.country}
          </h1>
          <h2 className="temp">{weather.main.temp.toFixed()}°C</h2>
          <h1 className="discription">{weather.weather[0].main}</h1>
          <img className="icon" src={iconURL} alt="Icon" />
        </div>
        <div className="details">
          <p className="detailsItem">
            Max: {weather.main.temp_max.toFixed()}°C/ Min:{" "}
            {weather.main.temp_min.toFixed()}
            °C
          </p>
          <p className="detailsItem">Humidity: {weather.main.humidity}%</p>
          <p className="detailsItem">
            Feels like: {weather.main.feels_like.toFixed()}°C
          </p>
          <p className="detailsItem">Wind speed: {weather.wind.speed} m/s </p>
        </div>
      </div>
      <p className="update">Last update{lastUpdate}</p>
    </>
  );
};

export default TodayWeather;
