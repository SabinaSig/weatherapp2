
import "./App.js";

export default function CurrentCity() {
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
}
