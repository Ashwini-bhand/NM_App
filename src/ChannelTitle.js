import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScheduleWrapper from "./ScheduleWrappper";
import LogoUrl from "./LogoUrl.js";
import DateLine from "./DateLine.js";

function ChannelTitle(props) {
  const channeldata = LogoUrl.map((data) => (
    <div className="logoWrapper">
      <div className="logo">
        {" "}
        <img className="channellogo" src={data.url} />
      </div>
    </div>
  ));

  return <div className="channelnameWrapper">{channeldata}</div>;
}

export default ChannelTitle;
