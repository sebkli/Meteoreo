import React from "react";

const ForecastDay = ({ forecast }) => {
  const iconURL = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

  const getDate = (day) => {
    day = forecast.dt_txt.slice(5, 10);
    day = day.replace("-", ":");
    return day;
  };

  return (
    <div className="forecastItem">
      <p>{getDate()}</p>
      <img src={iconURL} alt="Icon" />
      <p>{forecast.main.temp.toFixed()} °C</p>
    </div>
  );
};

export default ForecastDay;
