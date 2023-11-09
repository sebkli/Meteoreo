import React from 'react';
import ForecastDay from './ForecastDay';

const Forecast = ({ forecast }) => {
  let fiveDayForecast = [];
  if (forecast.list) {
    fiveDayForecast = forecast.list.filter((item) => {
      return item.dt_txt[12] === '2';
    });
  }

  if (!fiveDayForecast) {
    return <div></div>;
  }

  return (
    <div className="forecastContainer">
      {fiveDayForecast.map((data, index) => (
        <ForecastDay key={index} forecast={data} />
      ))}
    </div>
  );
};

export default Forecast;
