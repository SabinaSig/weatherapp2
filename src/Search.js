import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function SearchForm() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function displayCityData(response) {
    console.log(response);
    setTemperature(`TEMPERATURE: ${Math.round(response.data.main.temp)} ºC`);
    setDescription(`DESCRIPTION: ${response.data.weather[0].description}`);
    setHumidity(`HUMIDITY: ${response.data.main.humidity}%`);
    setWind(`WIND: ${Math.round(response.data.wind.speed)} km/h`);

    if (
      response.data.weather[0].icon === "01d" ||
      response.data.weather[0].icon === "01n"
    ) {
      setIcon(
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#E52E0E"
          size={60}
          animate={true}
        />
      );
    }
    if (
      response.data.weather[0].icon === "02d" ||
      response.data.weather[0].icon === "02n" ||
      response.data.weather[0].icon === "04d" ||
      response.data.weather[0].icon === "04n"
    ) {
      setIcon(
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="#E66551"
          size={60}
          animate={true}
        />
      );
    }
    if (
      response.data.weather[0].icon === "03d" ||
      response.data.weather[0].icon === "03n"
    ) {
      setIcon(
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#1E99E1"
          size={60}
          animate={true}
        />
      );
    }
    if (
      response.data.weather[0].icon === "09d" ||
      response.data.weather[0].icon === "09n" ||
      response.data.weather[0].icon === "10d" ||
      response.data.weather[0].icon === "10n" ||
      response.data.weather[0].icon === "11d" ||
      response.data.weather[0].icon === "11n"
    ) {
      setIcon(
        <ReactAnimatedWeather
          icon="RAIN"
          color="#1A252D"
          size={60}
          animate={true}
        />
      );
    }
    if (
      response.data.weather[0].icon === "13d" ||
      response.data.weather[0].icon === "13n"
    ) {
      setIcon(
        <ReactAnimatedWeather
          icon="SNOW"
          color="#FAFAFA"
          size={60}
          animate={true}
        />
      );
    }
    if (
      response.data.weather[0].icon === "50d" ||
      response.data.weather[0].icon === "50n"
    ) {
      setIcon(
        <ReactAnimatedWeather
          icon="FOG"
          color="#161616"
          size={60}
          animate={true}
        />
      );
    }
  }

  function callAxios(event) {
    event.preventDefault();
    let apiKey = "572e5efa40a6e4f550d450618c4881bf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayCityData);
  }

  function updateCityInfo(event) {
    setCity(event.target.value);
  }

  return (
    <div className="seach-form">
      <form onSubmit={callAxios}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCityInfo}
        />
        <input type="submit" className="btn btn-dark" value="Submit" />
      </form>
      <ul>
        <li>
          {" "}
          <strong> {temperature} </strong>{" "}
        </li>
        <li>{description}</li>
        <li>{humidity}</li>
        <li>{wind}</li>
        <br />
        <li>{icon}</li>
      </ul>
    </div>
  );
}
