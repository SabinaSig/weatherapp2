import './App.css';
import Weather from "./Weather";
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App </h1>
      </header>
    <Weather defaultCity="Berlin" />

    <Footer />
    </div>
   
  );
}

export default App;
