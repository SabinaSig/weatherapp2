import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
    <div className = "Weatherinfo">
      <div id="city">
          <p>
            <span className="date">
              <FormattedDate date={props.data.date} />
        
            <hr></hr>
            </span>
          
           </p>
           </div>
           <div id="current">
            <div className="row">
            <div className="col-6">
            <span>
            <strong className="currentCity"> {props.data.city}  </strong>
            </span>
            <span className="currentTemperature">
            <WeatherTemperature celsius={props.data.temperature}  />
            </span>
            </div>
            
            <div className="col-6">
            <p>
              <span className="text-capitalize"> <strong>{props.data.description}</strong>  </span>
              <br></br>
              <br></br>
            <span className="Weathericon">
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
      </div>
      </div>
      </div>
      </div>
      
  );
}