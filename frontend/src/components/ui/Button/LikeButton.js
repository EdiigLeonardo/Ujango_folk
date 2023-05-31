import React from "react";
import clsx from "clsx";
import styles from "./LikeButton.module.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeButton({ className = "" }) {
  return (
    <button className={clsx(styles.btn_like, className)}>
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}

export default LikeButton;
