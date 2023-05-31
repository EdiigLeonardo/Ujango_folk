import "./MenuItem.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItem(props) {
  return (
    <li className="menu-item">
      <FontAwesomeIcon icon={props.fa} />
      <span>{props.title}</span>
    </li>
  );
}

export default MenuItem;
