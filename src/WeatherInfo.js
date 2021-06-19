import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo (props) {
    return (
    <div className = "Weatherinfo">
       <div class="row">
      <div class="col-12" id="city">
        <div id="current">
          <p>
            <span>
              {" "}
              <WeatherIcon code={props.data.icon} />
              {" "}
            </span>
            <br />
            <span>
              <FormattedDate date={props.data.date} />
            </span>
            <br />
            <strong> {props.data.city}  </strong>
            <p>
              <span><strong className="temperature"> {Math.round(props.data.temperature)} </strong> </span>
              <span id="degree"> °C </span>
            </p>

            <p className="currentState">
              <ul>
                <li>
                  <span className="text-capitalize"> <strong>{props.data.description}</strong>  </span>
                </li>
                <li id="pressure"> {props.data.precipitation} </li>
                <li>
                  {" "}
                   Humidity (%):{" "}
                </li>{" "}
                <li id="humidity"> {props.data.humidity} </li>
                <li>
                  {" "}
                  Wind (m/s):{" "}
                </li>{" "}
                <li id="wind"> {props.data.wind} </li>
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
    </div>
  );
}