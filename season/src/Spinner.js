import React from "react";
import "./SeasonDisplay.css";

export default function Spinner(props) {
  return (
    <div className="ui active dimmer bodyLoader">
      <div className="ui text loader">
        <h3>{props.message}</h3>
      </div>
    </div>
  );
}

Spinner.defaultProps = {
  message: "Loading",
};
