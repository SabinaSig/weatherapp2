import './App.css';
import CurrentCity from "./currentCity";
import Footer from './Footer';
import Date from "./Date";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App </h1>
      </header>
    <Date />
    <Search />
    <CurrentCity />
    <Footer />
    </div>
  );
}

export default App;
