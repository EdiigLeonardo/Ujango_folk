import "./Label.scss";
import React from "react";

function Label(props) {
  return <label className="label">{props.value}</label>;
}

export default Label;
