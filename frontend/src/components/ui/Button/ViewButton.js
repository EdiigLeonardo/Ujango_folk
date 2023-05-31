import React from "react";
import clsx from "clsx";
import styles from "./ViewButton.module.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ViewButton({ className = "" }) {
  return (
    <button className={clsx(styles.btn_view, className)}>
      <FontAwesomeIcon icon={faEye} />
    </button>
  );
}

export default ViewButton;
