import React from "react";
import Trend from "../../Trendings/components/Trend";
import Follow from "../../Users/components/Follower";
import Promote from "../../Promotion/components";
import styles from "./FeedRightSideBar.module.scss";
function FeedRightSideBar() {
  return (
    <div className={styles.feed_rightsidebar}>
      <Trend />
      <Follow />
      <Promote />
    </div>
  );
}

export default FeedRightSideBar;
