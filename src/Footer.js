import "./App";


export default function Footer() {
  return (
    <div>
      <p className="buildPage">
        <span>
          This page was built by </span>
        <a className="footer"
          href="https://www.linkedin.com/in/sabina-sigmundov%C3%A1-431324194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sabina SigmundovĂˇ
        </a>  ; {""}
        <a className="footer" href="https://github.com/SabinaSig/weatherapp2" target="_blank" rel="noopener noreferrer">
          Open-source code
        </a>
      </p>
    </div>
  );
}
