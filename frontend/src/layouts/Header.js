import React from "react";

import styles from "./Header.module.scss";
import Navibar from "./Navibar";

import clsx from "clsx";
import SearchBar from "../components/app/SearchBar";

function Header({ className = "", children }) {
  //const [loggedinUserInfo, setLoggedInUserInfo] = userState({});

  return (
    <header
      className={clsx(
        "d-flex  align-items-center justify-content-around",
        styles.header,
        className
      )}
    >
      <div className={styles.logo}>Ujango</div>
      <SearchBar />
      <Navibar />
    </header>
  );
}

export default Header;
