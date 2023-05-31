import React from "react";
import styles from "./WriteAPostButton.module.scss";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WriteAPostButton() {
  return (
    <button className={styles.btn_write_post}>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ color: "var(--baseMainColor)", fontSize: "3rem" }}
      />
    </button>
  );
}

export default WriteAPostButton;
