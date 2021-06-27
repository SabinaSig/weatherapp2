import react, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
            <WeatherForecastDay data={forecast[0]}/>
            </div>
            </div>
        </div>
        );
    } else {
    let apiKey = "572e5efa40a6e4f550d450618c4881bf";
    let longitude = props.coordinates.lon;
    let latitute = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}
