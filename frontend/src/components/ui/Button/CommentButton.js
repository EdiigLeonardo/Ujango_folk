import React from "react";
import clsx from "clsx";
import styles from "./CommentButton.module.scss";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentButton({ className = "" }) {
  return (
    <button className={clsx(styles.btn_comment, className)}>
      <FontAwesomeIcon icon={faComment} />
    </button>
  );
}

export default CommentButton;
