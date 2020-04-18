import React from 'react';
// import "~bootstrap/scss/bootstrap";
import Header from '../components/Header/header';
import WeatherView from '../components/Content/WeatherAppList/weather-container';

function Weather() {
  return (
    <div className="weather">     
      <Header/>
      <WeatherView/>
    </div>
  );
}

export default Weather;
