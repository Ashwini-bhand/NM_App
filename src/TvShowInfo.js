import React, { Component } from "react";
import ReactDOM from "react-dom";
import Helper from "./Helper";

function TvShowInfo(props) {
  const TvShowTime = (data) => {
    let timestr = data.slice(11, 16);
    return timestr;
  };
  const startTime = TvShowTime(props.schedule.start);
  const endTime = TvShowTime(props.schedule.end);

  const TimeinMin = (data) => {
    var regExp = /[a-zA-Z]/g;
    let timestr = regExp.test(data) ? TvShowTime(data) : data;
    let time = Helper.TimeinMin(timestr);
    return time;
  };
  const startTimeinMin = TimeinMin(props.schedule.start);
  const endTimeinMin = TimeinMin(props.schedule.end);

  const isActive = (start, end) => {
    const currentTime = TimeinMin(props.currentTime);
    const styleactive = {};
    if ((start < currentTime && end > currentTime) || start === currentTime) {
      return "linear-gradient(90deg, rgb(29 22 10) 0%, rgb(110 72 6) 100%)";
      // return "linear-gradient(45deg, rgb(46 32 1) 0%, rgb(157 104 5) 100%)";
    }
  };

  const TvShowWidth = (start, end) => {
    return (end - start) * Helper.Scale();
  };
  const Style = {
    width: TvShowWidth(startTimeinMin, endTimeinMin),
    background: isActive(startTimeinMin, endTimeinMin),
  };
  return (
    <div className="schedule">
      <div className="show" style={Style}>
        <div className="showborder">
          <p>{props.schedule.title}</p>

          <h5>
            {startTime} - {endTime}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default TvShowInfo;
