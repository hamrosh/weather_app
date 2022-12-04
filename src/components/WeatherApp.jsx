import React from "react";
import { useState } from "react";
import Icon from "./Icon";
import Info from "./Info";
import Search from "./Search";
import axios from "axios";
function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const showWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0125e5b9899727e33f8844f4ad287128`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setWeatherData(response.data);
        setToggle(!toggle);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <article className="box">
      <div className="title">
        <h2>Weather in your City</h2>
      </div>
      <div className="search">
        <Search city={city} setCity={setCity} showWeather={showWeather} />
      </div>

      <section className="weatherinfo">
        <section>
          <Icon
            climate={weatherData != null ? weatherData.weather[0].main : ""}
            icon={weatherData != null ? weatherData.weather[0].icon : ""}
            toggle={toggle}
          />
        </section>
        <section>
          <Info
            data={weatherData != null ? weatherData : null}
            toggle={toggle}
          />
        </section>
      </section>
      <div class="final">
        {weatherData != null && (
          <h4>
            Feels like {weatherData.main.feels_like},
            {weatherData.weather[0].description}
          </h4>
        )}
      </div>
    </article>
  );
}

export default WeatherApp;
