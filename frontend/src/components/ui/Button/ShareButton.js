import React from "react";
import clsx from "clsx";
import styles from "./ShareButton.module.scss";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShareButton({ className = "" }) {
  return (
    <button className={clsx(styles.btn_share, className)}>
      <FontAwesomeIcon icon={faArrowUpFromBracket} />
    </button>
  );
}

export default ShareButton;
