import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChannelTitle from "./ChannelTitle.js";
import ScheduleWrapper from "./ScheduleWrappper.js";
import Nav from "./Nav.js";
import Helper from "./Helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      currentTime:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      indicatorPosition: 0,
    };
    this.handleNow = this.handleNow.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:1337/epg")
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({
          apiData: data.channels,
        });
      });
    this.interval = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState(() => ({
      currentTime:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    }));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("load", this.handleLoad);
  }
  handleNow() {
    const currentPosition = Helper.TimeinMin(this.state.currentTime);
    const scrollel = document.getElementById("scrollel");
    if (scrollel) {
      scrollel.scrollLeft =
        currentPosition * Helper.Scale() - window.innerWidth / 2;
    }
  }

  render() {
    const apiData = this.state.apiData;
    const currentTime = this.state.currentTime;

    return apiData.length === 0 ? (
      <div>
        <p>Loading..</p>
      </div>
    ) : (
      <div>
        <Nav />
        <div className="pagewrapper">
          <ChannelTitle channelData={apiData} />
          <ScheduleWrapper
            channelData={apiData}
            currentTime={currentTime}
            id="scrollel"
          />
        </div>
        <button className="nowButton" onClick={this.handleNow}>
          <b> Now</b>
        </button>
      </div>
    );
    this.handleNow();
  }
}

export default App;
