import './App.css';
import Weather from "./Weather";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> <span className="myName"> Sabina's  </span>   Weather App </h1>
      </header>
    <Weather defaultCity="Berlin" />
    </div>
   
  );
}

export default App;
