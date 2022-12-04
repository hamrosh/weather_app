import React from "react";

function Search({ city, setCity, showWeather }) {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button className="button-3" onClick={showWeather}>
        Show Weather
      </button>
    </div>
  );
}

export default Search;
