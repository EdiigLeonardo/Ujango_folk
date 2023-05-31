import "./MenuIcon.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuIcon(props) {
  let className = `menu-icon ${props.img ? "" : "no-img"}`;
  return (
    <div className={className}>
      <span className={props.count ? "count" : "hide"}>{props.count}</span>
      {props.img ? (
        <img src={props.img} />
      ) : (
        <FontAwesomeIcon icon={props.fa} />
      )}
    </div>
  );
}

export default MenuIcon;
