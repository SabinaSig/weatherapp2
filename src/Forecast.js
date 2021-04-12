import React from "react";
import "./App.js";

export default function Forecast() {
  return (
    <div>
      <h3> </h3>
      <div id="forecast"> </div>

      <form id="city-form">
        <input
          type="text"
          id="city-input"
          placeholder="Enter a city"
          autocomplete="off"
        />
        <input type="submit" class="btn btn-dark" value="Search a city" />
        <button id="current-location-button" type="button" class="btn btn-dark">
          Current location
        </button>
      </form>
    </div>
  );
}
