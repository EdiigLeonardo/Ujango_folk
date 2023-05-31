import React from "react";
import "./Button.scss";
import clsx from "clsx";

function Button(props) {
  const { title = "", className = "", handleClick, styles = "", icon } = props;

  return (
    <button
      type="button"
      className={clsx(
        "d-flex justify-content-center btn rounded-pill",
        className
      )}
      onClick={handleClick}
      style={styles}
    >
      {icon && <i className={clsx("p-1", icon)}> </i>}
      <span className={clsx("btn_text p-1")} style={{ color: styles.color }}>
        {title}
      </span>
    </button>
  );
}

export default Button;
