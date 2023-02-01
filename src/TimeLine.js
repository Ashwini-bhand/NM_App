import React, { Component } from "react";
import Helper from "./Helper.js";

class TimeLine extends Component {
  render() {
    const hours = new Array(24).fill(null).map((item, index) => index);
    const width = 60 * Helper.Scale();
    const cellStyles = { width };
    const hoursElements = hours.map((item) => {
      return (
        <div className="timeLine" style={cellStyles} key={item}>
          {item}:00
        </div>
      );
    });

    return (
      <div>
        <div className="timeWrapper">{hoursElements}</div>
      </div>
    );
  }
}

export default TimeLine;
