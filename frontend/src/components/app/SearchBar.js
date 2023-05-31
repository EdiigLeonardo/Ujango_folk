import React from "react";
import styles from "./SearchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <div tabIndex="0" className={styles.search_form}>
      <input
        type="search"
        aria-label="search"
        placeholder="Search for people or group in Ujango"
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default SearchBar;
