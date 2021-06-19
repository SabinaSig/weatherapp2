import './App.css';
import Weather from "./Weather";
import Footer from './Footer';
import Forecast from "./Forecast";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App </h1>
      </header>
    <Weather defaultCity="Berlin" />
    <Forecast />
    <Footer />
    </div>
   
  );
}

export default App;
