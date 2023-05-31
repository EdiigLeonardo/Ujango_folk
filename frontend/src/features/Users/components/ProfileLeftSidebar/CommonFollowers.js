import React from "react";
import styles from "./CommonFollowers.module.scss";
import clsx from "clsx";

function CommonFollowers() {
  return (
    <div className={clsx("card", styles.common_followers)}>
      <p>Followed by</p>
      <div className="d-flex justify-content-between">
        <img src="https://picsum.photos/200?random=2" alt="" />
        <img src="https://picsum.photos/200?random=3" alt="" />
        <img src="https://picsum.photos/200?random=4" alt="" />
        <img src="https://picsum.photos/200?random=5" alt="" />
        <img src="https://picsum.photos/200?random=6" alt="" />
        <img src="https://picsum.photos/200?random=7" alt="" />
        <img src="https://picsum.photos/1000?random=8" alt="" />
      </div>
    </div>
  );
}

export default CommonFollowers;
