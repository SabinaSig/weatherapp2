import React, { useState } from "react";
import "./App.js";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";


export default function Weather (props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}d@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  //Search engine: 
  function search(){
    const apiKey = "572e5efa40a6e4f550d450618c4881bf";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange (event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
  return (
    <div id="city-form">
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          id="city-input"
          placeholder="Enter a city"
          autocomplete="off"
          onChange={handleCityChange}
        />
        <input type="submit" class="btn btn-dark" value="Search a city" />
        <button id="current-location-button" type="button" class="btn btn-dark">
          Current location
        </button>
      </form>
      <WeatherInfo data={weatherData} />
    </div>
  );
  } else {
    search();
    return (
    <p>Loading ...</p>
  );
  }
}
