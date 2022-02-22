import React, { useState } from "react";
import "./App.css";
import Forecast from "./Components/Forecast";
import Header from "./Components/Header";
import SearchField from "./Components/SearchField";
import TodayWeather from "./Components/TodayWeather";

const App = () => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  return (
    <div className="app">
      <Header />
      <SearchField
        weather={weather}
        setWeather={setWeather}
        setForecast={setForecast}
      />
      <TodayWeather weather={weather} />
      {Forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;
