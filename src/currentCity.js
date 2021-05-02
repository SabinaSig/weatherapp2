import React, { useState } from "react";
import "./App.js";
import axios from "axios";

export default function CurrentCity() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = usestate(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
  return (
    <div class="row">
      <div class="col-12" id="city">
        <div id="current">
          <p>
            <span>
              {" "}
              <img
                id="icon"
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear"
              />{" "}
            </span>
            <br />
            <strong> Copenhagen </strong>

            <p>
              <strong id="currentTemperature"> 25 </strong>
              <span id="degree"> °C </span>
            </p>

            <p className="currentState">
              <ul>
                <li>
                  {" "}
                  <strong> Pressure: (hPa) </strong>{" "}
                </li>{" "}
                <li id="pressure"> 1023 </li>
                <li>
                  {" "}
                  <strong> Humidity (%): </strong>{" "}
                </li>{" "}
                <li id="humidity"> 84 </li>
                <li>
                  {" "}
                  <strong> Wind (m/s): </strong>{" "}
                </li>{" "}
                <li id="wind"> 35 </li>
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
    let city = "London";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  return (
    <p>Loading ...</p>
  );
  }
}
