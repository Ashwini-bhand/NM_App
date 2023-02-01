import React, { Component } from "react";
import Helper from "./Helper";

function DateLine() {
  const days = new Array(30).fill(null).map((item, index) => index);

  const currentmonth = new Date().getMonth();
  const currentdate = new Date().getDate();
  const monthnames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthnames[currentmonth];
  const normalStyle = (item) => {
    const ans =
      item.item == currentdate ? "rgb(239 239 239)" : "rgb(141 141 141)";
    return ans;
  };
  const datewidth = 12 * Helper.Scale();
  const dayElement = days.slice(1).map((item) => {
    return (
      <div
        className="timeLine"
        style={{
          width: datewidth,
          color: normalStyle({ item }),
        }}
        month={month}
        key={item}
      >
        {item} {month}
      </div>
    );
  });

  return (
    <div className="datecontariner">
      <div
        style={{
          marginLeft:
            currentdate > 6
              ? -(currentdate * datewidth - window.innerWidth / 2)
              : null,
        }}
        className="dateWrapper"
      >
        {dayElement}
      </div>
    </div>
  );
}

export default DateLine;
