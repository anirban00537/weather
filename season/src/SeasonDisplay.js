import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "summer too hot",
    iconName: "sun",
  },
  winter: {
    text: "it is cold love it",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { iconName, text } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} massive icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
}
