import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./OkCheck.module.scss";
import clsx from "clsx";
function OkCheck({ isChecked = false }) {
  return (
    <FontAwesomeIcon
      className={clsx(styles.okchecked, isChecked && styles.active)}
      icon={faCircleCheck}
    />
  );
}

export default OkCheck;
