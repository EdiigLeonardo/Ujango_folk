import React, { useState, useEffect } from "react";
import styles from "./ProfileLayout.module.scss";
import ProfileHeaderContainer from "../features/Users/components/ProfileHeaderContainer/ProfileHeaderContainer";
import ProfileLeftSidebar from "../features/Users/components/ProfileLeftSidebar/ProfileLeftSidebar";
import ProfileRightSidebar from "../features/Users/components/ProfileRightSidebar/ProfileRightSidebar";
import ProfileShortHeader from "../features/Users/components/ProfileHeaderContainer/ProfileShortHeader";
import Header from "./Header";
import clsx from "clsx";
function ProfileLayout({ children }) {
  const [isProfileHeaderContainerVisible, setIsProfileHeaderContainerVisible] =
    useState(true);
  const refProfileHeader = React.createRef();
  console.log(refProfileHeader);
  console.log(isProfileHeaderContainerVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsProfileHeaderContainerVisible(true);
        } else {
          setIsProfileHeaderContainerVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "-55px" }
    );

    observer.observe(refProfileHeader.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.profile_layout}>
      <Header className={styles.header} />
      <div className={styles.wrapper}>
        <div>
          <ProfileHeaderContainer
            ref={refProfileHeader}
            className={clsx(!isProfileHeaderContainerVisible && styles.hide)}
          />
          {!isProfileHeaderContainerVisible && (
            <ProfileShortHeader className={clsx(styles.profile_short_header)} />
          )}
        </div>
        <div className={styles.main_content}>
          <ProfileLeftSidebar className={styles.left} />
          {children}
          <ProfileRightSidebar className={styles.right} />
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
