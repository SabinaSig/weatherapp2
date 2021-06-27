import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
    <div className = "Weatherinfo">
       <div class="row">
      <div class="col-12" id="city">
        <div id="current">
          <p>
            <span className="date">
              <FormattedDate date={props.data.date} />
            
            <hr></hr>
            </span>
            
            <span>
            <strong className="currentCity"> {props.data.city}  </strong>
            </span>
            <span className="currentTemperature">
            <WeatherTemperature celsius={props.data.temperature}  />
            </span>
          
            <p>
              <span className="text-capitalize"> <strong>{props.data.description}</strong>  </span>
              <br></br>
              <br></br>
            <span>
              {" "}
              <WeatherIcon code={props.data.icon} size={85} />
              {" "}
            </span>
            </p>
            
            <p className="currentState">
              <ul>
                <li id="pressure"> {props.data.precipitation} </li>
                <li id="humidity">
                  {" "}
                   Humidity:{" "} {props.data.humidity} %
                </li>{" "}
                <li id="wind">
                  {" "}
                  Wind: {props.data.wind} m/s
                </li>{" "}
              </ul>
            </p>

          </p>
        </div>
      </div>
    </div>
    </div>
  );
}