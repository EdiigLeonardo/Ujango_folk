import React from "react";
import styles from "./ProfileLeftSidebar.module.scss";
import About from "./About";
import HighlighedMedia from "./HighlighedMedia";
import CommonFollowers from "./CommonFollowers";
import clsx from "clsx";

function ProfileLeftSidebar({ className = "" }) {
  /*let [isShowAll, setIsShowAll] = useState(false)*/

  return (
    <div className={clsx(styles.left_aside_menu, className)}>
      <CommonFollowers />
      <About />
      <HighlighedMedia />
    </div>
  );
}

export default ProfileLeftSidebar;
