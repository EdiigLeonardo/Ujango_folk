import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ProfileHeaderContainer.module.scss";
//import img2 from "../../../../assets/cover.jpg";
import clsx from "clsx";
import UserStats from "./UserStats";
//<UserStats />
import Modal from "../Modal";
import CircleChecked from "../../../../components/ui/Icons/CircleChecked";
import FollowButton from "../../../../components/ui/Button/FollowButton";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const ProfileHeaderContainer = React.forwardRef(({ className = "" }, ref) => {
  const isProfile = false;
  //const isCertified = true;

  const [modalOpen, setModalOpen] = useState(false);
  //const match = useMatch("profile");
  //console.log(match);
  const loc = useLocation();
  const username = loc.state?.username || "@Lorem";

  loc.search = "/Rydhaj";
  const { isLoading, error, data } = useGetUserInfo(username);

  //if (isLoading || error) return <div> Loading... </div>;
  const isCertified = data?.certified;
  const profile_name = data?.profile_name;
  const avatar = data?.avatar;
  const cover_pic = data?.cover_pic;

  console.log(username);

  console.log(loc);
  console.log(loc.pathname);
  console.log(data);

  return (
    <div className={clsx(styles.profile_container, className)} ref={ref}>
      <div className={styles.profile_images}>
        <img src={cover_pic} className={styles.profile_cover_photo} />
        <img src={avatar} className={styles.avatar} />
      </div>

      <div className={styles.profile_username_info}>
        <p>
          <strong>{profile_name}</strong>
          <span>{isCertified && <CircleChecked />}</span>
        </p>
        <p>{username}</p>
        <UserStats />
      </div>

      <div
        className={clsx(
          "d-flex justify-content-between",
          styles.profile_details
        )}
      >
        <div className="d-flex justify-content-around ">
          <a
            className={clsx(
              "btn btn-rounded  btn-outline-secondary btn-sm",
              styles.btn_profile_menu
            )}
          >
            Timeline
          </a>
          <a
            className={clsx(
              "btn btn-rounded  btn-outline-secondary btn-sm",
              styles.btn_profile_menu
            )}
          >
            Comments
          </a>
          <a
            className={clsx(
              "btn btn-rounded  btn-outline-secondary btn-sm",
              styles.btn_profile_menu
            )}
          >
            Media
          </a>
          <a
            className={clsx(
              "btn btn-rounded  btn-outline-secondary btn-sm",
              styles.btn_profile_menu
            )}
          >
            Likes
          </a>
          <a
            className={clsx(
              "btn btn-rounded  btn-outline-secondary btn-sm",
              styles.btn_profile_menu
            )}
          >
            Saved
          </a>
        </div>

        <div>
          <a
            className={clsx(
              "btn btn-outline-secondary btn-sm",
              styles.btn_circle,
              "ms-3"
            )}
          >
            <i className="bi bi-three-dots" />
          </a>
          <a
            className={clsx(
              "btn  btn-outline-secondary btn-sm",
              styles.btn_circle,
              "ms-3"
            )}
          >
            <i className="bi bi-chat-dots-fill" />
          </a>
          {isProfile ? (
            <a
              className="btn rounded-pill
                       btn-follow btn-sm ms-3"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Edit Profile
            </a>
          ) : (
            <FollowButton className="ms-3" />
          )}
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
});

ProfileHeaderContainer.displayName = "ProfileHeaderContainer";
export default ProfileHeaderContainer;
