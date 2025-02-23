import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const city = await e.target.querySelector("span");
    console.log(city.textContent);
    setCity(city.textContent);
  };

  const Header = () => {
    return (
      <header className="header">
        <h1>Weather report</h1>
      </header>
    );
  };

  const Hero = () => {
    return (
      <section className="hero">
        <marquee>
          <p className="weather-morque">
            Weather forecast as of today! Drizzling all around hyderbabad!{" "}
          </p>
        </marquee>
      </section>
    );
  };

  const Main = () => {
    return (
      <section className="main">
        <div className="card" onClick={handleClick}>
          <span className="card-header">Hyderbabad</span>
          <ion-icon
            className="cloud-icon"
            name="cloudy-night-outline"
          ></ion-icon>
          <p>lorem ipsum</p>
          <span className="degree">-8&deg;</span>
        </div>

        <div className="card" onClick={handleClick}>
          <span className="card-header">Bangalore</span>

          <ion-icon className="cloud-icon" name="rainy-outline"></ion-icon>
          <p>lorem ipsum</p>
          <span className="degree">5&deg;</span>
        </div>

        <div className="card" onClick={handleClick}>
          <span className="card-header">Chennai</span>
          <ion-icon
            className="cloud-icon"
            name="cloudy-night-outline"
          ></ion-icon>
          <p>lorem ipsum</p>
          <span className="degree">-2&deg;</span>
        </div>

        <div className="card" onClick={handleClick}>
          <span className="card-header">Kochi</span>
          <ion-icon
            className="cloud-icon"
            name="thunderstorm-outline"
          ></ion-icon>

          <p>lorem ipsum</p>
          <span className="degree">14&deg;</span>
        </div>

        <div className="card" onClick={handleClick}>
          <span className="card-header">Trivandrum</span>
          <ion-icon
            className="cloud-icon"
            name="cloudy-night-outline"
          ></ion-icon>
          <p>lorem ipsum</p>
          <span className="degree">41&deg;</span>
        </div>
      </section>
    );
  };

  const Details = () => {
    return (
      <section>
        <div class="detail-report">
          <h2>Detailed Report - {city}</h2>
          <p>
            Test info test info. Elements as they can create visual
            accessibility issues and are deprecate
          </p>
        </div>
      </section>
    );
  };

  const Footer = () => {
    return (
      <div className="footer">
        <p className="copy">weather-forecast &copy; 2025</p>
      </div>
    );
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
