import clsx from "clsx";
import React from "react";
import styles from "./CircleProgressBar.module.scss";

function CircleProgressBar({ percentage = "0" }) {
  return (
    <div className={styles.circle_wrap}>
      <div className={styles.circle}>
        <div className={clsx(styles.mask, styles.full)}>
          <div className={styles.fill}></div>
        </div>
        <div className={clsx(styles.mask, styles.half)}>
          <div className={styles.fill}></div>
        </div>
        <div className={styles.inside_circle}> {percentage}</div>
      </div>
    </div>
  );
}

export default CircleProgressBar;
