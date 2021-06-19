import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props) {
    return (
    <div className = "Weatherinfo">
       <div class="row">
      <div class="col-12" id="city">
        <div id="current">
          <p>
            <span>
              {" "}
              <img
                id="icon"
                src={props.data.iconUrl}
                alt={props.data.description}
              />{" "}
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
                  <span className="text-capitalize"> {props.data.description} </span>
                </li>
                <li>
                  {" "}
                  <strong> Precipitation (%): (hPa) </strong>{" "}
                </li>{" "}
                <li id="pressure"> {props.data.precipitation} </li>
                <li>
                  {" "}
                  <strong> Humidity (%): </strong>{" "}
                </li>{" "}
                <li id="humidity"> {props.data.humidity} </li>
                <li>
                  {" "}
                  <strong> Wind (m/s): </strong>{" "}
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