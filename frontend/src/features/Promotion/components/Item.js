import "./Item.scss";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item(props) {
  return (
    <div className="d-flex align-items-center justify-content-between promote-item">
      <img className="image" src={props.img} />
      <div className="d-flex flex-column">
        <h1 className="name">{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

export default Item;
