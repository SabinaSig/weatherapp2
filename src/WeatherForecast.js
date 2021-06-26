
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }


    let apiKey = "572e5efa40a6e4f550d450618c4881bf";
    let longitude = props.coordinates.lon;
    let latitute = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36}/>
            <div className="WeatherForecast-temperature"> 23° </div>
            <span className="WeatherForecast-temperature-max"> 19° </span>
            <span className="WeatherForecast-temperature-min"> 10° </span>
            </div>
        </div>
        </div>
    );
}
