import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zürich" />
        <footer>
          This project was coded by <strong>Eugenia Brunetti Ehnimb</strong> and
          is{" "}
          <a href="https://github.com/eugesuri/weather-project-week6">
            open-sourced on GitHub 🌸
          </a>
        </footer>
      </div>
    </div>
  );
}
