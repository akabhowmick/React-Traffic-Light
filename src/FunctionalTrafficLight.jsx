/* eslint-disable react/prop-types */
import { useState } from "react";

export const FunctionalTrafficLight = ({ nextColor }) => {
  const [trafficLight, setTrafficLight] = useState("red");

  const functionalNextStateClick = () => {
    setTrafficLight(nextColor(trafficLight));
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${trafficLight === "red" ? "red" : "black"}`}
        ></div>
        <div
          className={`circle ${trafficLight === "yellow" ? "yellow" : "black"}`}
        ></div>
        <div
          className={`circle ${trafficLight === "green" ? "green" : "black"}`}
        ></div>
      </div>
      <button onClick={functionalNextStateClick} className="next-state-button">
        Next State
      </button>
    </div>
  );
};
