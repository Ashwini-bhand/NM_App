import React, { Component } from "react";
import ReactDOM from "react-dom";

function Nav(props) {
  return (
    <div className="navbarWrapper">
      <div className="inline">
        <img src="./Images/EPG.png" />
        <ul className="inline">
          <li>Home</li>
          <li style={{ color: "#ffa80f" }}>TV Shows</li>
          <li>My List</li>
        </ul>
      </div>
      <ul className="inline profileWrapper">
        <li>
          <img src="./Images/searchicon.png" />
        </li>
        <li>
          <img src="./Images/notification.png" />
        </li>
        <li>
          <img src="./Images/profile.jpeg" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
