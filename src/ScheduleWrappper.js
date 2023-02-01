import React, { Component } from "react";
import ReactDOM from "react-dom";
import TimeLine from "./TimeLine.js";
import TvShowInfo from "./TvShowInfo.js";
import Helper from "./Helper.js";
import DateLine from "./DateLine.js";

class ScheduleWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.handleNow();
  }
  handleNow(e) {
    const currentPosition = Helper.TimeinMin(this.props.currentTime);
    const scrollel = document.getElementById("scrollel");

    scrollel.scrollLeft =
      currentPosition * Helper.Scale() - window.innerWidth / 2;
  }
  MoveIndicator(time) {
    var currentminite = Helper.TimeinMin(time);
    return currentminite * Helper.Scale();
  }

  render() {
    const props = this.props;
    const showdata = this.props.channelData.map((data, index) => (
      <div className="inline">
        {data.schedules.map((data) => (
          <TvShowInfo schedule={data} currentTime={this.props.currentTime} />
        ))}
      </div>
    ));

    return (
      <div className="schedulewrapper" id={this.props.id}>
        <div id="schedulewrapper">
          <div
            className="indicator"
            style={{ marginLeft: this.MoveIndicator(this.props.currentTime) }}
          ></div>
          <DateLine date={this.props.date} month={this.props.month} />
          <TimeLine />
          <div>{showdata}</div>
        </div>
      </div>
    );
  }
}
export default ScheduleWrapper;
