import React from "react";
import styles from "./Reactions.module.scss";

import {
  LikeButton,
  CommentButton,
  ReplyButton,
  ShareButton,
  ViewButton,
} from "../../../components/ui/Button";
import clsx from "clsx";

function Reactions({ className = "" }) {
  return (
    <div
      className={clsx(
        "d-flex align-items-center justify-content-around ",
        styles.reaction,
        className
      )}
    >
      <div>
        <ViewButton />
        <span>3.3M</span>
      </div>
      <div>
        <LikeButton />
        <span>11.3k</span>
      </div>
      <div>
        <CommentButton />
        <span>2039</span>
      </div>
      <div>
        <ReplyButton />
        <span>345</span>
      </div>

      <div>
        <ShareButton />
      </div>
    </div>
  );
}

export default Reactions;
