import React from "react";
import SpanLink from "../../../components/ui/Span/SpanLink";
import styles from "./PostHeader.module.scss";
import clsx from "clsx";
import {
  faEarth,
  faStopwatch,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircleChecked } from "../../../components/ui/Icons";

function PostHeader(props) {
  const { img, name, username, time, place, checked } = props;
  return (
    <div
      className={clsx(
        "d-flex align-items-center justify-content-between",
        styles.post_header
      )}
    >
      <div className="d-flex">
        <img className={clsx(styles.profile_photo)} src={img} />
        <div>
          <div className={styles.name}>
            <p>{name}</p>
            {checked && <CircleChecked />}
            <SpanLink word={username} /> 
          </div>
          <div className={clsx("d-flex", styles.info)}>
            <span>{time}</span>
            <span>{place}</span>
            <div><FontAwesomeIcon icon={faEarth} /></div>
          </div>
        </div>
      </div>

      <div className={styles.icon_view}>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
}

export default PostHeader;
