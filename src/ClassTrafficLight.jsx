/* eslint-disable react/prop-types */
import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    trafficLight: "red",
  };
  render() {
    const classNextStateClick = () => {
      const newLightColor = this.props.nextColor(this.state.trafficLight);
      this.setState({ trafficLight: newLightColor });
    };
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              this.state.trafficLight === "red" ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.trafficLight === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.trafficLight === "green" ? "green" : "black"
            }`}
          ></div>
        </div>
        <button onClick={classNextStateClick} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
