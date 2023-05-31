import "./User.scss";
import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function User(props) {
  return (
    <div className="d-flex align-items-center justify-content-between user">
      <div className="d-flex align-items-center flex-wrap">
        <img src={props.img} alt="" />
        <h1>
          <strong>{props.name}</strong>{" "}
          {props.checked && <FontAwesomeIcon icon={faCircleCheck} />}
          <p> {props.username}</p>
        </h1>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default User;
