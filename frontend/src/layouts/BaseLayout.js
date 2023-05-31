import React from "react";
import styles from "./BaseLayout.module.scss";
import Header from "./Header";
import SideBar from "./SideBar";
function BaseLayout({ right_sidebar = "", children }) {
  return (
    <div className={styles.base_layout}>
      <Header />
      <div className={styles.wrapper}>
        <SideBar className={styles.sidebar} />
        <div className={styles.main_content}>
          <main>{children}</main>
          {right_sidebar}
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
