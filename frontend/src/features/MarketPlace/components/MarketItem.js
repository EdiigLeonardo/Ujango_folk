import styles from "./MarketItem.module.scss";
import React from "react";
import clsx from "clsx";

function MenuItem(props) {
  return (
    <div className={clsx("d-flex flex-column", styles.market_item)}>
      <img src={props.src} />
      <div className={styles.details}>
        <h3>${props.price}</h3>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h4>{props.place}</h4>
        <p className={styles.author}>{props.advertiser}</p>
      </div>
    </div>
  );
}

export default MenuItem;
