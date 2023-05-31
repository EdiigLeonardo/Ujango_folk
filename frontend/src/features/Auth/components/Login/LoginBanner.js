import React from "react";
import Humaanns from "./Humaanns.svg";
import styles from "./LoginBanner.module.scss";

function LoginBanner() {
  return (
    <div className={styles.banner}>
      <img src={Humaanns} alt="logo" />
    </div>
  );
}

export default LoginBanner;
