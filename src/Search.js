
import "./App.js";

export default function Search() {
  return (
    <div>
    <div>
      <form id="city-form" >
        <input
          type="text"
          id="city-input"
          placeholder="Enter a city"
          autocomplete="off"
        />
        <br />
        <input type="submit" class="btn btn-dark" value="Search a city" />
        <button id="current-location-button" type="button" class="btn btn-dark">
          Current location
        </button>
      </form>
    </div>
    </div>
  );
}
