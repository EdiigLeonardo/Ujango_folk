import React from "react";
import clsx from "clsx";
import styles from "./ProfileShortHeader.module.scss";
import profilePhoto from "../../../../assets/Photos/Ediig.jpeg";
import CircleChecked from "../../../../components/ui/Icons/CircleChecked";
import FollowButton from "../../../../components/ui/Button/FollowButton";

function ProfileShortHeader({ className = "" }) {
  const isCertified = true;

  return (
    <div className={clsx(styles.profile_short_container, className)}>
      <div className="d-flex align-items-center">
        <img src={profilePhoto} className={styles.profile_photo} alt="" />
        <div>
          <strong className="p-1">Edig Leonardo</strong>
          <span className="p-1">@Ediig_Melchiior</span>
          {isCertified && <CircleChecked />}
        </div>
      </div>

      <FollowButton className="ms-3" />
    </div>
  );
}

export default ProfileShortHeader;
