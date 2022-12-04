import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import axios from "axios";
import Layout from "./Layout";
import WeatherApp from "./components/WeatherApp";
function App() {
  return (
    <main className="maindiv">
      <WeatherApp />
    </main>
  );
}

export default App;
