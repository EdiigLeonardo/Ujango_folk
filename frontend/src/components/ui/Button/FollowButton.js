import React from "react";
import clsx from "clsx";
import styles from "./FollowButton.module.scss";

function FollowButton({ className = "" }) {
  return (
    <button
      type="button"
      className={clsx(
        "btn btn-outline-danger rounded-pill",
        styles.btn_follow,
        className
      )}
    >
      Follow
    </button>
  );
}

export default FollowButton;
