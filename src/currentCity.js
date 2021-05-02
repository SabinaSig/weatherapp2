import React, { useState } from "react";
import "./App.js";
import axios from "axios";

export default function CurrentCity(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Monday 8:00",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });

  
  }

  if (weatherData.ready) {
  return (
    <div class="row">
      <div class="col-12" id="city">
        <div id="current">
          <p>
            <span>
              {" "}
              <img
                id="icon"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />{" "}
            </span>
            <br />
            <span> {weatherData.date} </span>
            <br />
            <strong> {weatherData.city}  </strong>

            <p>
              <span><strong className="temperature"> {Math.round(weatherData.temperature)} </strong> </span>
              <span id="degree"> °C </span>
            </p>

            <p className="currentState">
              <ul>
                <li>
                  <span className="text-capitalize"> {weatherData.description} </span>
                </li>
                <li>
                  {" "}
                  <strong> Precipitation (%): (hPa) </strong>{" "}
                </li>{" "}
                <li id="pressure"> {weatherData.precipitation} </li>
                <li>
                  {" "}
                  <strong> Humidity (%): </strong>{" "}
                </li>{" "}
                <li id="humidity"> {weatherData.humidity} </li>
                <li>
                  {" "}
                  <strong> Wind (m/s): </strong>{" "}
                </li>{" "}
                <li id="wind"> {weatherData.wind} </li>
              </ul>
            </p>

            <p id="change">
              {" "}
              Change to
              <button id="farenheit"> °F </button> |
              <button id="celsius"> °C </button>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey = "572e5efa40a6e4f550d450618c4881bf";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  return (
    <p>Loading ...</p>
  );
  }
}
