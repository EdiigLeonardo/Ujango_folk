import React from "react";

function Button({ title, ...props }) {
  return (
    <button
      className="btn btn-outline-danger rounded-pill dashboard__btn login-button m-1"
      onClick={props.handleClick}
    >
      <span className="btn-start-value p-1">
        <strong>{title}</strong>
      </span>
    </button>
  );
}

//export default Button;
