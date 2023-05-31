import "./MenuAsideItem.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuAsideItem(props) {
  return (
    <li className="menu-aside-item d-flex justify-content-between">
      <div>
        <FontAwesomeIcon icon={props.fa} />
        <span>{props.title}</span>
        <span className={props.count ? "count" : "hide"}>{props.count}</span>
      </div>
    </li>
  );
}

export default MenuAsideItem;
