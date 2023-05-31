import React from "react";
//import { useMatch } from "react-router-dom";

import styles from "./UserStats.module.scss";

function UserStats({ post = "155", followers = "200K", following = "16" }) {
  return (
    <div className={styles.user_stats}>
      <p>
        <span> {post}</span>Posts
      </p>

      <p>
        <span>{followers}</span>Followers
      </p>

      <p>
        <span>{following} </span>Following
      </p>
    </div>
  );
}

export default UserStats;
