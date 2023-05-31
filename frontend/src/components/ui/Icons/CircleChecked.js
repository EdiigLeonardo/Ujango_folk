import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CircleChecked.module.scss";
import clsx from "clsx";
/** */
function CircleChecked({ className = "checked_blue_color" }) {
  return (
    <FontAwesomeIcon className={clsx(styles.checked)} icon={faCircleCheck} />
  );
}

export default CircleChecked;
