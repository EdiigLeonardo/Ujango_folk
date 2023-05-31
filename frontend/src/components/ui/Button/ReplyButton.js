import React from "react";
import clsx from "clsx";
import styles from "./ReplyButton.module.scss";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReplyButton({ className = "" }) {
  return (
    <button className={clsx(styles.btn_reply, className)}>
      <FontAwesomeIcon icon={faRepeat} />
    </button>
  );
}

export default ReplyButton;
