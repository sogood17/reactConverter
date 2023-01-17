import React, { useState } from "react";
import "./styles.css";
import Hours from "./Hours.js";
import Kilometer from "./Kilometer.js";

export default function App() {
  const [inverter, setInverter] = useState(null);

  function invert(event) {
    setInverter(event.target.value);
  }
  return (
    <div className="App">
      <h1>Hello! This is converter!</h1>
      <h2>select to start!</h2>
      <select onChange={invert} value={inverter} className="bigger">
        <option value="1">Minutes to Hours</option>
        <option value="2">Meters to Kilometers</option>
      </select>
      <div className="space"></div>
      <hr />
      <div className="space"></div>
      {inverter === "1" ? <Hours /> : null}
      {inverter === "2" ? <Kilometer /> : null}
    </div>
  );
}
