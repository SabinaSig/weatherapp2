import logo from './logo.svg';
import './App.css';
import CurrentCity from "./currentCity";
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App </h1>
      </header>
    <CurrentCity />
    <Forecast />
    </div>
  );
}

export default App;
