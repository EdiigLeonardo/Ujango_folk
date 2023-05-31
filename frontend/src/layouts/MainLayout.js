import React from "react";

function MainLayout() {
  return (
    <div className={styles.base_layout}>
      <Header />
      <div className={styles.wrapper}></div>
    </div>
  );
}

export default MainLayout;
/*
import React from "react";

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

export default BaseLayout;*/
