import logo from './logo.svg';
import './App.css';
import CurrentCity from "./currentCity";
import Forecast from './Forecast';
import Footer from './Footer';
import Date from "./Date";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App </h1>
      </header>
    <Date />
    <CurrentCity />
    <Forecast />
    <Footer />
    </div>
  );
}

export default App;
