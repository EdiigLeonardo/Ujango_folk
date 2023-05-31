import React from "react";
import Trend from "../../../Trendings/components/Trend";
import Follow from "../Follower";
import Promote from "../../../Promotion/components";
import styles from "./ProfileRightSidebar.module.scss";
import clsx from "clsx";
import CompleteYourProfile from "./CompleteYourProfile";

function ProfileRightSidebar({ className = "" }) {
  return (
    <div className={clsx(styles.right_sidebar, className)}>
      <CompleteYourProfile />
      <Trend />
      <Follow title="People you may like" />
      <Promote />
    </div>
  );
}

export default ProfileRightSidebar;
