import "./Item.scss";
import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item(props) {
  return (
    <li className="trend-item d-flex justify-content-between">
      <div className="d-flex flex-column">
        <span>{props.title}</span>
        <h2>{props.country}</h2>
        <span>{props.nb_posts}</span>
      </div>
      <FontAwesomeIcon icon={faEllipsis} />
    </li>
  );
}

export default Item;
