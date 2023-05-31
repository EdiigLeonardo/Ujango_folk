import React from "react";
import styles from "./CompleteYourProfile.module.scss";
import OkCheck from "../../../../components/ui/Icons/OkCheck";
import CircleProgressBar from "../../../../components/app/CircleProgressBar";
import clsx from "clsx";

function CompleteYourProfile() {
  return (
    <div className={clsx("card", styles.profile_complete)}>
      <p>Complete your profile</p>
      <CircleProgressBar percentage={"75%"} />
      <p>
        Profile picture <OkCheck isChecked={true} />
      </p>
      <p>
        Cover Picture <OkCheck isChecked={true} />
      </p>
      <p>
        About section <OkCheck isChecked={false} />
      </p>
    </div>
  );
}

export default CompleteYourProfile;
